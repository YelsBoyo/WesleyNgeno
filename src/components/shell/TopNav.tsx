"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import type { PortfolioProfile } from "@/lib/portfolio";
import { useEffect, useState } from "react";

export function TopNav({ profile }: { profile: PortfolioProfile }) {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const resolvedTheme = mounted ? (theme === "system" ? systemTheme : theme) : "dark";
  const isDark = resolvedTheme !== "light";

  return (
    <div className="sticky top-0 z-40 border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="font-semibold tracking-tight">
          {profile.name.split(" ")[0]}
          <span className="text-[var(--muted)]">.dev</span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="#projects"
            className="hidden rounded-lg px-3 py-2 text-sm text-[var(--muted)] hover:text-white sm:inline-flex"
          >
            Projects
          </Link>
          <Link
            href={profile.ctaPrimary.href}
            className="hidden rounded-lg px-3 py-2 text-sm text-[var(--muted)] hover:text-white sm:inline-flex"
          >
            Contact
          </Link>

          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="inline-flex h-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.03] px-3 text-sm font-semibold hover:bg-white/[0.06]"
            aria-label="Toggle theme"
          >
            {isDark ? "Dark" : "Light"}
          </button>
        </div>
      </div>
    </div>
  );
}

