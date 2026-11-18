import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import { createPageMetadata, pageSeo } from "@/lib/seo";

export const metadata = createPageMetadata({
  ...pageSeo.en.work,
  path: "/work",
});

const WorkPage = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-start gap-8 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1">
        <Briefcase className="h-4 w-4" />
        Work Experience
      </Badge>

      <Heading>My Work Experience</Heading>

      <div className="flex w-full flex-col gap-10">
        {/* Graduate Programme Participant */}
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.2}
            className="flex w-full items-start font-rubik text-base font-semibold text-primary sm:w-1/4 sm:items-center sm:justify-evenly sm:text-lg"
          >
            February 2022 – December 2022
          </FramerWrapper>

          <FramerWrapper
            y={0}
            x={100}
            delay={0.2}
            className="education_point relative flex w-full flex-col gap-3 border-l-4 border-l-[#3c3c3c] p-4 sm:w-3/4"
          >
            <div className="flex flex-col gap-1">
              <h3 className="font-rubik text-2xl font-semibold text-[#2f7df4] max-sm:text-xl">
                Scrums.com (formerly SovTech)
              </h3>

              <p className="font-rubik text-lg font-semibold text-slate-300 max-sm:text-base">
                Graduate Programme Participant
              </p>

              <p className="font-rubik text-sm text-slate-400 sm:text-base">
                Johannesburg, South Africa
              </p>
            </div>

            <p className="w-full font-poppins text-base leading-relaxed text-primary max-sm:text-sm">
              Participated in a software development graduate programme,
              gaining practical experience and developing my technical
              skills while working in a professional software development
              environment.
            </p>
          </FramerWrapper>
        </div>

        {/* Junior Software Developer */}
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.3}
            className="flex w-full items-start font-rubik text-base font-semibold text-primary sm:w-1/4 sm:items-center sm:justify-evenly sm:text-lg"
          >
            January 2023 – February 2024
          </FramerWrapper>

          <FramerWrapper
            y={0}
            x={100}
            delay={0.3}
            className="education_point relative flex w-full flex-col gap-3 border-l-4 border-l-[#3c3c3c] p-4 sm:w-3/4"
          >
            <div className="flex flex-col gap-1">
              <h3 className="font-rubik text-2xl font-semibold text-[#2f7df4] max-sm:text-xl">
                Scrums.com (formerly SovTech)
              </h3>

              <p className="font-rubik text-lg font-semibold text-slate-300 max-sm:text-base">
                Junior Software Developer
              </p>

              <p className="font-rubik text-sm text-slate-400 sm:text-base">
                Johannesburg, South Africa
              </p>
            </div>

            <p className="w-full font-poppins text-base leading-relaxed text-primary max-sm:text-sm">
              Contributed to software development projects by writing and
              maintaining code, addressing bugs, and implementing
              application improvements. Collaborated with senior developers,
              product teams, and clients to support the delivery of reliable
              software solutions and improve user experiences.
            </p>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
