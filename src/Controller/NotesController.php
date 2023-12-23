<?php

namespace App\Controller;

use App\Entity\Note;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\NoteRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class NotesController extends AbstractController
{
    private NoteRepository $noteRepository;
    private UserRepository $userRepository;
    private Security $security;
    private EntityManagerInterface $entityManager;
    public function __construct(NoteRepository $noteRepository, UserRepository $userRepository, Security $security, EntityManagerInterface $entityManager)
    {
        $this->noteRepository = $noteRepository;
        $this->userRepository = $userRepository;
        $this->security = $security;
        $this->entityManager = $entityManager;
    }

    #[Route('/notes', name: 'app_notes')]
    public function index(): JsonResponse
    {
        $notes = $this->noteRepository->findAll();
        $encoder = new JsonEncoder();
        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
        ];
        $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);
        $serializer = new Serializer([$normalizer], [$encoder]);
        $json = $serializer->serialize($notes, 'json');

        return $this->json(
            json_decode($json),
            // [ $this->bugRepository->findAll()]
        );
    }

    #[Route('/add/note', name: 'app_add_note', methods: ['POST'])]
    public function addNote(Request $request): JsonResponse
    {
        $req = $request->getContent();
        $req = json_decode($req);

        $userId = $req->user->id;
        $user = $this->userRepository->findOneBy(['id' => $userId]);

        $note = new Note();
        $note->setTitle($req->title);
        $note->setContent($req->content);

        $note->setUser($user);

        $this->entityManager->persist($note);
        $this->entityManager->persist($user);

        $this->entityManager->flush();


        return new JsonResponse('Note added successfully', Response::HTTP_CREATED);
    }

    #[Route('/delete/note/{id}', name: 'app_delete_note_id', methods: ['DELETE'])]

    public function deleteNote(int $id): JsonResponse
    {
        $note = $this->noteRepository->findOneBy(['id' => $id]);

        $this->entityManager->remove($note);
        $this->entityManager->flush();
        return new JsonResponse('Note deleted successfully', Response::HTTP_OK);
    }
}
