import { useCallback, useEffect, useState } from "react";

type Theme = "dark" | "light";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("light")
      ? "light"
      : "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    // enable smooth cross-fade only during the switch, then remove
    root.classList.add("theming");
    root.classList.toggle("light", theme === "light");
    try {
      localStorage.setItem("nk-theme", theme);
    } catch {
      /* ignore */
    }
    const t = window.setTimeout(() => root.classList.remove("theming"), 500);
    return () => window.clearTimeout(t);
  }, [theme]);

  const toggle = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    []
  );

  return { theme, toggle };
}
