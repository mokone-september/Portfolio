
import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animation/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { createPageMetadata, pageSeo } from "@/lib/seo";

export const metadata = createPageMetadata({
  ...pageSeo.en.home,
  path: "/",
});

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center gap-12 px-4 pb-16 pt-20 sm:px-6 sm:pt-24 lg:min-h-[calc(100vh-6rem)] lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:pb-20 lg:pt-28">
      {/* Hero text and actions */}
      <FramerWrapper
        className="flex w-full flex-col items-center justify-center gap-8 text-center lg:w-1/2 lg:items-start lg:text-left"
        y={0}
        x={-100}
      >
        <HeroTexts />

        {/* Social links */}
        <div className="mt-2 flex w-full justify-center lg:justify-start">
          <SocialLinks />
        </div>

        {/* Resume button */}
        <div className="mt-2">
          <DownLoadResumeBtn />
        </div>
      </FramerWrapper>

      {/* Hero illustration */}
      <FramerWrapper
        className="relative flex w-full max-w-lg items-center justify-center self-center lg:w-1/2"
        y={0}
        x={100}
      >
        <HeroImage />
      </FramerWrapper>

      <GithubBtn />
    </div>
  );
}
