import { Radar } from "lucide-react";
import { profile } from "@/lib/profile";

export default function Timeline() {
  return (
    <div className="metal-card rounded-3xl p-6 sm:p-8">
      <div className="space-y-7">
        {profile.timeline.map((item) => (
          <article key={item.title} className="grid gap-3 sm:grid-cols-[10rem_1fr] sm:gap-5">
            <p className="text-xs uppercase tracking-[0.16em] text-[#ff9ac3]/58">{item.period}</p>
            <div className="metal-card metal-lift relative rounded-2xl p-4">
              <div className="metal-chip mb-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-[#F5F7FA]/82">
                <Radar className="h-3.5 w-3.5" />
                Milestone
              </div>
              <h3 className="text-base font-semibold text-[#F5F7FA]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#D7E2EA]/74">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
