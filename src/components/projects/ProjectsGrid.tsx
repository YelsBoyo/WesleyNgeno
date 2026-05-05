import Link from "next/link";
import type { Project } from "@/lib/portfolio";

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="mt-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">Projects as products</h2>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Each one has a problem, architecture, impact, and a demo path.
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 lg:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold text-white/60">{p.category}</div>
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
              {p.impact.slice(0, 2).map((i) => (
                <div
                  key={i.kpi}
                  className="rounded-xl border border-white/10 bg-black/20 p-3"
                >
                  <div className="text-sm font-semibold">{i.value}</div>
                  <div className="mt-0.5 text-xs text-[var(--muted)]">{i.kpi}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-sm font-semibold text-[var(--accent)]">
              View case study →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

