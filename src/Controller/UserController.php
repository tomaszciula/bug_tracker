<?php

namespace App\Controller;

use App\ApiImplementation\ApiImplementation;
use App\Repository\ProjectRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class UserController extends AbstractController
{
    private EntityManagerInterface $entityManagerInterface;
    private UserRepository $userRepository;
    private ProjectRepository $projectRepository;
    private ApiImplementation $apiImplementation;
    private UserPasswordHasherInterface $passwordHasher;
    public function __construct(
        EntityManagerInterface $entityManagerInterface,
        UserRepository $userRepository,
        ProjectRepository $projectRepository,
        ApiImplementation $apiImplementation,
        UserPasswordHasherInterface $passwordHasher,
    ) {
        $this->entityManagerInterface = $entityManagerInterface;
        $this->userRepository = $userRepository;
        $this->projectRepository = $projectRepository;
        $this->apiImplementation = $apiImplementation;
        $this->passwordHasher = $passwordHasher;

    }
    #[Route('/user', name: 'app_user')]
    public function __invoke(): Response
    {
        $user = $this->getUser();
        $encoder = new JsonEncoder();
        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
        ];
        $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);
        $serializer = new Serializer([$normalizer], [$encoder]);
        $json = $serializer->serialize($user, 'json');
        // $json = json_decode($json);
        return $this->json(json_decode($json));
        // return $this->json($user);
    }

    #[Route('/users', name: 'app_users')]
    public function index(): JsonResponse
    {
        $users =  $this->userRepository->findAll();
        $encoder = new JsonEncoder();
        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
        ];
        $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);
        $serializer = new Serializer([$normalizer], [$encoder]);
        $json = $serializer->serialize($users, 'json');
        return $this->json(json_decode($json));
    }

    #[Route('/add/user', name: 'app_user_post', methods: 'POST')]
    public function addUser(Request $request): JsonResponse
    {
        $userData = $request->getContent();
        $userData = json_decode($userData);
        $this->apiImplementation->addUser($this->passwordHasher, (array)$userData);
        return new JsonResponse('New bug saved');
    }

    #[Route('/last', name: 'app_last_user', methods: 'GET')]
    public function lastUser(): JsonResponse
    {
        return $this->json([
            $this->userRepository->findLastInsertedUser(),
        ]);
    }

    #[Route('/relateUserWithProjects', name: 'app_relate_user_with_projects', methods: 'POST')]
    public function relateUserWithProjects(Request $request): JsonResponse
    {
        $data = $request->getContent();
        $data = json_decode($data);
        $lastUser = $this->userRepository->findLastInsertedUser();
        foreach ($data as $projectName) {
            $project = $this->projectRepository->findOneBy(['name' => $projectName]);
            $lastUser->addProject($project);
        }

        $this->entityManagerInterface->persist($lastUser);
        $this->entityManagerInterface->flush();
        // $this->redirectToRoute('app_login');

        return new JsonResponse('User added successfully');

    }

    #[Route('/redirectToLogin', name: 'app_redirect_to_login', methods: 'GET')]
    public function redirectToLogin(): JsonResponse
    {
        $this->redirectToRoute('app_login');
        return new JsonResponse('Redirect to login');
    }
}
