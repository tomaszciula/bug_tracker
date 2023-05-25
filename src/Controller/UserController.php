<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    private EntityManagerInterface $entityManagerInterface;
    private UserRepository $userRepository;
    public function __construct(
        EntityManagerInterface $entityManagerInterface,
        UserRepository $userRepository,
    ){
        $this->entityManagerInterface = $entityManagerInterface;
        $this->userRepository = $userRepository;
    }
    #[Route('/users', name: 'app_user')]
    public function index(): JsonResponse
    {
        return $this->json([
            $this->userRepository->findAll(),
        ]);
    }
}
