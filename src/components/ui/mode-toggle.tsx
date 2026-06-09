"use client";

import { ChevronsUpDownIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

type ThemeValue = "light" | "dark" | "system";

function applyTheme(value: ThemeValue) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolved = value === "system" ? (prefersDark ? "dark" : "light") : value;
  document.documentElement.classList.toggle("dark", resolved === "dark");
  document.documentElement.style.colorScheme = resolved;
  localStorage.setItem("theme", value);
}

export function ModeToggle() {
  const [theme, setThemeState] = useState<ThemeValue>("dark");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as ThemeValue | null) ?? "dark";
    setThemeState(saved);
    applyTheme(saved);
  }, []);

  const setTheme = (value: ThemeValue) => {
    setThemeState(value);
    applyTheme(value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="gap-1 px-2 py-0 text-xs">
          <span className="capitalize">{theme}</span>
          <span className="inline"> theme</span>
          <ChevronsUpDownIcon className="size-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
