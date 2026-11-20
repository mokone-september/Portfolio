import Link from "next/link";
import Image from "next/image";
import CertificatesSection from "@/components/CertificatesSection";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import FramerWrapper from "@/components/animation/FramerWrapper";
import ProjectCards from "@/components/ProjectsCard";
import SocialLinks from "@/components/SocialLinks";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import {
  ArrowUpLeft,
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Github,
  FolderKanban,
  Heart,
  Phone,
  PackagePlus,
  GraduationCap,
  Layers,
  LightbulbIcon,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { buildLocalePath, getTranslations, Locale } from "@/lib/i18n";
import MdxPostContent from "@/components/MdxPostContent";
import { MdxPost, MdxPostWithCode } from "@/lib/mdx";

export function LocalizedHomePage({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  return (
    <div className="flex w-full flex-col items-center gap-12 px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:min-h-[calc(100vh-6rem)] lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:pb-20 lg:pt-20">
      <FramerWrapper
        className="flex w-full flex-col items-center justify-center gap-7 text-center lg:w-1/2 lg:items-start lg:text-left"
        y={0}
        x={-100}
      >
        <div className="w-full">
          <p className="mb-3 font-poppins text-lg font-medium text-[#6f7073] dark:text-gray-300 sm:text-2xl">
            {t.home.intro}
          </p>

          <h1 className="font-rubik text-4xl font-bold leading-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl name_underline">
            {t.home.heroTitleLine1}
            <br />
            {t.home.heroTitleLine2}
          </h1>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-2 font-poppins text-base font-semibold leading-normal text-[#4f5052] dark:text-gray-300 sm:text-2xl lg:justify-start">
            <span>{t.home.summary}</span>

            <span
              className="relative inline-flex h-[1.5em] min-w-[12rem] overflow-hidden align-middle text-left font-rubik text-lg text-[#2f7df4] sm:min-w-[17rem] sm:text-3xl"
              aria-label={t.home.rotator.join(", ")}
            >
              <span className="animate-home-role-slide flex flex-col">
                {t.home.rotator.map((item) => (
                  <span
                    key={item}
                    className="flex h-[1.5em] items-center whitespace-nowrap"
                  >
                    {item}
                  </span>
                ))}

                <span
                  aria-hidden="true"
                  className="flex h-[1.5em] items-center whitespace-nowrap"
                >
                  {t.home.rotator[0]}
                </span>
              </span>
            </span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
          {t.home.technologies.map((technology) => (
            <Badge
              key={technology}
              variant="secondary"
              className="px-3 py-1 text-sm"
            >
              {technology}
            </Badge>
          ))}
        </div>

        <SocialLinks />

        <DownLoadResumeBtn label={t.home.resumeButton} />
      </FramerWrapper>

      <FramerWrapper
        className="relative flex w-full max-w-lg items-center justify-center self-center lg:w-1/2"
        y={0}
        x={100}
      >
        <div className="relative aspect-square w-full max-w-md">
          <Image
            src="/portfolioLogo.png"
            alt="TK Mokone portfolio illustration"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 40vw"
            className="object-contain"
          />
        </div>
      </FramerWrapper>
    </div>
  );
}

export function LocalizedAboutPage({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1">
        <Heart className="h-4 w-4" />
        {t.about.badge}
      </Badge>

      <section className="flex flex-col gap-5">
        <Heading>{t.about.heading}</Heading>

        <FramerWrapper y={0} x={100}>
          <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
            {t.about.body}
          </p>
        </FramerWrapper>
      </section>

      <FramerWrapper className="block" y={100} delay={0.31}>
        <h2 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
          <Heart className="h-8 w-8" /> {t.about.hobbies}
        </h2>

        <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
          {t.about.hobbyList.map((hobby, index) => (
            <div
              key={index}
              className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start"
            >
              <span className="h-3 w-3 rounded-full bg-primary block mt-2" />
              {hobby}
            </div>
          ))}
        </div>
      </FramerWrapper>
    </div>
  );
}

export function LocalizedContactPage({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  return (
    <div className="relative flex h-full w-full flex-col items-start gap-5">
      <div className="pointer-events-none absolute right-4 top-24 z-0 hidden select-none lg:block">
        <Image
          src="/cube-leg.png"
          alt=""
          width={420}
          height={420}
          className="h-auto w-[min(32vw,420px)] object-contain opacity-95"
          priority={false}
        />
      </div>

      <Badge variant="secondary" className="gap-1.5 py-1">
        <Phone className="h-4 w-4" />
        {t.contact.badge}
      </Badge>

      <section className="relative z-10 flex w-full flex-col gap-3">
        <Heading>{t.contact.heading}</Heading>

        <div className="flex h-auto w-full items-center justify-center">
          <FramerWrapper y={0} scale={0.8}>
            <ContactForm translations={t.contact} />
          </FramerWrapper>
        </div>
      </section>
    </div>
  );
}

export function LocalizedWorkPage({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1">
        <Briefcase className="h-4 w-4" />
        {t.work.badge}
      </Badge>

      <div className="flex flex-col gap-3">
        <Heading>{t.work.heading}</Heading>
      </div>

      <div className="w-full h-fit flex">
        <FramerWrapper
          y={0}
          x={-100}
          delay={0.35}
          className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base"
        >
          February 2022 – February 2024
        </FramerWrapper>

        <FramerWrapper
          y={0}
          x={100}
          delay={0.35}
          className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point"
        >
          <div className="flex flex-col">
            <h3 className="text-2xl font-rubik text-[#2f7df4] max-sm:text-xl font-semibold">
              {t.work.company}
            </h3>

            <p className="text-lg font-rubik text-[#4f5052] max-sm:text-base">
              {t.work.title}
            </p>

            <p className="text-base font-rubik text-[#6f7073] max-sm:text-sm">
              {t.work.location}
            </p>

            <br />
          </div>

          <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
            {t.work.description}
          </p>
        </FramerWrapper>
      </div>
    </div>
  );
}

export function LocalizedSkillsPage({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  const programmingLanguages = [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  ];

  const frameworks = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
  ];

  const tools = [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  ];

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <div className="hidden lg:block absolute right-0 bottom-6 translate-x-20 pointer-events-none select-none z-0">
        <Image
          src="/growth.png"
          alt=""
          width={300}
          height={300}
          className="opacity-95"
          priority={false}
        />
      </div>

      <Badge variant="secondary" className="gap-1.5 py-1">
        <LightbulbIcon className="w-4 h-4" />
        {t.skills.badge}
      </Badge>

      <div className="relative z-10 flex flex-col gap-3">
        <Heading>{t.skills.heading}</Heading>

        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
            {t.skills.summary}
          </p>
        </FramerWrapper>

        <FramerWrapper y={100} delay={0.3} className="block w-full">
          <h2 className="text-2xl font-poppins text-primary font-semibold relative max-sm:text-xl mb-4">
            {t.skills.languages}
          </h2>

          <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
            {programmingLanguages.map((item) => (
              <div key={item.name} className="rounded-lg border border-border p-3 text-center">
                <Image src={item.icon} alt={item.name} width={40} height={40} unoptimized className="mx-auto h-10 w-10" />
                <p className="mt-2 text-sm font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </FramerWrapper>

        <FramerWrapper y={100} delay={0.32} className="block w-full">
          <h2 className="text-2xl font-poppins text-primary font-semibold relative max-sm:text-xl mb-4">
            {t.skills.frameworks}
          </h2>

          <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
            {frameworks.map((item) => (
              <div key={item.name} className="rounded-lg border border-border p-3 text-center">
                <Image src={item.icon} alt={item.name} width={40} height={40} unoptimized className="mx-auto h-10 w-10" />
                <p className="mt-2 text-sm font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </FramerWrapper>

        <FramerWrapper y={100} delay={0.34} className="block w-full">
          <h2 className="text-2xl font-poppins text-primary font-semibold relative max-sm:text-xl mb-4">
            {t.skills.tools}
          </h2>

          <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
            {tools.map((item) => (
              <div key={item.name} className="rounded-lg border border-border p-3 text-center">
                <Image src={item.icon} alt={item.name} width={40} height={40} unoptimized className="mx-auto h-10 w-10" />
                <p className="mt-2 text-sm font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
}

export function LocalizedEducationPage({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1">
        <GraduationCap className="h-4 w-4" />
        {t.education.badge}
      </Badge>

      <div className="flex flex-col gap-3">
        <Heading>{t.education.heading}</Heading>
      </div>

      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base"
          >
            July 2021 - October 2021
          </FramerWrapper>

          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point"
          >
            <div className="flex flex-col">
              <h3 className="text-2xl font-rubik text-[#2f7df4] max-sm:text-xl font-semibold">
                {t.education.institution}
              </h3>

              <p className="text-lg font-rubik text-[#4f5052] max-sm:text-base">
                {t.education.qualification}
              </p>

              <p className="text-base font-rubik text-[#6f7073] max-sm:text-sm">
                {t.education.location}
              </p>

              <br />
            </div>

            <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
              {t.education.description}
            </p>
          </FramerWrapper>
        </div>
      </div>

      <CertificatesSection locale={locale} />
    </div>
  );
}

export function LocalizedProjectsPage({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  const projects = [
    {
      title: "AI Whiteboard",
      description:
        "An interactive whiteboard application with freehand drawing, sticky notes, colour customization, object selection, undo and redo, local storage persistence, and PNG export. Built with React, TypeScript, Vite, and Node.js.",
      tags: ["React", "TypeScript", "Vite", "Node.js", "Vitest", "CSS", "REST API"],
      link: "https://ai-whiteboard-pied.vercel.app/",
      github: "https://github.com/mokone-september/ai-whiteboard",
    },
    {
      title: "Pokedex Pro",
      description:
        "A responsive Pokémon discovery application featuring Pokémon search, detailed stats, type information, filtering, sorting, persistent favourites, and recently viewed Pokémon. Includes dark mode, accessible navigation, and API caching. Built with Next.js, TypeScript, Chakra UI, TanStack Query, Legend-State, and PokéAPI.",
      tags: [
        "Next.js",
        "TypeScript",
        "Chakra UI",
        "Tailwind CSS",
        "TanStack Query",
        "Legend-State",
        "PokéAPI",
        "Vitest",
      ],
      link: "",
      github: "https://github.com/mokone-september/pokedex-pro",
    },
  ];

  return (
    <div className="relative flex h-full w-full flex-col items-start gap-5">
      <Badge variant="secondary" className="gap-1.5 py-1">
        <Layers className="h-4 w-4" />
        {t.projects.badge}
      </Badge>

      <section className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-3 text-center">
        <Heading>{t.projects.heading}</Heading>

        <FramerWrapper y={0} x={200}>
          <p className="w-full font-poppins text-lg text-primary max-sm:text-base">
            {t.projects.summary}
          </p>
        </FramerWrapper>
      </section>

      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCards
            key={project.title}
            value={project}
            num={index}
          />
        ))}
      </div>
    </div>
  );
}
export function LocalizedMorePage({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  return (
    <main className="relative flex min-h-full w-full flex-col gap-8 overflow-hidden">
      <div className="relative z-10 flex flex-col items-start gap-4">
        <Badge variant="secondary" className="gap-1.5 py-1">
          <PackagePlus className="h-4 w-4" />
          {t.more.badge}
        </Badge>

        <Heading>{t.more.heading}</Heading>

        <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
          {t.more.description}
        </p>
      </div>

      <FramerWrapper y={20} scale={1} delay={0.1} duration={0.3}>
        <section className="relative w-full overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm md:p-10">
          <div className="mb-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            <BookOpen className="h-4 w-4" />
            {t.more.featuredWriting}
          </div>

          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium text-muted-foreground">
              {t.more.writingCategory}
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {t.more.writingTitle}
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
              {t.more.writingDescription}
            </p>

            <Link
              href="https://medium.com/@mokoneseptember"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              {t.more.button}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </FramerWrapper>

      <section className="grid w-full gap-4 md:grid-cols-2">
        <FramerWrapper y={20} scale={1} delay={0.2} duration={0.3}>
          <Link
            href="https://github.com/mokone-september"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full items-center justify-between gap-5 rounded-2xl border border-border bg-card p-6 transition hover:border-primary/50 hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted">
                <Github className="h-6 w-6" />
              </div>

              <div>
                <h3 className="font-semibold">GitHub</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t.more.githubDescription}
                </p>
              </div>
            </div>

            <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
          </Link>
        </FramerWrapper>

        <FramerWrapper y={20} scale={1} delay={0.3} duration={0.3}>
          <Link
            href={buildLocalePath(locale, "/projects")}
            className="group flex h-full items-center justify-between gap-5 rounded-2xl border border-border bg-card p-6 transition hover:border-primary/50 hover:shadow-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted">
              <FolderKanban className="h-6 w-6" />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold">{t.more.selectedProjects}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {t.more.projectsDescription}
              </p>
            </div>

            <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
          </Link>
        </FramerWrapper>
      </section>
    </main>
  );
}

export function LocalizedBlogPage({
  locale,
  posts,
}: {
  locale: Locale;
  posts: Array<Pick<MdxPost, "slug" | "title" | "date" | "excerpt">>;
}) {
  const t = getTranslations(locale);

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <div className="flex flex-col gap-3">
        <Heading>{t.blog.title}</Heading>

        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-lg w-full text-primary max-sm:text-base">
            {t.blog.subtitle}
          </p>
        </FramerWrapper>
      </div>

      <div className="w-full flex flex-col gap-4">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="w-full border border-gray-100 dark:border-neutral-800 p-4 rounded-md"
          >
            <h3 className="text-lg font-semibold">
              <Link href={buildLocalePath(locale, `/blog/${post.slug}`)}>
                {post.title}
              </Link>
            </h3>

            <p className="text-xs text-neutral-500">{post.date}</p>
            <p className="mt-2 text-sm">{post.excerpt}</p>

            <div className="w-full flex items-center justify-between gap-3 mt-4">
              <Link
                href={buildLocalePath(locale, `/blog/${post.slug}`)}
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                {t.blog.readMore}
                <ArrowUpLeft className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function LocalizedBlogPostPage({
  locale,
  post,
}: {
  locale: Locale;
  post: MdxPostWithCode;
}) {
  const t = getTranslations(locale);

  return (
    <article className="max-w-3xl w-full prose prose-slate dark:prose-invert">
      <div className="mb-4">
        <Link
          href={buildLocalePath(locale, "/blog")}
          className="group inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-neutral-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-900"
        >
          {t.blog.back}
          <ArrowUpLeft className="h-4 w-4 ml-1 hidden group-hover:block -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
        </Link>
      </div>

      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-xs text-neutral-500">{post.date}</p>

      <div className="mt-4">
        <MdxPostContent source={post.code} />
      </div>
    </article>
  );
}
