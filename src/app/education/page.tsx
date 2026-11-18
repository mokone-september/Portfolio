import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code2, BookOpen } from "lucide-react";
import { createPageMetadata, pageSeo } from "@/lib/seo";

export const metadata = createPageMetadata({
  ...pageSeo.en.education,
  path: "/education",
});

const educationPage = () => {
  const cityAndGuildsModules = [
    "Level 2 Safety at Work",
    "Level 2 Customer Service in the Hospitality and Catering Industry",
    "Level 2 Book Accommodation for Guests",
    "Level 2 Handling Cash and Guest Accounts",
    "Level 2 Arrival and Departure Services",
    "Level 2 Promote Products and Services to Guests",
    "Level 2 Reception Office Skills",
  ];

  return (
    <div className="relative flex h-full w-full flex-col items-start gap-8 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1">
        <GraduationCap className="h-4 w-4" />
        Education
      </Badge>

      <Heading>My Education</Heading>

      {/* Formal Education */}
      <div className="flex w-full flex-col gap-10">
        {/* HyperionDev */}
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.2}
            className="flex w-full items-start font-rubik text-base font-semibold text-primary sm:w-1/4 sm:items-center sm:justify-evenly sm:text-lg"
          >
            July 2021 - October 2021
          </FramerWrapper>

          <FramerWrapper
            y={0}
            x={100}
            delay={0.2}
            className="education_point relative flex w-full flex-col gap-3 border-l-4 border-l-[#3c3c3c] p-4 sm:w-3/4"
          >
            <div className="flex flex-col gap-1">
              <h3 className="font-rubik text-2xl font-semibold text-[#2f7df4] max-sm:text-xl">
                HyperionDev
              </h3>

              <p className="font-rubik text-lg font-semibold text-slate-300 max-sm:text-base">
                Software Engineering Bootcamp Certificate
              </p>

              <p className="font-rubik text-sm text-slate-400 sm:text-base">
                Johannesburg, South Africa
              </p>
            </div>

            <p className="w-full font-poppins text-base leading-relaxed text-primary max-sm:text-sm">
              Completed an intensive online Software Engineering Bootcamp
              covering Python, Object-Oriented Programming, and machine
              learning. The programme included mentorship and structured
              feedback, providing practical experience in building real-world
              applications and developing a strong foundation in software
              development.
            </p>
          </FramerWrapper>
        </div>

        {/* City & Guilds Level 2 Diploma */}
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.3}
            className="flex w-full items-start font-rubik text-base font-semibold text-primary sm:w-1/4 sm:items-center sm:justify-evenly sm:text-lg"
          >
            December 2019
          </FramerWrapper>

          <FramerWrapper
            y={0}
            x={100}
            delay={0.3}
            className="education_point relative flex w-full flex-col gap-4 border-l-4 border-l-[#3c3c3c] p-4 sm:w-3/4"
          >
            <div className="flex flex-col gap-1">
              <h3 className="font-rubik text-2xl font-semibold text-[#2f7df4] max-sm:text-xl">
                Frontline Hospitality Training
              </h3>

              <p className="font-rubik text-lg font-semibold text-slate-300 max-sm:text-base">
                City & Guilds Level 2 Diploma in Reception Services
              </p>

              <p className="font-rubik text-sm text-slate-400 sm:text-base">
                Awarded 14 December 2019
              </p>
            </div>

            <p className="w-full font-poppins text-base leading-relaxed text-primary max-sm:text-sm">
              Achieved a City & Guilds Level 2 Diploma in Reception Services,
              with training covering hospitality customer service, reception
              operations, accommodation bookings, guest accounts, cash
              handling, and arrival and departure services.
            </p>

            <div className="flex flex-col gap-2">
              <h4 className="font-rubik text-base font-semibold text-primary">
                Completed Modules
              </h4>

              <ul className="list-disc space-y-1 pl-5 font-poppins text-sm leading-relaxed text-primary">
                {cityAndGuildsModules.map((module) => (
                  <li key={module}>{module}</li>
                ))}
              </ul>
            </div>

            {/* Additional Achievement */}
            <div className="mt-2 rounded-lg border border-border bg-card p-4">
              <h4 className="font-rubik text-base font-semibold text-[#2f7df4]">
                Additional Achievement
              </h4>

              <p className="mt-1 font-poppins text-sm font-medium text-primary">
                Level 2 Reception Services Principles — Distinction
              </p>

              <p className="mt-1 font-poppins text-sm text-slate-400">
                City & Guilds Certificate of Unit Credit · 4 December 2018
              </p>
            </div>
          </FramerWrapper>
        </div>
      </div>

      {/* Professional Development */}
      <div className="flex w-full flex-col gap-5 pt-4">
        <Heading>Professional Development</Heading>

        <FramerWrapper
          y={60}
          delay={0.4}
          className="w-full rounded-xl border border-border bg-card p-6"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-primary/10 p-3">
                <Code2 className="h-6 w-6 text-[#2f7df4]" />
              </div>

              <div>
                <h3 className="font-rubik text-xl font-semibold text-[#2f7df4] max-sm:text-lg">
                  Independent Learning & Software Development
                </h3>

                <p className="font-rubik text-sm text-slate-400">
                  2025 – Present
                </p>
              </div>
            </div>

            <p className="font-poppins text-base leading-relaxed text-primary max-sm:text-sm">
              Continuously developing my software engineering skills through
              independent learning, hands-on experimentation, and personal
              projects. Focusing on modern frontend technologies, full-stack
              development, backend concepts, and exploring AI-powered
              applications.
            </p>

            <div className="flex items-center gap-2 text-sm text-slate-400">
              <BookOpen className="h-4 w-4" />
              <span>
                Learning, building projects, and expanding technical knowledge
              </span>
            </div>
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default educationPage;
