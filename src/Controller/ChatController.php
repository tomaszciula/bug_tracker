<?php

namespace App\Controller;

// require_once dirname(__DIR__).'/vendor/autoload_runtime.php';

use App\Message\SmsNotification;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Messenger\MessageBus;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Notifier\Message\ChatMessage;
use Symfony\Component\Notifier\Message\MessageInterface;
use Symfony\Component\Notifier\Message\SmsMessage;
use Symfony\Component\Routing\Annotation\Route;
use Pusher\Pusher;

class ChatController extends AbstractController
{
    #[Route('/chat', name: 'app_chat')]
    public function index(MessageBusInterface $messageBusInterface, Request $request): Response
    {
        $options = array(
            'cluster' => 'eu',
            'useTLS' => true
          );
        $pusher = new Pusher(
            '41a47b7fa6a18928b1fe',
            '9a9ca64e217e05052b73',
            '1627704',
            $options
        );

        // $data['message'] = 'hello Tomek to działa!';
        $data['message'] = $request->getContent();
        $pusher->trigger('my-channel', 'my-event', $data['message']);
        // $messageBusInterface->dispatch(new SmsNotification($request->getContent()));
        // $messageBusInterface->dispatch(new ChatMessage('Chat message'));
        return $this->render('chat/index.html.twig', [
            'controller_name' => 'ChatController',
        ]);
    }
}
