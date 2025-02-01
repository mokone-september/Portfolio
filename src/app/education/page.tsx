import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Briefcase className="h-4 w-4" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base "
          >
            July 2021-October 2021 
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
          >
            <div className="text-2xl font-rubik max-sm:text-xl">
            Software Engineering bootcamp certicate <br /> Johannesburg,
              South Africa
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
              I embarked on a transformative journey through the Software Engineering
bootcamp online—an intensive 3-month online program that propelled me from
a novice to a proﬁcient junior developer. This comprehensive curriculum delved
into Python, Object Oriented Programming, and machine learning, empowering
me to create practical real-world applications and programs that have enriched my
industry-ready portfolio. The virtual platform provided direct feedback and robust
support, fostering a virtual community of peers who joined me in conquering
challenges, celebrating achievements, and nurturing aspirationsembarked on a transformative journey through the Software Engineering
bootcamp online—an intensive 3-month online program that propelled me from
a novice to a proﬁcient junior developer. This comprehensive curriculum delved
into Python, Object Oriented Programming, and machine learning, empowering
me to create practical real-world applications and programs that have enriched my
industry-ready portfolio. The virtual platform provided direct feedback and robust
support, fostering a virtual community of peers who joined me in conquering
challenges, celebrating achievements, and nurturing aspirations
            </p>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default educationPage;
