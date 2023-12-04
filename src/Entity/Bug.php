<?php

namespace App\Entity;

use App\Repository\BugRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: BugRepository::class)]
class Bug
{
    // #[Groups(['user'])]
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

    // #[Groups(['user'])]
    #[ORM\ManyToOne(inversedBy: 'bug')]
    private ?Project $project = null;

    #[ORM\Column(length: 255)]
    private ?string $title = null;

    #[ORM\Column(length: 255)]
    private ?string $steps_to_bug = null;

    #[ORM\Column(length: 255)]
    private ?string $expected_behavior = null;

    #[ORM\Column(length: 255)]
    private ?string $actuall_behavior = null;

    #[ORM\Column(length: 255)]
    private ?string $screenPhoto = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
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
        return (string) $this->screenshot;
    }

    public function setScreenshot($screenshot): self
    {
        $this->screenshot = $screenshot;

        return $this;
    }

    public function getProject(): ?Project
    {
        return $this->project;
    }

    public function setProject(?Project $project): self
    {
        $this->project = $project;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getStepsToBug(): ?string
    {
        return $this->steps_to_bug;
    }

    public function setStepsToBug(string $steps_to_bug): self
    {
        $this->steps_to_bug = $steps_to_bug;

        return $this;
    }

    public function getExpectedBehavior(): ?string
    {
        return $this->expected_behavior;
    }

    public function setExpectedBehavior(string $expected_behavior): self
    {
        $this->expected_behavior = $expected_behavior;

        return $this;
    }

    public function getActuallBehavior(): ?string
    {
        return $this->actuall_behavior;
    }

    public function setActuallBehavior(string $actuall_behavior): self
    {
        $this->actuall_behavior = $actuall_behavior;

        return $this;
    }

    public function getScreenPhoto(): ?string
    {
        return $this->screenPhoto;
    }

    public function setScreenPhoto(string $screenPhoto): self
    {
        $this->screenPhoto = $screenPhoto;

        return $this;
    }
}
