import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { ArrowUpRight, Github } from "lucide-react";

const tagStyles: Record<string, string> = {
  "Next.js": "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100",
  Nextjs: "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100",
  React: "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-200",
  "Vue.js": "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200",
  Vue: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200",
  TypeScript: "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200",
  JavaScript: "bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-200",
  "Tailwind CSS": "bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-200",
  Tailwindcss: "bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-200",
  Redux: "bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-200",
  Pinia: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200",
  Nuxt: "bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-200",
  Vite: "bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-200",
  tRPC: "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200",
  Prisma: "bg-stone-100 text-stone-800 dark:bg-stone-800 dark:text-stone-200",
  PostgreSQL: "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-200",
  "Better Auth": "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100",
  Vitest: "bg-lime-100 text-lime-800 dark:bg-lime-950 dark:text-lime-200",
  Strapi: "bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-200",
  API: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200",
  "REST API": "bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200",
  "Dark Mode": "bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-200",
  "Dark mode": "bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-200",
  HTML: "bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-200",
  "Node.js": "bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-200",
};

type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
};

type ProjectCardsProps = {
  value: Project;
  num?: number;
};

export default function ProjectCards({ value }: ProjectCardsProps) {
  return (
    <FramerWrapper>
      <Card className="flex h-full flex-col overflow-hidden">
        <CardHeader>
          <CardTitle>{value.title}</CardTitle>
          <CardDescription>{value.description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-1">
          <div className="flex flex-wrap gap-2">
            {value.tags.map((tag) => (
              <span
                key={tag}
                className={cn(
                  "rounded-md px-2 py-1 text-xs font-medium",
                  tagStyles[tag] ??
                    "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100",
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex flex-wrap gap-2">
          {value.link ? (
            <Link
              href={value.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "default" }))}
            >
              View Project
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          ) : (
            <span className="text-sm text-muted-foreground">
              Demo coming soon
            </span>
          )}

          {value.github && (
            <Link
              href={value.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          )}
        </CardFooter>
      </Card>
    </FramerWrapper>
  );
}
