import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  CalendarDays,
  MapPin,
  Code2,
  Users,
  BookOpen,
} from "lucide-react";
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

      <div className="flex w-full flex-col gap-6">
        {/* Graduate Programme */}
        <FramerWrapper y={30} delay={0.2} className="w-full">
          <article className="group w-full rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg sm:p-7">
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Badge variant="outline" className="gap-2 rounded-full px-3 py-1.5">
                  <CalendarDays className="h-4 w-4" />
                  February 2022 – December 2022
                </Badge>

                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Graduate Programme
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <Users className="h-7 w-7" />
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="font-rubik text-2xl font-bold text-card-foreground sm:text-3xl">
                    Scrums.com (formerly SovTech)
                  </h2>
                  <p className="mt-1 font-rubik text-base font-semibold text-primary sm:text-lg">
                    Graduate Programme Participant
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 shrink-0" />
                    Johannesburg, South Africa
                  </p>
                </div>
              </div>

              <p className="font-poppins text-sm leading-7 text-muted-foreground sm:text-base">
                Participated in a software development graduate programme,
                gaining practical experience and developing my technical
                skills while working in a professional software development
                environment.
              </p>

              <div className="flex items-center gap-2 border-t border-border pt-4 text-sm text-muted-foreground">
                <BookOpen className="h-4 w-4 text-primary" />
                <span>Professional software development experience</span>
              </div>
            </div>
          </article>
        </FramerWrapper>

        {/* Junior Software Developer */}
        <FramerWrapper y={30} delay={0.3} className="w-full">
          <article className="group w-full rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg sm:p-7">
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Badge variant="outline" className="gap-2 rounded-full px-3 py-1.5">
                  <CalendarDays className="h-4 w-4" />
                  January 2023 – February 2024
                </Badge>

                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Software Development
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <Code2 className="h-7 w-7" />
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="font-rubik text-2xl font-bold text-card-foreground sm:text-3xl">
                    Scrums.com (formerly SovTech)
                  </h2>
                  <p className="mt-1 font-rubik text-base font-semibold text-primary sm:text-lg">
                    Junior Software Developer
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 shrink-0" />
                    Johannesburg, South Africa
                  </p>
                </div>
              </div>

              <p className="font-poppins text-sm leading-7 text-muted-foreground sm:text-base">
                Contributed to software development projects by writing and
                maintaining code, addressing bugs, and implementing
                application improvements. Collaborated with senior developers,
                product teams, and clients to support the delivery of reliable
                software solutions and improve user experiences.
              </p>

              <div className="flex items-center gap-2 border-t border-border pt-4 text-sm text-muted-foreground">
                <Code2 className="h-4 w-4 text-primary" />
                <span>Software development and team collaboration</span>
              </div>
            </div>
          </article>
        </FramerWrapper>
      </div>

      {/* Professional Development */}
      <div className="flex w-full flex-col gap-6 pt-2">
        <Heading>Professional Development</Heading>

        <FramerWrapper y={30} delay={0.4} className="w-full">
          <article className="w-full rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7">
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Badge variant="outline" className="gap-2 rounded-full px-3 py-1.5">
                  <CalendarDays className="h-4 w-4" />
                  2025 – Present
                </Badge>

                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Ongoing Development
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <BookOpen className="h-7 w-7" />
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="font-rubik text-xl font-bold text-card-foreground sm:text-2xl">
                    Independent Learning & Software Development
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Personal projects and continuous learning
                  </p>
                </div>
              </div>

              <p className="font-poppins text-sm leading-7 text-muted-foreground sm:text-base">
                Continuously developing my software engineering skills through
                independent learning, hands-on experimentation, and personal
                projects. Focusing on modern frontend technologies, full-stack
                development, backend concepts, and exploring AI-powered
                applications.
              </p>

              <div className="flex items-center gap-2 border-t border-border pt-4 text-sm text-muted-foreground">
                <Code2 className="h-4 w-4 text-primary" />
                <span>Learning, building projects, and expanding technical knowledge</span>
              </div>
            </div>
          </article>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default WorkPage;
