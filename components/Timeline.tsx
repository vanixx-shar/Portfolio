const items = [
  {
    year: "2025–Present",
    title: "Robotics Engineer Intern — Griffin Labs (Singapore)",
    desc: "Learning autonomous robotics; CAD + humanoid exposure.",
  },
  {
    year: "2025–Present",
    title: "Vice President — IEEE SUTD Student Branch",
    desc: "Leadership for technology-focused events and collaboration.",
  },
  {
    year: "2025–Present",
    title: "President — SUTD Makerspace",
    desc: "Leading interdisciplinary maker culture and hands-on projects.",
  },
  {
    year: "2024–2025",
    title: "RoboSub (USA) — Singapore Team",
    desc: "Underwater robotics in a competition environment (autonomy + integration).",
  },
  {
    year: "2022–2024",
    title: "Innovation Awards + Competitions",
    desc: "Engineering Innovation Challenge (Merit), Tan Kah Kee (Top 10), Roboroars (Top 5 shortlist).",
  },
];

export default function Timeline() {
  return (
    <div className="rounded-2xl bg-zinc-900/60 ring-1 ring-zinc-800 p-6">
      <div className="space-y-6">
        {items.map((i) => (
          <div key={i.title} className="flex gap-4">
            <div className="w-28 shrink-0 text-xs text-zinc-500">{i.year}</div>
            <div>
              <div className="font-semibold">{i.title}</div>
              <div className="mt-1 text-sm text-zinc-300">{i.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}