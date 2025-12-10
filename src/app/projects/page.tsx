import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Job Application Tracker",
      description: `A web app to track job applications, with features to add, update, delete, and add notes, plus filtering and sorting by status or date.`,
      tags: ["Nextjs", "TypeScript", "React Hook Form"],
      link: "https://job-application-tracker-rho.vercel.app/",
    },
    {
      title: "Weather App",
      description:
        "A weather app that displays the current weather for any city, with features to search for cities and view detailed weather information.",
      tags: ["Vite", "TypeScript", "Dark mode", "React", "API"],
      link: "https://atmos-weather-app.vercel.app/",
    },
    {
      title: "Quiz App",
      description:
        "A quiz app that allows users to take quizzes on various topics, with features to create, update, and delete quizzes.",
      tags: ["Vue", "TypeScript", "Nuxt", "Pinia", "API"],
      link: "https://quiz-nuxt-smoky.vercel.app/",
    },
    {
      title: "Snake Game",
      description:
        "A classic snake game built with React and Redux, featuring a clean UI and smooth gameplay.",
      tags: ["React", "TypeScript", "Redux"],
      link: "https://snake-game-pi-rose.vercel.app/",
    },
    {
      title: "E-commerce Store",
      description:
        "A fully responsive e-commerce store dedicated to custom mechanical keyboards. Built with Vue.js 3, TypeScript, and TailwindCSS, showcasing routing, state management, SEO, and testing.",
      tags: ["Vue", "TypeScript", "Vite", "Pinia", "Tailwindcss"],
      link: "https://e-commerce-store-hazel-xi.vercel.app/",
    },
    {
      title: "Recipe App",
      description:
        "A culinary explorer powered by the MealDB API, allowing users to browse recipes with detailed steps, ingredients, and global cuisines.",
      tags: ["Vite", "TypeScript", "React", "API"],
      link: "https://recipe-app-liard-seven.vercel.app/",
    },
  ];

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1">
        <Layers className="h-4 w-4" />
        Projects
      </Badge>

      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>

        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-lg w-full text-primary max-sm:text-base">
            I love building projects. Here you all find a curated collection of my
            creative and technical work—each project reflects problem-solving,
            innovation, and continuous learning. Explore and enjoy the journey behind
            each creation.
          </p>
        </FramerWrapper>
      </div>

      <div className="w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {projects.map((val, index) => (
          <ProjectCards key={index} value={val} num={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
