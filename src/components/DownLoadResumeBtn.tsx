"use client";

import HackerBtn from "./animation/HackerBtn";

type DownLoadResumeBtnProps = {
  label?: string;
};

function DownLoadResumeBtn({
  label = "Download CV",
}: DownLoadResumeBtnProps) {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Thabiso_Kenneth_Mokone_-_Software_Developer.pdf";
    link.download = "Thabiso_Kenneth_Mokone_-_Software_Developer.pdf";
    link.click();
  };

  return (
    <div className="flex w-full justify-center lg:justify-start">
      <HackerBtn label={label} onClick={downloadResume} />
    </div>
  );
}

export default DownLoadResumeBtn;
