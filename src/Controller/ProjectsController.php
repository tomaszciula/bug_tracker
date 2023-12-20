<?php

namespace App\Controller;

use App\Entity\Project;
use App\ApiImplementation\ApiImplementation;
use App\Repository\ProjectRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
// use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Component\Security\Core\Security;


class ProjectsController extends AbstractController
{
    private ProjectRepository $projectRepository;
    private UserRepository $userRepository;
    private EntityManagerInterface $entityManagerInterface;
    private HttpClientInterface $httpClientInterface;
    private ApiImplementation $apiImplementation;
    private Security $security;
    public function __construct(ProjectRepository $projectRepository, UserRepository $userRepository, EntityManagerInterface $entityManagerInterface, HttpClientInterface $httpClientInterface, ApiImplementation $apiImplementation, Security $security)
    {
        $this->projectRepository = $projectRepository;
        $this->userRepository = $userRepository;
        $this->entityManagerInterface = $entityManagerInterface;
        $this->httpClientInterface = $httpClientInterface;
        $this->apiImplementation = $apiImplementation;
        $this->security = $security;
    }
    
    #[Route('/projects', name: 'app_projects')]
    public function index(): JsonResponse
    {
        $projects = $this->projectRepository->findAll();

        $encoder = new JsonEncoder();
        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
        ];
        $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);
        $serializer = new Serializer([$normalizer], [$encoder]);
        $json = $serializer->serialize($projects, 'json');

        return $this->json(
            json_decode($json)
        );
    }
        #[Route('/add/project', name: 'app_projects_post', methods: 'POST')]
    public function __invoke(Request $request): JsonResponse
    {
        $projectData = $request->getContent();
        $projectData = json_decode($projectData);

        $newProject = new Project();
        $newProject->setName($projectData->name);
        $newProject->setDescription($projectData->description);

        $userId = $projectData->user->id;
        $user = $this->userRepository->findOneBy(['id' => $userId]);

        $newProject->addUser($user);

        $this->entityManagerInterface->persist($newProject);
        $this->entityManagerInterface->persist($user);
        $this->entityManagerInterface->flush();

        // $this->apiImplementation->addProject((array)$projectData);
        return new JsonResponse('New project saved');
    }

    #[Route('/project/delete/{id}', name: 'project_delete', methods: 'DELETE')]
    public function deleteProject(int $id): JsonResponse
    {
        $project = $this->projectRepository->findOneBy(['id' => $id]);
        $this->entityManagerInterface->remove($project);
        $this->entityManagerInterface->flush();
        if (http_response_code() !== 200) {
            return $this->json([
                'error' => http_response_code(),
            ]);
        } else {
            return $this->json([
                'message' => 'project has been removed',
            ]);
        }
    }

    #[Route('/project/{id}', name: 'project_by_id', methods: 'GET')]
    public function getProjectByID(int $id): JsonResponse
    {
        $project = $this->projectRepository->findOneBy(['id' => $id]);
        if (http_response_code() !== 200) {
            return $this->json([
                'error' => http_response_code(),
            ]);
        } else {
            return $this->json([
                $project,
            ]);
        }
    }
}
