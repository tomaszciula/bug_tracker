<?php

namespace App\Controller;

use App\ApiImplementation\ApiImplementation;
use App\Repository\ProjectRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class ProjectsController extends AbstractController
{
    private ProjectRepository $projectRepository;
    private EntityManagerInterface $entityManagerInterface;
    private HttpClientInterface $httpClientInterface;
    private ApiImplementation $apiImplementation;
    public function __construct(ProjectRepository $projectRepository, EntityManagerInterface $entityManagerInterface, HttpClientInterface $httpClientInterface, ApiImplementation $apiImplementation)
    {
        $this->projectRepository = $projectRepository;
        $this->entityManagerInterface = $entityManagerInterface;
        $this->httpClientInterface = $httpClientInterface;
        $this->apiImplementation = $apiImplementation;
    }
    #[Route('/projects', name: 'app_projects')]
    public function index(): JsonResponse
    {
        return $this->json(
            [$this->projectRepository->findAll()]
        );
    }
        #[Route('/add/project', name: 'app_projects_post', methods: 'POST')]
    public function __invoke(Request $request): JsonResponse
    {
        $projectData = $request->getContent();
        $projectData = json_decode($projectData);
        $this->apiImplementation->addProject((array)$projectData);
        return new JsonResponse('New project saved');
    }

    #[Route('/project/{id}', name: 'project_delete', methods: 'DELETE')]
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
