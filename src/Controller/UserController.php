<?php

namespace App\Controller;

use App\ApiImplementation\ApiImplementation;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\User\UserInterface;

class UserController extends AbstractController
{
    private EntityManagerInterface $entityManagerInterface;
    private UserRepository $userRepository;
    private ApiImplementation $apiImplementation;
    public function __construct(
        EntityManagerInterface $entityManagerInterface,
        UserRepository $userRepository,
        ApiImplementation $apiImplementation,
    ) {
        $this->entityManagerInterface = $entityManagerInterface;
        $this->userRepository = $userRepository;
        $this->apiImplementation = $apiImplementation;

    }
    #[Route('/user', name: 'app_user')]
    public function __invoke(): JsonResponse
    {
        return $this->json($this->getUser());
    }

    #[Route('/users', name: 'app_users')]
    public function index(): JsonResponse
    {
        return $this->json([
            $this->userRepository->findAll(),
        ]);
    }
    #[Route('/add/user', name: 'app_user_post', methods: 'POST')]
    public function addUser(Request $request): JsonResponse
    {
        $userData = $request->getContent();
        $userData = json_decode($userData);
        $this->apiImplementation->addUser((array)$userData);
        return new JsonResponse('New bug saved');
    }
}
