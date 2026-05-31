"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let storedTheme: string | null = null;

    try {
      storedTheme = window.localStorage.getItem("theme");
    } catch (error) {
      storedTheme = null;
    }

    const resolvedTheme =
      storedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    setTheme(resolvedTheme as "light" | "dark");
    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    try {
      window.localStorage.setItem("theme", nextTheme);
    } catch (error) {
      // ignore localStorage errors
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="border border-slate-200 bg-white text-slate-800 shadow-sm hover:bg-slate-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-slate-100 dark:hover:bg-neutral-800"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Button>
  );
};

export default ThemeToggle;
