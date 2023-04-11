<?php

declare(strict_types=1);

namespace App\ApiImplementation;

use App\Entity\Bug;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Mapping\Entity;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class ApiImplementation
{

    public function addBug(EntityManagerInterface $entityManager, HttpClientInterface $httpClientInterface, array $dummy): JsonResponse
    {
        $bug = new Bug();
        $bug->setDescrition($dummy['description']);
        $bug->setPriority($dummy['priority']);
        $bug->setImportant($dummy['important']);
        $bug->setStatus($dummy['status']);
        $bug->setEnvironment($dummy['environment']);
        $bug->setReporting($dummy['reporting']);
        $bug->setDate(new DateTime());
        $bug->setResponsible($dummy['responsible']);
        $bug->setComment($dummy['comment']);

        $entityManager->persist($bug);
        $entityManager->flush();

        return new JsonResponse([
            'message' => 'New bug has been added',
        ]);
    }

}
