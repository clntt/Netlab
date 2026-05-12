"use client";

import { useTheme } from "next-themes";

export function useThemeIntensity() {
  const { theme } = useTheme();

  return {
    isDark: theme === "dark",
    glow: theme === "dark" ? 1 : 0.4,
    blur: theme === "dark" ? "backdrop-blur-xl" : "backdrop-blur",
  };
}
