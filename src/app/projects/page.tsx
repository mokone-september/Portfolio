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
    title: "Pokedex Pro",
    description:
      "A modern Pokémon discovery application featuring Pokémon search, detailed information, type filtering, favorites, authentication, and a responsive interface. Built with Next.js, TypeScript, Tailwind CSS, tRPC, Prisma, and PostgreSQL.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "tRPC",
      "Prisma",
      "PostgreSQL",
      "Better Auth",
      "Vitest",
    ],
    link: "",
    github: "https://github.com/mokone-september/pokedex-pro",
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
            I build practical web applications with modern technologies,
            focusing on usability, accessibility, maintainability, and
            reliable software.
          </p>
        </div>
      </FramerWrapper>

      <section
        aria-label="Projects"
        className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
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
