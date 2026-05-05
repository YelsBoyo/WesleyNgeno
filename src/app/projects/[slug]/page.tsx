import Link from "next/link";
import { notFound } from "next/navigation";
import { getPortfolio } from "@/lib/portfolio";

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const portfolio = getPortfolio();
  const project = portfolio.projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="mx-auto w-full max-w-4xl px-5 pb-20 pt-10 sm:px-8">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="text-sm font-semibold text-[var(--muted)] hover:text-white">
          ← Back
        </Link>
        {project.status ? (
          <div className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-white/80">
            {project.status}
          </div>
        ) : null}
      </div>

      <header className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
        <div className="text-xs font-semibold text-white/60">{project.category}</div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{project.name}</h1>
        <p className="mt-3 text-base leading-7 text-[var(--muted)]">{project.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-lg border border-white/10 bg-white/[0.02] px-2.5 py-1 text-xs font-semibold text-white/80"
            >
              {s}
            </span>
          ))}
        </div>
      </header>

      <section className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {project.impact.map((i) => (
          <div key={i.kpi} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-2xl font-semibold tracking-tight">{i.value}</div>
            <div className="mt-1 text-sm text-[var(--muted)]">{i.kpi}</div>
          </div>
        ))}
      </section>

      <section className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <h2 className="text-base font-semibold tracking-tight">What I built</h2>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--muted)]">
          {project.bullets.map((b) => (
            <li key={b} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent)]" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </section>

      {project.links?.length ? (
        <section className="mt-6 flex flex-wrap gap-3">
          {project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="inline-flex h-11 items-center justify-center rounded-xl bg-[var(--accent)] px-5 text-sm font-semibold text-black hover:brightness-110"
            >
              {l.label}
            </a>
          ))}
        </section>
      ) : null}
    </main>
  );
}

