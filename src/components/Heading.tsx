import FramerWrapper from "./animation/FramerWrapper";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

const Heading = ({ children, className = "" }: HeadingProps) => {
  return (
    <FramerWrapper y={0} x={-100} className="w-full">
      <h1
        className={`name_underline mx-auto w-fit text-center font-poppins text-4xl font-bold text-primary max-sm:text-2xl ${className}`}
      >
        {children}
      </h1>
    </FramerWrapper>
  );
};

export default Heading;
