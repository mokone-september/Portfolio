import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const workPage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Briefcase className="h-4 w-4" />
        Work
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Work</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base "
          >
            February 2022-February 2024

          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
          >
            <div className="text-2xl font-rubik max-sm:text-xl text-[#2f7df4]">
             SovTech (Scrum) <br /> Junior Software Developer <br /> Johannesburg,
              South Africa
              <br />
              <br />
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
            In my role as a Junior Software Developer, I played a pivotal part in fostering
a culture of constant enhancement across the software development lifecycle.
My responsibilities spanned from crafting foundational code and upholding
application integrity to swiftly tackling bugs and implementing app enrichments.
Collaborating seamlessly with senior developers and engaging with user groups, I
contributed to the creation of resilient and impactful software solutions across a
multitude of diﬀerent clients.
            </p>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default workPage;
