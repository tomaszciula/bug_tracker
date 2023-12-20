<?php

namespace App\Controller;

use App\ApiImplementation\ApiImplementation;
use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Repository\ProjectRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

class RegistrationController extends AbstractController
{
    private EntityManagerInterface $entityManagerInterface;
    private ApiImplementation $apiImplementation;
    private UserPasswordHasherInterface $userPasswordHasher;
    private ProjectRepository $projectRepository;
    public function __construct(EntityManagerInterface $entityManagerInterface, ApiImplementation $apiImplementation, UserPasswordHasherInterface $userPasswordHasher, ProjectRepository $projectRepository)
    {
        $this->entityManagerInterface = $entityManagerInterface;
        $this->apiImplementation = $apiImplementation;
        $this->userPasswordHasher = $userPasswordHasher;
        $this->projectRepository = $projectRepository;
    }
    #[Route('/register', name: 'app_register')]
    public function index(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager, ApiImplementation $apiImplementation, UserPasswordHasherInterface $passwordHasher): Response
    {
        // $form = $this->createForm(RegistrationFormType::class);
        // $user = $request->getContent();
        // var_dump($user);
        // $apiImplementation->addUser($passwordHasher, json_decode($user, true));
        // $user = new User();
        //         $form = $this->createForm(RegistrationFormType::class, $user);
        //         $form->handleRequest($request);
        // var_dump($_POST);
        //         if ($form->isSubmitted() && $form->isValid()) {
        // encode the plain password
        // $user->setPassword(
        //     $userPasswordHasher->hashPassword(
        //         $user,
        //         $form->get('plainPassword')->getData()
        //     )
        // );
        // $user->setRoles(['ROLE_ADMIN']);
        // $entityManager->persist($user);
        // $entityManager->flush();
        // do anything else you need here, like send an email

        //     return $this->redirectToRoute('app_login');
        // }

        return $this->render('registration/register.html.twig', [
            // 'registrationForm' => $form->createView(),
        ]);
    }
    #[Route('/add/user', name: 'app_add_user', methods: ['POST'])]
    public function __invoke(Request $request, UserPasswordHasherInterface $userPasswordHasherInterface): Response
    {
        // $userData = $request->getContent();
        $userData = json_encode($_POST);
        $userData = json_decode(
            $userData,
            1
        );
        $this->apiImplementation->addUser($userPasswordHasherInterface, (array)$userData);
        $projects = $this->projectRepository->findAll();

        if (count($projects) > 0) {
            return $this->redirect('http://localhost:3000/project');
        } else {
            return $this->redirectToRoute('app_login');
        }
        // return new JsonResponse(['success' => true]);
    }
}
