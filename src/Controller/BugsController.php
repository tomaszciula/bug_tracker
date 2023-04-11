<?php

namespace App\Controller;

use App\ApiImplementation\ApiImplementation;
use App\Entity\Bug;
use App\Repository\BugRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;


class BugsController extends AbstractController
{

    private BugRepository $bugRepository;
    private EntityManagerInterface $entityManagerInterface;
    private HttpClientInterface $httpClient;
    private ApiImplementation $apiImplementation;
    public function __construct(BugRepository $bugRepository, EntityManagerInterface $entityManagerInterface, HttpClientInterface $httpClient, ApiImplementation $apiImplementation)
    {
        $this->bugRepository = $bugRepository;
        $this->entityManagerInterface = $entityManagerInterface;
        $this->httpClient = $httpClient;
        $this->apiImplementation = $apiImplementation;
    }
    #[Route('/bugs', name: 'app_bugs')]
    public function index(): JsonResponse
    {
        return $this->json(
            [ $this->bugRepository->findAll()]
        );
    }

    #[Route('/add/bug', name: 'app_bugs_post', methods: 'POST')]
    public function addBug(): JsonResponse
    {
        $dummy = [
            'description' => 'description',
            'priority' => "critical",
            'important' => 'low',
            'status' => 'reported',
            'environment' => 'windows, chrome',
            'reporting' => 'Tomcio Pomcio',
            'date' => new \DateTime(),
            'responsible' => 'Papcio Chmiel',
            'comment' => 'komentarz'
        ];
        $this->apiImplementation->addBug($this->entityManagerInterface, $this->httpClient, $dummy);
        return new JsonResponse('New bug saved');
    }

    #[Route('/bug/{id}', name: 'bug_delete', methods: 'DELETE')]
    public function deleteBug(int $id): JsonResponse
    {
        $bug = $this->bugRepository->findOneBy([$id]);
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
}
