<?php

declare(strict_types=1);

namespace App\ApiImplementation;

use App\Entity\Bug;
use App\Entity\Project;
use App\Entity\User;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Mapping\Entity;
// use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Core\Security;


class ApiImplementation
{
    private HttpClientInterface $httpClientInterface;
    private EntityManagerInterface $entityManagerInterface;
    private Security $security;
    public function __construct(
        HttpClientInterface $httpClientInterface,
        EntityManagerInterface $entityManagerInterface,
        Security $security,
    ) {
        $this->httpClientInterface = $httpClientInterface;
        $this->entityManagerInterface = $entityManagerInterface;
        $this->security = $security;
    }
    public function addBug(array $bugData, Project $project): JsonResponse
    {
        $proj = new Project();
        $proj = $project;

        $bug = new Bug();
        $bug->setDescription($bugData['description']);
        $bug->setPriority($bugData['priority']);
        $bug->setImportant($bugData['important']);
        $bug->setStatus($bugData['status']);
        $bug->setEnvironment($bugData['environment']);
        $bug->setReporting($bugData['reporting']);
        $bug->setDate(new DateTime());
        $bug->setResponsible($bugData['responsible']);
        $bug->setComment($bugData['comment']);
        $bug->setProject($proj);
        $bug->setTitle($bugData['title']);
        $bug->setStepsToBug($bugData['steps_to_bug']);
        $bug->setExpectedBehavior($bugData['expected_behavior']);
        $bug->setActuallBehavior($bugData['actuall_behavior']);
        $bug->setScreenPhoto('screenPhoto');

        $proj->addBug($bug);

        $this->entityManagerInterface->persist($bug);
        $this->entityManagerInterface->persist($proj);
        $this->entityManagerInterface->flush();

        return new JsonResponse([
            'message' => 'New bug has been added',
        ]);
    }

    public function addProject($projectData): JsonResponse
    {
        $actuallUser = new User();
        $actuallUser = $this->security->getUser();

        $project = new Project();
        $project->setName($projectData['name']);
        $project->setDescription($projectData['description']);

        // $user = $this->security->getUser();

        $project->addUser($actuallUser);

        $this->entityManagerInterface->persist($project);
        $this->entityManagerInterface->flush();

        return new JsonResponse([
            'message' => 'New project has been added',
        ]);
    }
    public function addUser(UserPasswordHasherInterface $passwordHasher, $userData): JsonResponse
    {
        $user = new User();
        $user->setFirstname($userData['firstname']);
        $user->setLastname($userData['lastname']);
        $user->setEmail($userData['email']);
        $user->addRole($userData['role']);
        $user->setPosition($userData['position']);
        $plainPassword = $userData['password'];
        $hashedPassword = $passwordHasher->hashPassword(
            $user,
            $plainPassword,
        );
        $user->setPassword($hashedPassword);
        $user->setIsVerified(true);

        $this->entityManagerInterface->persist($user);
        $this->entityManagerInterface->flush();

        return new JsonResponse([
            'message' => 'New user has been added',
        ]);
    }

    // public function relateUserWithProjects(Project $project): JsonResponse
    // {
    //     // $user->addProject($project);
    //     $this->entityManagerInterface->persist($project);
    //     $this->entityManagerInterface->flush();

    //     return new JsonResponse([
    //         'message' => 'User has been added to project',
    //     ]);
    // }
}
