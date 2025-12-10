import { Github } from "lucide-react";
import Link from "next/link";

const GithubBtn = () => {
  return (
    <Link href={"https://github.com/mokone-september"} target="blank" className=" animate-pulse absolute left-0 top-16 sm:top-5 flex rounded-r-full justify-center items-center gap-2 z-50 w-fit h-fit p-2 shadow-md  border-y border-r  border-black hover:bg-primary hover:text-white hover:animate-none ">
      <Github />
      <span className="font-rubik text-2xl max-sm:text-xl">visit</span>
    </Link>
  );
};

export default GithubBtn;
