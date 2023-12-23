<?php

namespace App\Controller;

use App\Entity\Todo;
use App\Repository\TodoRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class TodosController extends AbstractController
{
    private TodoRepository $todoRepository;
    private UserRepository $userRepository;
    private EntityManagerInterface $entityManager;

    public function __construct(TodoRepository $todoRepository, UserRepository $userRepository, EntityManagerInterface $entityManager)
    {
        $this->todoRepository = $todoRepository;
        $this->userRepository = $userRepository;
        $this->entityManager = $entityManager;
    }

    #[Route('/todos', name: 'app_todos')]
    public function index(): JsonResponse
    {
        $todos = $this->todoRepository->findAll();
        $encoder = new JsonEncoder();
        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
        ];
        $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);
        $serializer = new Serializer([$normalizer], [$encoder]);
        $json = $serializer->serialize($todos, 'json');

        return $this->json(
            json_decode($json),);
        // return new JsonResponse($todos);
    }

    #[Route('/add/todo', name: 'app_add_todo', methods: ['POST'])]
    public function addTodo(Request $request): JsonResponse
    {
        $req = $request->getContent();
        $req = json_decode($req);

        $user_id = $req->user_id;
        $user = $this->userRepository->findOneBy(['id' => $user_id]);
        
        // $user = $this->userRepository->findOneBy(['id' => $userId]);

        $todo = new Todo();
        $todo->setDone(false);
        $todo->setImportant($req->important);
        $todo->setText($req->text);

        $todo->setUser($user);

        $this->entityManager->persist($todo);
        $this->entityManager->persist($user);

        $this->entityManager->flush();


        return new JsonResponse('Note added successfully', Response::HTTP_CREATED);
    }

    #[Route('/delete/note/{id}', name: 'app_delete_note_id', methods: ['DELETE'])]

    public function deleteNote(int $id): JsonResponse
    {
        $todo = $this->todoRepository->findOneBy(['id' => $id]);

        $this->entityManager->remove($todo);
        $this->entityManager->flush();
        return new JsonResponse('Note deleted successfully', Response::HTTP_OK);
    }
}
