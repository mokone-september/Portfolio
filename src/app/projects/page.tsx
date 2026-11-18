
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";
import { createPageMetadata, pageSeo } from "@/lib/seo";

export const metadata = createPageMetadata({
  ...pageSeo.en.projects,
  path: "/projects",
});

const projects = [
  {
    title: "Ubuntu Security Toolkit",
    description:
      "A practical Ubuntu security monitoring toolkit built with Bash and Python. Includes system security checks, authentication event monitoring, failed-login detection, and automated tests for authentication event detection.",
    tags: [
      "Bash",
      "Python",
      "Linux",
      "System Administration",
      "Security",
      "Testing",
    ],
    link: "",
    github:
      "https://github.com/mokone-september/ubuntu-security-toolkit",
  },
  {
    title: "AI Whiteboard",
    description:
      "An interactive whiteboard application featuring freehand drawing, sticky note creation and editing, object selection, colour customization, undo and redo, local storage persistence, and PNG export.",
    tags: ["React", "TypeScript", "Vite", "CSS", "Vitest"],
    link: "https://ai-whiteboard-pied.vercel.app/",
    github:
      "https://github.com/mokone-september/ai-whiteboard",
  },
  {
    title: "Rust CLI Task Manager",
    description:
      "A command-line task management application supporting task creation, listing, completion, and deletion. Built to explore Rust structs, enums, pattern matching, CLI argument parsing, and JSON-based persistence.",
    tags: ["Rust", "Serde", "Clap", "CLI", "JSON"],
    link: "",
    github:
      "https://github.com/mokone-september/rust-cli-task-manager",
  },
  {
    title: "Pokedex Pro",
    description:
      "A responsive Pokémon discovery application featuring Pokémon search, detailed stats, type information, filtering, sorting, persistent favourites, and recently viewed Pokémon. Includes dark mode, accessible navigation, and API caching.",
    tags: [
      "Next.js",
      "TypeScript",
      "Chakra UI",
      "Tailwind CSS",
      "TanStack Query",
      "Legend-State",
      "PokéAPI",
      "Vitest",
    ],
    link: "",
    github:
      "https://github.com/mokone-september/pokedex-pro",
  },
];

export default function ProjectsPage() {
  return (
    <main className="container mx-auto min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <FramerWrapper>
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="secondary"
            className="mb-4 inline-flex items-center gap-2"
          >
            <Layers className="h-4 w-4" />
            My Work
          </Badge>

          <Heading>Projects</Heading>

          <p className="mt-4 text-muted-foreground">
            A selection of projects where I apply software engineering
            principles to build practical, responsive, and maintainable
            applications.
          </p>
        </div>
      </FramerWrapper>

      <section
        aria-label="Projects"
        className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2"
      >
        {projects.map((project, index) => (
          <ProjectCards
            key={project.title}
            value={project}
            num={index}
          />
        ))}
      </section>
    </main>
  );
}
