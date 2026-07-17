"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buildLocalePath, getLocaleFromPath, translations } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const LanguageToggle = () => {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPath(pathname || "/");
  const alternateLocale = currentLocale === "en" ? "es" : "en";
  const alternatePath = buildLocalePath(alternateLocale, pathname || "/");
  const label = translations[currentLocale].languageToggle;

  return (
    <Link
      href={alternatePath}
      aria-label={`Switch language to ${translations[alternateLocale].languageName}`}
      className={cn(
        buttonVariants({ variant: "ghost", size: "sm" }),
        "px-3 py-2 text-sm"
      )}
    >
      {label}
    </Link>
  );
};

export default LanguageToggle;
