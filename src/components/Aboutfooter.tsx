import { ChevronRightSquareIcon, Dna, Globe, Languages } from "lucide-react";

const Aboutfooter = () => {
  const items = [
    {
      name: "Language",
      answer: "English & Afrikaans",
      Icon: Languages,
    },
    {
      name: "Nationality",
      answer: "South Africa",
      Icon: Globe,
    },
    {
      name: "Gender",
      answer: "Male",
      Icon: Dna,
    },
  ];

  return (
    <>
      {items.map(({ name, answer, Icon }, index) => (
        <div className="p-1 w-fit relative" key={index}>
          <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex items-center icon_underline max-sm:text-2xl">
            <Icon className="h-8 w-8" />
            {name}
          </h1>

          <div className="flex gap-2 items-center text-xl text-primary pt-3 max-lg:justify-start">
            <ChevronRightSquareIcon className="h-4 w-4" />
            {answer}
          </div>
        </div>
      ))}
    </>
  );
};

export default Aboutfooter;
