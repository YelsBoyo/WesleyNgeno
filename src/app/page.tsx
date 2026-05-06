import { getPortfolio } from "@/lib/portfolio";
import { TopNav } from "@/components/shell/TopNav";
import { HeroScene } from "@/components/hero/HeroScene";
import Link from "next/link";

export default function Home() {
  const portfolio = getPortfolio();
  return (
    <div className="min-h-full">
      <TopNav profile={portfolio.profile} />

      <main className="mx-auto w-full max-w-6xl px-5 pb-24 pt-10 sm:px-8">
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur sm:p-12">
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[var(--accent)] blur-3xl" />
            <div className="absolute -right-40 top-10 h-80 w-80 rounded-full bg-[var(--accent-2)] blur-3xl" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs font-semibold text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                {portfolio.profile.availability ?? "Available"}
              </div>

              <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
                {portfolio.profile.headline}
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-[var(--muted)] sm:text-lg">
                {portfolio.profile.summary}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`mailto:${portfolio.profile.email}`}
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-[var(--accent)] px-5 text-sm font-semibold text-black hover:brightness-110"
                >
                  Contact
                </a>
                <Link
                  href="#projects"
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.02] px-5 text-sm font-semibold text-white hover:bg-white/[0.06]"
                >
                  View work
                </Link>
                {portfolio.profile.socials.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.02] px-5 text-sm font-semibold text-white hover:bg-white/[0.06]"
                  >
                    {s.label}
                  </a>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {portfolio.stats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="text-2xl font-semibold tracking-tight">{s.value}</div>
                    <div className="mt-1 text-sm text-[var(--muted)]">{s.label}</div>
                    {s.hint ? <div className="mt-2 text-xs text-white/60">{s.hint}</div> : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
              <div className="text-sm font-semibold tracking-tight">How I work</div>
              <ol className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent)]" />
                  <span>Clarify the workflow and success metrics before building.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent)]" />
                  <span>Ship an MVP fast, then harden reliability, security, and performance.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent)]" />
                  <span>Make it easy to operate: dashboards, logs, and clean handoff.</span>
                </li>
              </ol>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-xs font-semibold text-white/60">Focus</div>
                <div className="mt-2 text-sm font-semibold">
                  Systems that teams adopt — not just demos.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 lg:hidden">
          <HeroScene />
        </section>

        <section className="mt-10 grid gap-3 sm:grid-cols-3">
          {portfolio.services.map((s) => (
            <div key={s.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-base font-semibold tracking-tight">{s.title}</div>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{s.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section id="projects" className="mt-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Featured work</h2>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Case studies focused on outcomes, architecture, and operational reality.
              </p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 lg:grid-cols-2">
            {portfolio.projects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold text-white/60">
                      {p.category} {p.year ? <span className="text-white/30">· {p.year}</span> : null}
                    </div>
                    <div className="mt-2 text-base font-semibold tracking-tight">{p.name}</div>
                    <div className="mt-1 text-sm text-[var(--muted)]">{p.tagline}</div>
                  </div>
                  {p.status ? (
                    <div className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs font-semibold text-white/80">
                      {p.status}
                    </div>
                  ) : null}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.slice(0, 5).map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-white/10 bg-white/[0.02] px-2.5 py-1 text-xs font-semibold text-white/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  {p.outcomes.slice(0, 2).map((o) => (
                    <div
                      key={o.label}
                      className="rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <div className="text-sm font-semibold">{o.value}</div>
                      <div className="mt-0.5 text-xs text-[var(--muted)]">{o.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 text-sm font-semibold text-[var(--accent)]">
                  View case study →
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-16 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Want to build something real?</h2>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Tell me your workflow, your constraints, and what “success” means. I’ll propose a plan.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${portfolio.profile.email}`}
                className="inline-flex h-11 items-center justify-center rounded-xl bg-[var(--accent)] px-5 text-sm font-semibold text-black hover:brightness-110"
              >
                Email me
              </a>
              <a
                href={portfolio.profile.socials[0]?.href ?? `mailto:${portfolio.profile.email}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.02] px-5 text-sm font-semibold text-white hover:bg-white/[0.06]"
              >
                {portfolio.profile.socials[0]?.label ?? "Contact"}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
