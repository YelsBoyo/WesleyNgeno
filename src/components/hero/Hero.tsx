"use client";

import { motion } from "framer-motion";
import type { LiveStat, PortfolioProfile } from "@/lib/portfolio";

export function Hero({
  profile,
  stats,
}: {
  profile: PortfolioProfile;
  stats: LiveStat[];
}) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur sm:p-12">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[var(--accent)] blur-3xl" />
        <div className="absolute -right-40 top-10 h-80 w-80 rounded-full bg-[var(--accent-2)] blur-3xl" />
      </div>

      <div className="relative">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-sm font-medium text-[var(--muted)]"
        >
          {profile.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-5xl"
        >
          {profile.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-4 max-w-2xl text-pretty text-base leading-7 text-[var(--muted)] sm:text-lg"
        >
          {profile.subheadline}
        </motion.p>

        <div className="mt-7 flex flex-wrap gap-2">
          {profile.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center rounded-xl border border-white/15 bg-white/[0.02] px-3 py-2 text-sm font-semibold text-white hover:bg-white/[0.06]"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-black/20 p-4"
            >
              <div className="text-2xl font-semibold tracking-tight">{s.value}</div>
              <div className="mt-1 text-sm text-[var(--muted)]">{s.label}</div>
              {s.hint ? (
                <div className="mt-2 text-xs text-white/60">{s.hint}</div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

