import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  CalendarDays,
  MapPin,
  BookOpen,
  Award,
  CheckCircle2,
} from "lucide-react";
import { createPageMetadata, pageSeo } from "@/lib/seo";

export const metadata = createPageMetadata({
  ...pageSeo.en.education,
  path: "/education",
});

const cityAndGuildsModules = [
  "Level 2 Safety at Work",
  "Level 2 Customer Service in the Hospitality and Catering Industry",
  "Level 2 Book Accommodation for Guests",
  "Level 2 Handling Cash and Guest Accounts",
  "Level 2 Arrival and Departure Services",
  "Level 2 Promote Products and Services to Guests",
  "Level 2 Reception Office Skills",
];

const EducationPage = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-start gap-8 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1">
        <GraduationCap className="h-4 w-4" />
        Education
      </Badge>

      <Heading>My Education</Heading>

      <div className="flex w-full flex-col gap-6">
        {/* HyperionDev */}
        <FramerWrapper y={30} delay={0.2} className="w-full">
          <article className="group w-full rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg sm:p-7">
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Badge variant="outline" className="gap-2 rounded-full px-3 py-1.5">
                  <CalendarDays className="h-4 w-4" />
                  July 2021 – October 2021
                </Badge>

                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Software Engineering
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <GraduationCap className="h-7 w-7" />
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="font-rubik text-2xl font-bold text-card-foreground sm:text-3xl">
                    HyperionDev
                  </h2>
                  <p className="mt-1 font-rubik text-base font-semibold text-primary sm:text-lg">
                    Software Engineering Bootcamp Certificate
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 shrink-0" />
                    Johannesburg, South Africa
                  </p>
                </div>
              </div>

              <p className="font-poppins text-sm leading-7 text-muted-foreground sm:text-base">
                Completed an intensive online Software Engineering Bootcamp
                covering Python, Object-Oriented Programming, and machine
                learning. The programme included mentorship and structured
                feedback, providing practical experience in building real-world
                applications and developing a strong foundation in software
                development.
              </p>

              <div className="flex items-center gap-2 border-t border-border pt-4 text-sm text-muted-foreground">
                <BookOpen className="h-4 w-4 text-primary" />
                <span>Practical software engineering training</span>
              </div>
            </div>
          </article>
        </FramerWrapper>

        {/* City & Guilds */}
        <FramerWrapper y={30} delay={0.3} className="w-full">
          <article className="group w-full rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg sm:p-7">
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Badge variant="outline" className="gap-2 rounded-full px-3 py-1.5">
                  <CalendarDays className="h-4 w-4" />
                  December 2019
                </Badge>

                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Hospitality
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <Award className="h-7 w-7" />
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="font-rubik text-2xl font-bold text-card-foreground sm:text-3xl">
                    Frontline Hospitality Training
                  </h2>
                  <p className="mt-1 font-rubik text-base font-semibold text-primary sm:text-lg">
                    City & Guilds Level 2 Diploma in Reception Services
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4 shrink-0" />
                    Awarded 14 December 2019
                  </p>
                </div>
              </div>

              <p className="font-poppins text-sm leading-7 text-muted-foreground sm:text-base">
                Achieved a City & Guilds Level 2 Diploma in Reception Services,
                with training covering hospitality customer service, reception
                operations, accommodation bookings, guest accounts, cash
                handling, and arrival and departure services.
              </p>

              <div className="border-t border-border pt-5">
                <h3 className="mb-4 flex items-center gap-2 font-rubik text-base font-semibold text-card-foreground">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Completed Modules
                </h3>

                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {cityAndGuildsModules.map((module) => (
                    <li
                      key={module}
                      className="flex items-start gap-2 rounded-lg bg-muted/50 p-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{module}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-5">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary">
                    <Award className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-rubik font-semibold text-card-foreground">
                      Additional Achievement
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-primary">
                      Level 2 Reception Services Principles — Distinction
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      City & Guilds Certificate of Unit Credit · 4 December
                      2018
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default EducationPage;
