import { cn } from "@/lib/utils";
import { Linkedin, Twitter, Github  } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";

const SocialLinks = () => {
  const links = [
    { name: "Twitter", link: "https://x.com/mokoneseptember", icon: <Twitter aria-hidden="true" /> },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/mokone-september", icon: <Linkedin aria-hidden="true" /> },
    { name: "GitHub", link: "https://www.github.com/mokone-september", icon: <Github aria-hidden="true" /> },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125
        
        return ( 
          <FramerWrapper key={indx} delay={timing} y={50}>

          <Link
            target="_blank"
            href={itm.link}
            rel="noopener noreferrer"
            aria-label={`Visit ${itm.name} profile`}
            className={cn(buttonVariants({ variant: "default", size: "icon" }))}
            >{itm.icon}</Link>
            </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
