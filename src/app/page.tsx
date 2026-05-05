import Link from "next/link";
import { Hero } from "@/components/hero/Hero";
import { ProofStrip } from "@/components/proof/ProofStrip";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { Story } from "@/components/story/Story";
import { getPortfolio } from "@/lib/portfolio";
import { TopNav } from "@/components/shell/TopNav";

export default function Home() {
  const portfolio = getPortfolio();
  return (
    <div className="min-h-full">
      <TopNav profile={portfolio.profile} />

      <main className="mx-auto w-full max-w-6xl px-5 pb-24 pt-10 sm:px-8">
        <Hero profile={portfolio.profile} stats={portfolio.stats} />
        <ProofStrip proof={portfolio.proof} />
        <Story story={portfolio.story} />
        <ProjectsGrid projects={portfolio.projects} />

        <section className="mt-16 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">
                Want to hire someone who ships?
              </h2>
              <p className="mt-1 text-sm text-[var(--muted)]">
                I build business systems end-to-end: UX → backend → data → ops.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={portfolio.profile.ctaPrimary.href}
                className="inline-flex h-11 items-center justify-center rounded-xl bg-[var(--accent)] px-5 text-sm font-semibold text-black hover:brightness-110"
              >
                {portfolio.profile.ctaPrimary.label}
              </Link>
              <Link
                href={portfolio.profile.ctaSecondary.href}
                className="inline-flex h-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.02] px-5 text-sm font-semibold text-white hover:bg-white/[0.06]"
              >
                {portfolio.profile.ctaSecondary.label}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
