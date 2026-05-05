import type { ProofItem } from "@/lib/portfolio";

const iconLabel: Record<ProofItem["icon"], string> = {
  ship: "Ship",
  users: "Users",
  speed: "Speed",
  quality: "Quality",
};

export function ProofStrip({ proof }: { proof: ProofItem[] }) {
  return (
    <section className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {proof.map((p) => (
        <div
          key={p.title}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
        >
          <div className="text-xs font-semibold text-white/60">
            {iconLabel[p.icon]}
          </div>
          <div className="mt-2 text-base font-semibold tracking-tight">{p.title}</div>
          <div className="mt-1 text-sm leading-6 text-[var(--muted)]">
            {p.description}
          </div>
        </div>
      ))}
    </section>
  );
}

