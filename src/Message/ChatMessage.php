<?php

declare(strict_types=1);

namespace App\Message;

class ChatMessage
{
    private $message;
    public function __constrct(string $message)
    {
        $this->message = $message;
    }
public function getMessage(): string
{
    return $this->message;
}

}
