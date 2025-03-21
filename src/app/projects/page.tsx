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
        `A Full Stack Web Application to track job applications.
        It has features like adding, updating, deleting job applications,
        and also has a feature to add notes to each job application.`,
      tags: ["Nextjs", "Typescript"],
      link: "https://job-application-tracker-rho.vercel.app/",
    },
   
    {
      title: "Weather App",
      description:
        "A Weather App that shows the current weather of any city in the world.",
      tags: ["Vite", "Typescript"],
      link: "https://weather-app-pink-five-83.vercel.app/",
    },
    {
      title: "Under Construction",
      description:
    "Coming Soon",
      tags: ["Nextjs", "Typescript"],
      link: "",
    },
  ];

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
