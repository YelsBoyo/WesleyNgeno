import type { StoryBeat } from "@/lib/portfolio";

export function Story({ story }: { story: StoryBeat[] }) {
  return (
    <section className="mt-10">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-lg font-semibold tracking-tight">How I think</h2>
        <div className="text-sm text-[var(--muted)]">Problem → System → Outcome</div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-3">
        {story.map((beat, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <div className="text-xs font-semibold text-white/60">Problem</div>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{beat.problem}</p>
            <div className="mt-5 text-xs font-semibold text-white/60">Build</div>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{beat.build}</p>
            <div className="mt-5 text-xs font-semibold text-white/60">Outcome</div>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{beat.outcome}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

