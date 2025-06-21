"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      className="flex items-center justify-center cursor-pointer hover:bg-card rounded-full fixed top-4 right-4 lg:top-8 lg:right-8 shadow-sm p-2 z-50 bg-transparent"
      onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <MoonIcon
        size={16}
        className=" shrink-0 hidden dark:block "
        aria-hidden="true"
      />
      <SunIcon
        size={16}
        className=" shrink-0  dark:hidden"
        aria-hidden="true"
      />
    </button>
  );
}
