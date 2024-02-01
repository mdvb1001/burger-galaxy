"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "@/app/icons/MoonIcon";
import { SunIcon } from "@/app/icons/SunIcon";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <Switch
      checked={isDark}
      size="lg"
      color="primary"
      onChange={toggleTheme}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={`${className}`} width={16} height={16}  />
        ) : (
          <MoonIcon className={`${className}`} width={16} height={16} />
        )
      }
    />
  );
}
