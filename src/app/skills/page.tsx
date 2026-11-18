import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { LightbulbIcon } from "lucide-react";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Image from "next/image";
import { createPageMetadata, pageSeo } from "@/lib/seo";

export const metadata = createPageMetadata({
  ...pageSeo.en.skills,
  path: "/skills",
});

const SkillsPage = () => {
  const programmingLanguages = [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
  ];

  const frameworks = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Vue.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Material UI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    },
  ];

  const tools = [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
  ];

  return (
    <div className="relative flex h-full w-full flex-col items-start gap-5 overflow-hidden">
      {/* Growth illustration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 right-4 z-0 hidden select-none lg:block"
      >
        <Image
          src="/growth.png"
          alt=""
          width={230}
          height={230}
          className="h-auto w-[230px] object-contain opacity-90"
          priority={false}
        />
      </div>

      <Badge variant="secondary" className="gap-1.5 py-1">
        <LightbulbIcon className="h-4 w-4" />
        My Skills
      </Badge>

      <div className="relative z-10 flex w-full flex-col gap-6">
        {/* Skills Introduction */}
        <div className="flex flex-col gap-3">
          <Heading>My Technical Skills & Expertise</Heading>

          <FramerWrapper y={0} x={200}>
            <p className="w-full font-poppins text-xl text-primary max-sm:text-lg">
              I am a Software Developer with 3 years of experience building
              responsive, user-friendly web applications. My core strengths
              include React, Next.js, TypeScript, JavaScript, and Tailwind CSS.
              I enjoy creating clean, maintainable solutions and continuously
              expanding my skills across frontend and backend development.
            </p>
          </FramerWrapper>
        </div>

        {/* Programming Languages */}
        <FramerWrapper y={100} delay={0.3} className="block w-full">
          <h2 className="relative mb-4 font-poppins text-2xl font-semibold text-primary max-sm:text-xl">
            Programming Languages
          </h2>

          <div className="grid w-full grid-cols-7 gap-4 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2">
            <SkillsFooter items={programmingLanguages} />
          </div>
        </FramerWrapper>

        {/* Frameworks & Libraries */}
        <FramerWrapper y={100} delay={0.32} className="block w-full">
          <h2 className="relative mb-4 font-poppins text-2xl font-semibold text-primary max-sm:text-xl">
            Frameworks & Libraries
          </h2>

          <div className="grid w-full grid-cols-7 gap-4 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2">
            <SkillsFooter items={frameworks} />
          </div>
        </FramerWrapper>

        {/* Tools & Technologies */}
        <FramerWrapper y={100} delay={0.34} className="block w-full">
          <h2 className="relative mb-4 font-poppins text-2xl font-semibold text-primary max-sm:text-xl">
            Tools & Technologies
          </h2>

          <div className="grid w-full grid-cols-7 gap-4 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2">
            <SkillsFooter items={tools} />
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default SkillsPage;
