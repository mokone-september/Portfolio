"use client";

import { useState } from "react";
import { Download } from "lucide-react";

import { Button } from "../ui/button";

type HackerBtnProps = {
  label: string;
  onClick: () => void;
};

const CHARSET = "abcdefghijklmnopqrstuvwxyz";

const randomChars = (length: number) =>
  Array.from(
    { length },
    () => CHARSET[Math.floor(Math.random() * CHARSET.length)]
  ).join("");

const HackerBtn = ({ label, onClick }: HackerBtnProps) => {
  const [displayText, setDisplayText] = useState<string | null>(null);

  const scramble = async () => {
    let prefix = "";

    for (let i = 0; i < label.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 50));

      prefix += label[i];
      setDisplayText(prefix + randomChars(label.length - prefix.length));
    }

    setDisplayText(null);
  };

  const startScrambling = () => {
    void scramble();
  };

  return (
    <Button
      size="lg"
      className="px-5 py-6 text-base"
      onMouseEnter={startScrambling}
      onFocus={startScrambling}
      onClick={onClick}
      aria-label={label}
    >
      <Download aria-hidden="true" className="mx-2 h-5 w-5" />
      <span aria-hidden="true">{displayText ?? label}</span>
    </Button>
  );
};

export default HackerBtn;
