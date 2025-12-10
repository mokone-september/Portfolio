import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const WorkPage = () => {
  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">

      <Badge variant="secondary" className="gap-1.5 py-1">
        <Briefcase className="h-4 w-4" />
        Work Experience
      </Badge>

      <div className="flex flex-col gap-3">
        <Heading>My Work Experience</Heading>
      </div>

      {/* ENTRY */}
      <div className="w-full h-fit flex">

        {/* LEFT — DATE */}
        <FramerWrapper
          y={0}
          x={-100}
          delay={0.35}
          className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base"
        >
          February 2022 – February 2024
        </FramerWrapper>

        {/* RIGHT — CONTENT */}
        <FramerWrapper
          y={0}
          x={100}
          delay={0.35}
          className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point"
        >
          <div className="flex flex-col">

            {/* Company */}
            <h3 className="text-2xl font-rubik text-[#2f7df4] max-sm:text-xl font-semibold">
              Scrums (formerly SovTech)
            </h3>

            {/* Darker grey: Job Title */}
            <p className="text-lg font-rubik text-[#4f5052] max-sm:text-base">
              Junior Software Developer
            </p>

            {/* Lighter grey: Location */}
            <p className="text-base font-rubik text-[#6f7073] max-sm:text-sm">
              Johannesburg, South Africa
            </p>

            <br />
          </div>

          {/* Description */}
          <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
            In my role as a Junior Software Developer, I played a pivotal part in
            fostering a culture of continuous enhancement across the software
            development lifecycle. My responsibilities included crafting clean,
            reliable code, maintaining application stability, addressing bugs quickly,
            and implementing improvements to enhance the user and client experience.
            I worked closely with senior developers, product teams, and clients to
            deliver robust, scalable, and impactful solutions across multiple projects.
          </p>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default WorkPage;
