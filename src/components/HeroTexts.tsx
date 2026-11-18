
import TextRotator from "./TextRotator";

const HeroTexts = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-rubik text-4xl font-bold leading-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl name_underline">
        Thabiso Kenneth
        <br />
        Mokone.
      </h1>

      <TextRotator />
    </div>
  );
};

export default HeroTexts;
