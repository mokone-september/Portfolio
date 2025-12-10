import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

const educationPage = () => {
  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <GraduationCap className="h-4 w-4" />
        Education
      </Badge>

      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>

      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          
          {/* LEFT SIDE — DATE */}
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base"
          >
            July 2021 - October 2021
          </FramerWrapper>

          {/* RIGHT SIDE — CONTENT */}
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point"
          >
            <div className="flex flex-col">
              {/* Institution */}
              <h3 className="text-2xl font-rubik text-[#2f7df4] max-sm:text-xl font-semibold">
                HyperionDev
              </h3>

              {/* Darker grey: Qualification */}
              <p className="text-lg font-rubik text-[#4f5052] max-sm:text-base">
                Software Engineering Bootcamp Certificate
              </p>

              {/* Lighter grey: Location */}
              <p className="text-base font-rubik text-[#6f7073] max-sm:text-sm">
                Johannesburg, South Africa
              </p>

              <br />
            </div>

            <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
              I embarked on a transformative journey through the Software 
              Engineering Bootcamp—an intensive online program that helped me grow 
              from a beginner into a confident junior developer. The curriculum 
              covered Python, Object-Oriented Programming, and machine learning, 
              empowering me to build practical real-world applications.
              The program offered direct mentorship, structured feedback, and a 
              supportive community that kept me motivated while tackling 
              challenges and developing a strong foundation for my tech career.
            </p>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default educationPage;
