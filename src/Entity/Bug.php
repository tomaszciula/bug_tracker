<?php

namespace App\Entity;

use App\Repository\BugRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BugRepository::class)]
class Bug
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $description = null;

    #[ORM\Column(length: 255)]
    private ?string $priority = null;

    #[ORM\Column(length: 255)]
    private ?string $important = null;

    #[ORM\Column(length: 255)]
    private ?string $status = null;

    #[ORM\Column(length: 255)]
    private ?string $environment = null;

    #[ORM\Column(length: 255)]
    private ?string $reporting = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $date = null;

    #[ORM\Column(length: 255)]
    private ?string $responsible = null;

    #[ORM\Column(length: 255)]
    private ?string $comment = null;

    #[ORM\Column(type: Types::BLOB, nullable: true)]
    private $screenshot = null;

    #[ORM\ManyToOne(inversedBy: 'bug')]
    private ?Project $project = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDescrition(): ?string
    {
        return $this->description;
    }

    public function setDescrition(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getPriority(): ?string
    {
        return $this->priority;
    }

    public function setPriority(string $priority): self
    {
        $this->priority = $priority;

        return $this;
    }

    public function getImportant(): ?string
    {
        return $this->important;
    }

    public function setImportant(string $important): self
    {
        $this->important = $important;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getEnvironment(): ?string
    {
        return $this->environment;
    }

    public function setEnvironment(string $environment): self
    {
        $this->environment = $environment;

        return $this;
    }

    public function getReporting(): ?string
    {
        return $this->reporting;
    }

    public function setReporting(string $reporting): self
    {
        $this->reporting = $reporting;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getResponsible(): ?string
    {
        return $this->responsible;
    }

    public function setResponsible(string $responsible): self
    {
        $this->responsible = $responsible;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(string $comment): self
    {
        $this->comment = $comment;

        return $this;
    }

    public function getScreenshot()
    {
        return $this->screenshot;
    }

    public function setScreenshot($screenshot): self
    {
        $this->screenshot = $screenshot;

        return $this;
    }

    // public function getProject(): ?Project
    // {
    //     return $this->project;
    // }

    public function setProject(?Project $project): self
    {
        $this->project = $project;

        return $this;
    }
}
