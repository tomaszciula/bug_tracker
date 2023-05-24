<?php

namespace App\Entity;

use App\Repository\ProjectRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProjectRepository::class)]
class Project
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $description = null;

    #[ORM\ManyToMany(targetEntity: User::class, inversedBy: 'projects')]
    private Collection $user;

    #[ORM\OneToMany(mappedBy: 'project', targetEntity: Bug::class)]
    private Collection $bug;

    public function __construct()
    {
        $this->user = new ArrayCollection();
        $this->bug = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
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

    /**
     * @return Collection<int, User>
     */
    public function getUser(): Collection
    {
        return $this->user;
    }

    public function addUser(User $user): self
    {
        if (!$this->user->contains($user)) {
            $this->user->add($user);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        $this->user->removeElement($user);

        return $this;
    }

    /**
     * @return Collection<int, Bug>
     */
    public function getBug(): Collection
    {
        return $this->bug;
    }

    public function addBug(Bug $bug): self
    {
        if (!$this->bug->contains($bug)) {
            $this->bug->add($bug);
            $bug->setProject($this);
        }

        return $this;
    }

    public function removeBug(Bug $bug): self
    {
        if ($this->bug->removeElement($bug)) {
            // set the owning side to null (unless already changed)
            if ($bug->getProject() === $this) {
                $bug->setProject(null);
            }
        }

        return $this;
    }
}
