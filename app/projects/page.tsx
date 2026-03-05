import Link from "next/link";
import Backdrop from "@/components/Backdrop";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Backdrop />

      <div className="relative mx-auto max-w-6xl px-6 py-14">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-sm text-zinc-300 hover:text-white">
            ← Home
          </Link>

          <a
            href="/resume.pdf"
            className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium ring-1 ring-zinc-800 hover:bg-zinc-800 transition"
          >
            Resume
          </a>
        </div>

        <h1 className="mt-10 text-4xl md:text-5xl font-semibold tracking-tight">
          Projects
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-300">
          Selected engineering, robotics, and innovation work — with awards, competitions,
          and industry collaboration.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="rounded-2xl bg-zinc-900/60 ring-1 ring-zinc-800 p-6 hover:bg-zinc-900 transition"
            >
              <div className="text-xs text-zinc-500">{p.year}</div>
              <div className="mt-1 text-lg font-semibold">{p.title}</div>
              <div className="mt-2 text-sm text-zinc-300">{p.subtitle}</div>
              <div className="mt-3 text-xs text-zinc-400">{p.highlight}</div>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-zinc-950 px-3 py-1 text-xs text-zinc-300 ring-1 ring-zinc-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}