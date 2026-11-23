import { cn } from "@/lib/utils";
import { Linkedin, Github } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";

const SocialLinks = () => {
  const links = [
    {
      name: "X",
      link: "https://x.com/mokoneseptember",
      icon: (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-current"
        >
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932zm-1.291 19.49h2.039L6.486 3.24H4.298z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/mokone-september",
      icon: <Linkedin aria-hidden="true" />,
    },
    {
      name: "GitHub",
      link: "https://www.github.com/mokone-september",
      icon: <Github aria-hidden="true" />,
    },
  ];

  return (
    <div className="flex items-center gap-4">
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125;

        return (
          <FramerWrapper key={itm.name} delay={timing} y={50}>
            <Link
              target="_blank"
              href={itm.link}
              rel="noopener noreferrer"
              aria-label={`Visit ${itm.name} profile`}
              className={cn(
                buttonVariants({ variant: "default", size: "icon" })
              )}
            >
              {itm.icon}
            </Link>
          </FramerWrapper>
        );
      })}
    </div>
  );
};

export default SocialLinks;
