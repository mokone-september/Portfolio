"use client";

import { cn } from "@/lib/utils";

import {
  Briefcase,
  FolderGit2,
  GraduationCap,
  HomeIcon,
  LightbulbIcon,
  Mail,
  MoreHorizontal,
  User,
} from "lucide-react";

import {
  Dock,
  DockIcon,
  DockItem,
  DockLabel,
} from "@/components/animation/DockAnimation";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolling, setScrolling] = useState(false);

  const menu = [
    { title: "Home", icon: <HomeIcon />, href: "/" },
    { title: "About", icon: <User />, href: "/about" },
    { title: "Skills", icon: <LightbulbIcon />, href: "/skills" },
    { title: "Education", icon: <GraduationCap />, href: "/education" },
    { title: "Work", icon: <Briefcase />, href: "/work" },
    { title: "Projects", icon: <FolderGit2 />, href: "/projects" },
    { title: "Contact us", icon: <Mail />, href: "/contact" },
    { title: "More", icon: <MoreHorizontal />, href: "/more" },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => setScrolling(window.scrollY > 0);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-5 left-0 right-0 flex justify-center bg-transparent z-[9999999]",
        scrolling ? "hidden" : "block"
      )}
    >
      <Dock className="items-end pb-3 rounded-full">
        {menu.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <Link href={item.href} key={index}>
              <DockItem
                className={cn(
                  "aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 border border-transparent",
                  isActive && "bg-gray-100 border-primary text-primary"
                )}
              >
                <DockLabel>{item.title}</DockLabel>
                <DockIcon className={cn(isActive && "text-[#2f7df4]")}>
                  {/* Force icon to inherit Dock sizing */}
                  <div className="h-full w-full">{item.icon}</div>
                </DockIcon>
              </DockItem>
            </Link>
          );
        })}
      </Dock>
    </div>
  );
};

export default Navbar;
