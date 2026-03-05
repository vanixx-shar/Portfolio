const links = [
  { label: "Email", href: "mailto:vpulatsya@gmail.com" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Resume", href: "/resume.pdf" },
];

const stats = [
  { k: "Top 5", v: "SUTD Roboroars" },
  { k: "Merit", v: "Engineering Innovation Challenge" },
  { k: "Top 10", v: "Tan Kah Kee Young Inventor Awards" },
  { k: "Gold", v: "Asian Yoga Championship" },
];

const projects = [
  {
    title: "Solar Aeroponics Windmill System",
    desc: "Sustainable energy + aeroponics prototype to boost crop productivity and reduce resource usage.",
    tag: "Award: Merit • EIC",
  },
  {
    title: "License Plate Video Analytics System",
    desc: "Computer vision system for detecting and analyzing license plates using ML-based pipelines.",
    tag: "Award: Merit • EIC",
  },
  {
    title: "Reconfigurable Dynamic Shelf",
    desc: "Modular system designed to adapt shelf layouts dynamically for space optimization.",
    tag: "DTI Project",
  },
  {
    title: "Underwater Robotics (RoboSub USA)",
    desc: "Worked under SUTD autonomous robotics org on an underwater unit robot (U.W.U).",
    tag: "Competition: RoboSub",
  },
];

const roles = [
  "Vice President — IEEE SUTD Student Branch",
  "President — SUTD Makerspace",
  "Robotics Engineer Intern — Griffin Labs (Singapore)",
  "Publicity Subcommittee — Institute of Physics Singapore Student Chapter",
  "Yoga Instructor — Neecia Health",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* background glow */}
      <div className="pointer-events-none fixed inset-0 opacity-35">
        <div className="absolute -top-44 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-zinc-800 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-14">
        {/* top bar */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-zinc-900 ring-1 ring-zinc-800 grid place-items-center font-semibold">
              VS
            </div>
            <div className="leading-tight">
              <div className="text-sm text-zinc-400">Portfolio</div>
              <div className="font-semibold tracking-tight">Vanika Sharma</div>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium ring-1 ring-zinc-800 hover:bg-zinc-800 transition"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* hero */}
        <section className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Robotics + Product Engineering
              <span className="text-zinc-300"> built with impact.</span>
            </h1>

            <p className="mt-5 max-w-xl text-zinc-300 leading-relaxed">
              Engineering Product Development undergraduate at SUTD. I build robotics and
              AI-driven prototypes, lead student communities, and ship projects that solve real problems.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-white text-black px-5 py-2 text-sm font-semibold hover:opacity-90 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-xl bg-zinc-900 px-5 py-2 text-sm font-semibold ring-1 ring-zinc-800 hover:bg-zinc-800 transition"
              >
                Contact
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 max-w-xl">
              {stats.map((s) => (
                <div
                  key={s.k}
                  className="rounded-2xl bg-zinc-900/60 p-4 ring-1 ring-zinc-800"
                >
                  <div className="text-sm text-zinc-400">{s.k}</div>
                  <div className="mt-1 font-semibold">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* right card */}
          <div className="rounded-3xl bg-zinc-900/50 ring-1 ring-zinc-800 p-7">
            <div className="text-sm text-zinc-400">Now</div>
            <div className="mt-2 text-xl font-semibold">Building for real-world robotics</div>
            <p className="mt-3 text-zinc-300 leading-relaxed">
              Focus areas: humanoid robotics, autonomous systems, CAD, computer vision, and engineering leadership.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Robotics", "Humanoids", "CAD", "Computer Vision", "Leadership"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-zinc-950 px-3 py-1 text-xs text-zinc-300 ring-1 ring-zinc-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* projects */}
        <section id="projects" className="mt-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Featured Projects</h2>
            <p className="text-sm text-zinc-400">Selected engineering + robotics work.</p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl bg-zinc-900/60 ring-1 ring-zinc-800 p-6 hover:bg-zinc-900 transition"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold tracking-tight">{p.title}</h3>
                    <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{p.desc}</p>
                    <p className="mt-3 text-xs text-zinc-500">{p.tag}</p>
                  </div>
                  <div className="h-9 w-9 rounded-xl bg-zinc-950 ring-1 ring-zinc-800 grid place-items-center text-zinc-400">
                    ↗
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* leadership */}
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Leadership & Experience</h2>
          <div className="mt-6 rounded-2xl bg-zinc-900/60 ring-1 ring-zinc-800 p-6">
            <ul className="space-y-3 text-zinc-200">
              {roles.map((r) => (
                <li key={r} className="flex gap-3">
                  <span className="text-zinc-500">•</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* contact */}
        <section id="contact" className="mt-16">
          <div className="rounded-3xl bg-zinc-900/60 ring-1 ring-zinc-800 p-7">
            <h2 className="text-2xl font-semibold tracking-tight">Let’s connect</h2>
            <p className="mt-2 text-zinc-300">
              For collaborations, internships, robotics projects, or research opportunities:
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="mailto:vpulatsya@gmail.com"
                className="rounded-xl bg-white text-black px-5 py-2 text-sm font-semibold hover:opacity-90 transition"
              >
                Email Vanika
              </a>
              <a
                href="#"
                className="rounded-xl bg-zinc-950 px-5 py-2 text-sm font-semibold ring-1 ring-zinc-800 hover:bg-zinc-900 transition"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="rounded-xl bg-zinc-950 px-5 py-2 text-sm font-semibold ring-1 ring-zinc-800 hover:bg-zinc-900 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-14 text-sm text-zinc-500">
          © {new Date().getFullYear()} Vanika Sharma • Built with Next.js + Tailwind
        </footer>
      </div>
    </div>
  );
}