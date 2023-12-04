<?php

namespace App\Controller;

use App\ApiImplementation\ApiImplementation;
use App\Entity\User;
use App\Form\RegistrationFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

class RegistrationController extends AbstractController
{
    #[Route('/register', methods: 'POST', name: 'app_register')]
    public function __invoke(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager, ApiImplementation $apiImplementation, UserPasswordHasherInterface $passwordHasher): Response
    {
        $user = $request->getContent();
        var_dump($user);
        $apiImplementation->addUser($passwordHasher, json_decode($user, true));
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

        return $this->redirectToRoute('app_login');
    }

    // return $this->render('registration/register.html.twig', [
    //     'registrationForm' => $form->createView(),
    // ]);

}
