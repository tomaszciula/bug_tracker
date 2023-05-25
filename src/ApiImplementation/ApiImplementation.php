<?php

declare(strict_types=1);

namespace App\ApiImplementation;

use App\Entity\Bug;
use App\Entity\Project;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Mapping\Entity;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class ApiImplementation
{
    private HttpClientInterface $httpClientInterface;
    private EntityManagerInterface $entityManagerInterface;
    public function __construct(
        HttpClientInterface $httpClientInterface,
        EntityManagerInterface $entityManagerInterface,
    ){
        $this->httpClientInterface = $httpClientInterface;
        $this->entityManagerInterface = $entityManagerInterface;
    }
    public function addBug(array $bugData): JsonResponse
    {
        $bug = new Bug();
        $bug->setDescrition($bugData['description']);
        $bug->setPriority($bugData['priority']);
        $bug->setImportant($bugData['important']);
        $bug->setStatus($bugData['status']);
        $bug->setEnvironment($bugData['environment']);
        $bug->setReporting($bugData['reporting']);
        $bug->setDate(new DateTime());
        $bug->setResponsible($bugData['responsible']);
        $bug->setComment($bugData['comment']);

        $this->entityManagerInterface->persist($bug);
        $this->entityManagerInterface->flush();

        return new JsonResponse([
            'message' => 'New bug has been added',
        ]);
    }

    public function addProject( $projectData): JsonResponse
    {
        $project = new Project();
        $project->setName($projectData['name']);
        $project->setDescription($projectData['description']);

        $this->entityManagerInterface->persist($project);
        $this->entityManagerInterface->flush();

        return new JsonResponse([
            'message' => 'New project has been added',
        ]);
    }
}
