<?php

namespace App\Controller;

use App\Message\SmsNotification;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Messenger\MessageBus;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Notifier\Message\ChatMessage;
use Symfony\Component\Notifier\Message\MessageInterface;
use Symfony\Component\Notifier\Message\SmsMessage;
use Symfony\Component\Routing\Annotation\Route;

class ChatController extends AbstractController
{
    #[Route('/chat', name: 'app_chat')]
    public function index(MessageBusInterface $messageBusInterface): Response
    {
        $messageBusInterface->dispatch(new SmsNotification('Look! I created a message! and this is my message'));
        return $this->render('chat/index.html.twig', [
            'controller_name' => 'ChatController',
        ]);
    }
}
