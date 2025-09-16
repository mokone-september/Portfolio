import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Rock-Paper-Scissors-gamejs",
      description:
'A modern, interactive implementation of the classic Rock-Paper-Scissors game with a clean UI and engaging gameplay',
      tags: ["HTML5", "JavaScript", "Canvas", "CSS"],
      link: "https://rock-paper-scissors-gamejs.vercel.app/",
    },
   
    {
      title: "Space-shooter-gamejs",
      description:
      'Space Shooter is an interactive game where players control a spaceship to destroy enemy ships while avoiding collisions. The game features increasing difficulty levels, score tracking, and visual effects for an engaging gaming experience.',
      tags: ["HTML5", "JavaScript", "Canvas", "CSS"],
      link: "https://space-shooter-gamejs.vercel.app/",
    },
    {
      title: "Snake-Gamejs",
      description:
    'A classic snake game built with React and Redux, featuring a simple and intuitive interface, and smooth gameplay.',
      tags: [ "React", "JavaScripts", "Redux"],
      link: "https://snake-gamejs-navy.vercel.app/",
    },   
    {
      title: "Memory Card Gamejs",
      description:
    'A simple memory matching game built with HTML, CSS, and JavaScript.',
    tags: ["HTML5", "JavaScript", "CSS", "Canvas"],
      link: "https://memory-gamejs.vercel.app/",
    },
   {
      title: "E-commerce Clothing Store",
      description:
    'A modern e-commerce clothing store built with React, Vite, and Tailwind CSS. It features a sleek and responsive design, easy navigation, and a seamless shopping experience.',
    tags: ["React", "TypeScript", "TailwindCSS", "API"],
      link: "https://ecommerce-clothing-neon.vercel.app/",
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
