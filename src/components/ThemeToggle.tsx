"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

type Theme = "light" | "dark";
const THEME_CHANGE_EVENT = "portfolio-theme-change";

let currentTheme: Theme | undefined;

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "light";
  }

  try {
    const storedTheme = window.localStorage.getItem("theme");

    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }
  } catch {
    // Ignore localStorage errors
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const getThemeSnapshot = (): Theme => {
  currentTheme ??= getInitialTheme();
  return currentTheme;
};

const getServerThemeSnapshot = (): Theme => "light";

const subscribeToTheme = (onStoreChange: () => void) => {
  const handleStorageChange = () => {
    currentTheme = undefined;
    onStoreChange();
  };

  window.addEventListener("storage", handleStorageChange);
  window.addEventListener(THEME_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", handleStorageChange);
    window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange);
  };
};

const ThemeToggle = () => {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    currentTheme = nextTheme;

    try {
      window.localStorage.setItem("theme", nextTheme);
    } catch {
      // Ignore localStorage errors
    }

    window.document.documentElement.classList.toggle(
      "dark",
      nextTheme === "dark"
    );
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

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
