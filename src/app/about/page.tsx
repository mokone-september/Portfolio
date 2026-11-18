import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import {
  User2,
  Code,
  Layers,
  Lightbulb,
  Languages,
  Flag,
  Heart,
  ChevronRightSquareIcon,
  Cpu,
  Github,
} from "lucide-react";
import { createPageMetadata, pageSeo } from "@/lib/seo";

export const metadata = createPageMetadata({
  ...pageSeo.en.about,
  path: "/about",
});

const Page = () => {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Building responsive, accessible and user-friendly interfaces with React, Next.js and TypeScript.",
      icon: Code,
    },
    {
      title: "Full-Stack Development",
      description:
        "Exploring frontend and backend technologies to build complete applications that solve practical problems.",
      icon: Layers,
    },
    {
      title: "Continuous Learning",
      description:
        "Developing my skills through personal projects, open-source contributions and exploring new technologies.",
      icon: Lightbulb,
    },
  ];

  const personalDetails = [
    {
      title: "Language",
      values: ["English", "Afrikaans"],
      icon: Languages,
    },
    {
      title: "Nationality",
      values: ["South Africa"],
      icon: Flag,
    },
    {
      title: "Gender",
      values: ["Male"],
      icon: User2,
    },
  ];

  const hobbies = [
    { title: "Coding", icon: Code },
    { title: "Creating Personal Projects", icon: Lightbulb },
    { title: "Exploring New Technologies", icon: Cpu },
    { title: "Open-Source Contributions", icon: Github },
  ];

  return (
    <div className="relative flex h-full w-full flex-col items-start gap-10 overflow-hidden pb-8">
      {/* About Badge */}
      <Badge variant="secondary" className="gap-1.5 py-1">
        <User2 className="h-4 w-4" />
        About me
      </Badge>

      {/* Introduction */}
      <section className="flex flex-col gap-5">
        <Heading>
          Software Developer <br /> Based in South Africa.
        </Heading>

        <FramerWrapper y={0} x={100}>
          <p className="w-full font-poppins text-xl text-primary max-sm:text-lg">
            I&apos;m a Software Developer based in Taung, North West Province,
            South Africa, with three years of experience building modern web
            applications. I specialize in frontend development using React,
            Next.js, TypeScript and Tailwind CSS, with a strong focus on
            creating responsive, accessible and user-friendly interfaces.
            I also enjoy working across the full stack, exploring backend
            technologies and building applications that solve practical
            problems. I&apos;m passionate about continuous learning, improving
            my problem-solving skills and turning ideas into working projects.
            I enjoy exploring new technologies, contributing to open-source
            projects and challenging myself to grow as a developer.
          </p>
        </FramerWrapper>
      </section>

      {/* What I Do */}
      <section className="w-full space-y-6">
        <h2 className="flex items-center gap-2 font-poppins text-3xl font-semibold text-primary max-sm:text-2xl">
          <Code className="h-7 w-7 text-[#2f7df4]" />
          What I Do
        </h2>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <FramerWrapper
                key={service.title}
                y={40}
                delay={0.15 + index * 0.1}
                className="h-full"
              >
                <div className="flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-[#2f7df4]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2f7df4]/10">
                    <Icon className="h-6 w-6 text-[#2f7df4]" />
                  </div>

                  <h3 className="font-poppins text-lg font-semibold text-primary">
                    {service.title}
                  </h3>

                  <p className="font-poppins text-sm leading-7 text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </FramerWrapper>
            );
          })}
        </div>
      </section>

      {/* Personal Details */}
      <section className="w-full space-y-6">
        <h2 className="flex items-center gap-2 font-poppins text-3xl font-semibold text-primary max-sm:text-2xl">
          <User2 className="h-7 w-7 text-[#2f7df4]" />
          Personal Details
        </h2>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {personalDetails.map((detail, index) => {
            const Icon = detail.icon;

            return (
              <FramerWrapper
                key={detail.title}
                y={40}
                delay={0.15 + index * 0.1}
                className="h-full"
              >
                <div className="flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2f7df4]/10">
                    <Icon className="h-6 w-6 text-[#2f7df4]" />
                  </div>

                  <h3 className="font-poppins text-lg font-semibold text-primary">
                    {detail.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {detail.values.map((value) => (
                      <span
                        key={value}
                        className="rounded-md bg-[#2f7df4]/10 px-3 py-1.5 font-poppins text-sm text-primary"
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              </FramerWrapper>
            );
          })}
        </div>
      </section>

      {/* Hobbies */}
      <section className="w-full space-y-6">
        <h2 className="relative flex items-center gap-2 font-poppins text-3xl font-semibold text-primary icon_underline max-sm:text-2xl">
          <Heart className="h-8 w-8 text-[#2f7df4]" />
          Hobbies
        </h2>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;

            return (
              <FramerWrapper
                key={hobby.title}
                y={40}
                delay={0.15 + index * 0.1}
                className="h-full"
              >
                <div className="flex h-full items-center gap-4 rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-[#2f7df4]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#2f7df4]/10">
                    <Icon className="h-6 w-6 text-[#2f7df4]" />
                  </div>

                  <span className="font-poppins text-lg text-primary">
                    {hobby.title}
                  </span>
                </div>
              </FramerWrapper>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Page;
