"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isfirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    setIsFirstMount(false);
  }, []);

  if (isfirstMount) {
    return;
  }
  return (
    <div className={`@container/themeToggle fixed bottom-2 left-2 `}>
      <div
        className={`
          border p-1 bg-black light:bg-white border-[#555] rounded-full 
          text-neutral-400 light:text-neutral-700 inline-flex justify-center items-center
          transition-all duration-500
        `}
      >
        <button
          onClick={() => {
            setTheme("light");
          }}
          className={`
            w-8 h-8 hover:text-neutral-100 light:hover:text-neutral-950
            ${theme === "light" ? "bg-teal-600 text-neutral-100 light:text-neutral-950" : ""} 
            rounded-full flex justify-center items-center
          `}
        >
          <Sun size={16} strokeWidth={2} />
        </button>
        <button
          onClick={() => {
            setTheme("system");
          }}
          className={`
            w-8 h-8 hover:text-neutral-100 light:hover:text-neutral-950
            ${theme === "system" ? "bg-teal-600 text-neutral-100 light:text-neutral-950" : ""} 
            rounded-full flex justify-center items-center
          `}
        >
          <Monitor size={16} strokeWidth={2} />
        </button>
        <button
          onClick={() => {
            setTheme("dark");
          }}
          className={`
            w-8 h-8 hover:text-neutral-100 light:hover:text-neutral-950
            ${theme === "dark" ? "bg-teal-600 text-neutral-100 light:text-neutral-950" : ""} 
            rounded-full flex justify-center items-center
          `}
        >
          <Moon size={16} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;
