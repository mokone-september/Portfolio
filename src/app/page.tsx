import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animation/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";

export const siteConfig = {
  name: "TK Mokone",
  description: "I am a Passionate Software Developer",
  ogImage: "https://portfolio-ten-vert-28.vercel.app/og-image.png",
  url: "https://portfolio-ten-vert-28.vercel.app",
};

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-10 px-0 sm:px-4 lg:flex-row lg:items-start lg:gap-20">
      <FramerWrapper
        className="flex w-full flex-col justify-start gap-6 lg:w-1/2 items-center text-center lg:items-start lg:text-left"
        y={0}
        x={-100}
      >
        <HeroTexts />
        <div className="flex flex-wrap gap-4">
          <div className="flex w-full flex-wrap justify-center gap-4 lg:justify-start">
          <SocialLinks />
          </div>
        </div>
        <DownLoadResumeBtn />
      </FramerWrapper>

      <FramerWrapper
        className="relative w-full max-w-lg self-center lg:w-1/2"
        y={0}
        x={100}
      >
        <HeroImage />
      </FramerWrapper>
      <GithubBtn />
    </div>
  );
}
