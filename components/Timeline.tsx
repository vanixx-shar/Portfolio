import { Radar } from "lucide-react";
import { profile } from "@/lib/profile";

export default function Timeline() {
  return (
    <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/50 p-6 sm:p-8">
      <div className="space-y-7">
        {profile.timeline.map((item) => (
          <article key={item.title} className="grid gap-3 sm:grid-cols-[10rem_1fr] sm:gap-5">
            <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">{item.period}</p>
            <div className="relative rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-4">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">
                <Radar className="h-3.5 w-3.5" />
                Milestone
              </div>
              <h3 className="text-base font-semibold text-zinc-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
