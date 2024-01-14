<?php

declare(strict_types=1);

namespace App\Controller;

use App\ApiImplementation\ApiImplementation;
use App\Entity\Project;
use App\Repository\BugRepository;
use App\Repository\ProjectRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class BugsController extends AbstractController
{
    private BugRepository $bugRepository;
    private ProjectRepository $projectRepository;
    private EntityManagerInterface $entityManagerInterface;
    private HttpClientInterface $httpClient;
    private ApiImplementation $apiImplementation;
    public function __construct(BugRepository $bugRepository, ProjectRepository $projectRepository, EntityManagerInterface $entityManagerInterface, HttpClientInterface $httpClient, ApiImplementation $apiImplementation)
    {
        $this->bugRepository = $bugRepository;
        $this->projectRepository = $projectRepository;
        $this->entityManagerInterface = $entityManagerInterface;
        $this->httpClient = $httpClient;
        $this->apiImplementation = $apiImplementation;
    }
    #[Route('/bugs', name: 'app_bugs')]
    public function index(): JsonResponse
    {
        $bugs = $this->bugRepository->findAll();

        $encoder = new JsonEncoder();
        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
        ];
        $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);
        $serializer = new Serializer([$normalizer], [$encoder]);
        $json = $serializer->serialize($bugs, 'json');

        return $this->json(
            json_decode($json),
            // [ $this->bugRepository->findAll()]
        );
    }

    #[Route('/add/bug', name: 'app_bugs_post', methods: 'POST')]
    public function __invoke(Request $request): JsonResponse
    {
        $repository = $this->entityManagerInterface->getRepository(Project::class);
        $bugData = $request->getContent();
        $bugData = json_decode($bugData);
        $project = $repository->findOneBy(['name' => $bugData->project]);
        $this->apiImplementation->addBug((array)$bugData, $project);
        return new JsonResponse('New bug saved');
    }

    #[Route('/bug/delete/{id}', name: 'bug_delete', methods: 'DELETE')]
    public function deleteBug(int $id): JsonResponse
    {
        $bug = $this->bugRepository->findOneBy(['id' => $id]);
        $this->entityManagerInterface->remove($bug);
        $this->entityManagerInterface->flush();
        if (http_response_code() !== 200) {
            return $this->json([
                'error' => http_response_code(),
            ]);
        } else {
            return $this->json([
                'message' => 'bug has been removed',
            ]);
        }
    }

    #[Route('/bug/{id}', name: 'bug_by_id', methods: 'GET')]
    public function getBugByID(int $id): JsonResponse
    {
        $bug = $this->bugRepository->findOneBy(['id' => $id]);
        if (http_response_code() !== 200) {
            return $this->json([
                'error' => http_response_code(),
            ]);
        } else {
            return $this->json([
                json_encode($bug),
            ]);
        }
    }
    #[Route('/bug/update/status', name: 'bug_update_status', methods: 'PUT')]
    public function updateBug(Request $request): JsonResponse
    {
        $req = $request->getContent();
        $request = json_decode($req);
        $bug = $this->bugRepository->findOneBy(['id' => $request->id]);
        $bug->setStatus(
            $request->status
        );
        $this->entityManagerInterface->persist($bug);
        $this->entityManagerInterface->flush();
        if (http_response_code() !== 200) {
            return $this->json([
                'error' => http_response_code(),
            ]);
        } else {
            return $this->json([
                'message' => 'bug status has been updated',
            ]);
        }
    }
}
