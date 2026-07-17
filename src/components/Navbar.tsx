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
  Globe,
} from "lucide-react";

import { motion } from "framer-motion";

import {
  Dock,
  DockIcon,
  DockItem,
  DockLabel,
} from "@/components/animation/DockAnimation";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import {
  buildLocalePath,
  getLocaleFromPath,
  removeLocalePrefix,
  translations,
} from "@/lib/i18n";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolling, setScrolling] = useState(false);

  const menu = [
    { key: "home", title: "Home", icon: <HomeIcon aria-hidden="true" />, href: "/" },
    { key: "about", title: "About", icon: <User aria-hidden="true" />, href: "/about" },
    { key: "skills", title: "Skills", icon: <LightbulbIcon aria-hidden="true" />, href: "/skills" },
    { key: "education", title: "Education", icon: <GraduationCap aria-hidden="true" />, href: "/education" },
    { key: "work", title: "Work", icon: <Briefcase aria-hidden="true" />, href: "/work" },
    { key: "projects", title: "Projects", icon: <FolderGit2 aria-hidden="true" />, href: "/projects" },
    { key: "blog", title: "Blog", icon: <Globe aria-hidden="true" />, href: "/blog" },
    { key: "contact", title: "Contact", icon: <Mail aria-hidden="true" />, href: "/contact" },
    { key: "more", title: "More", icon: <MoreHorizontal aria-hidden="true" />, href: "/more" },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => setScrolling(window.scrollY > 0);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={cn(
        "fixed top-5 left-0 right-0 flex justify-center z-[9999999] transition-colors",
        scrolling
          ? "bg-background/80 shadow-sm backdrop-blur-sm"
          : "bg-transparent"
      )}
      aria-label="Primary navigation"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="flex items-center gap-2 sm:gap-3 justify-center">
        <div className="flex items-center gap-3 bg-transparent rounded-full px-2">
          <Dock className="items-end pb-3 rounded-full">
          {menu.map((item) => {
          const locale = getLocaleFromPath(pathname || "/");
          const pageTitle = translations[locale].navbar[item.key as keyof typeof translations[typeof locale]["navbar"]] ?? item.title;
          const itemHref = buildLocalePath(locale, item.href);
          const basePath = removeLocalePrefix(pathname || "/");
          const isActive = basePath === item.href;

          return (
            <Link
              href={itemHref}
              key={item.key}
              aria-label={pageTitle}
              aria-current={isActive ? "page" : undefined}
            >
              <DockItem
                className={cn(
                  "aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 border border-transparent",
                  isActive && "bg-gray-100 border-primary text-primary"
                )}
              >
                <DockLabel aria-hidden="true">{pageTitle}</DockLabel>
                <DockIcon className={cn(isActive && "text-[#2f7df4]")}>
                  {/* Force icon to inherit Dock sizing */}
                  <div className="h-full w-full">{item.icon}</div>
                </DockIcon>
              </DockItem>
            </Link>
          );
        })}
          </Dock>
          <div className="flex items-center pl-2">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
