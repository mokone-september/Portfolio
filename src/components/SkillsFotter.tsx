import Image from "next/image";
import React from "react";

interface SkillItem {
  name: string;
  icon: string;
  alt?: string;
}

interface SkillsFooterProps {
  items: SkillItem[];
}

const SkillsFooter: React.FC<SkillsFooterProps> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.name}
          className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg hover:bg-accent transition-colors"
        >
          <Image
            src={item.icon}
            alt={item.alt ?? item.name}
            width={48}
            height={48}
            className="object-contain"
          />
          <span className="text-sm text-center font-medium text-muted-foreground">
            {item.name}
          </span>
        </div>
      ))}
    </>
  );
};

export default SkillsFooter;
