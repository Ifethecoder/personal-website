"use client";

import { useSyncExternalStore } from "react";

type Theme = "system" | "light" | "dark";
const themes: Theme[] = ["system", "light", "dark"];

function snapshot(): Theme {
  const value = document.documentElement.dataset.theme;
  return value === "light" || value === "dark" ? value : "system";
}

function subscribe(callback: () => void) {
  window.addEventListener("theme-change", callback);
  window.addEventListener("storage", sync);
  function sync(event: StorageEvent) {
    if (event.key === "theme" || event.key === null) {
      const value = event.newValue;
      document.documentElement.dataset.theme =
        value === "light" || value === "dark" ? value : "system";
      callback();
    }
  }
  return () => {
    window.removeEventListener("theme-change", callback);
    window.removeEventListener("storage", sync);
  };
}

export function ThemeSwitcher() {
  const theme = useSyncExternalStore(subscribe, snapshot, () => "system" as const);
  const next = themes[(themes.indexOf(theme) + 1) % themes.length];

  return (
    <button
      type="button"
      className="theme-switch inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
      aria-label={`Theme: ${theme}. Switch to ${next} theme`}
      onClick={() => {
        document.documentElement.dataset.theme = next;
        try { localStorage.setItem("theme", next); } catch { /* Theme still works without storage. */ }
        window.dispatchEvent(new Event("theme-change"));
      }}
    >
      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 4a8 8 0 0 1 0 16Z" fill="currentColor" stroke="none" />
      </svg>
      <span className="capitalize">{theme}</span>
    </button>
  );
}
