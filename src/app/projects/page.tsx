import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Job Application Tracker",
      description:
        `A web app to track job applications, with features to add, update, delete, and add notes, plus filtering and sorting by status or date.`,
      tags: ["Nextjs", "Typescript", "React Hook Form"],
      link: "https://job-application-tracker-rho.vercel.app/",
    },
   
    {
      title: "Weather App",
      description:
      'A weather app that displays the current weather for any city, with features to search for cities and view detailed weather information.',
      tags: ["Vite", "Typescript", "Library"],
      link: "https://atmos-weather-app.vercel.app/",
    },
    {
      title: "Quiz App",
      description:
    'A quiz app that allows users to take quizzes on various topics, with features to create, update, and delete quizzes.',
    tags: ["Vue", "Typescript", "Nuxt", "Pinia"],
      link: "https://quiz-nuxt-smoky.vercel.app/",
    },
    {
      title: "Snake Game",
      description:
    'A classic snake game built with React and Redux, featuring a simple and intuitive interface, and smooth gameplay.',
      tags: [ "React", "Typescript", "Redux"],
      link: "https://snake-game-pi-rose.vercel.app/",
    },
  ];
  ;

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Layers className="h-4 w-4" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to Build Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
