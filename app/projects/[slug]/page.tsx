import Link from "next/link";
import Backdrop from "@/components/Backdrop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);

  if (!p) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-14">
        <Link href="/projects" className="text-sm text-zinc-300 hover:text-white">
          ← Projects
        </Link>
        <div className="mt-10 text-xl">Project not found.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Backdrop />
      <Navbar />

      <div className="relative mx-auto max-w-3xl px-6 py-14">
        <Link href="/projects" className="text-sm text-zinc-300 hover:text-white">
          ← Projects
        </Link>

        <div className="mt-8 text-xs text-zinc-500">{p.year}</div>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">{p.title}</h1>
        <p className="mt-3 text-zinc-300">{p.subtitle}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-zinc-900 px-3 py-1 text-xs text-zinc-300 ring-1 ring-zinc-800"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-zinc-900/60 ring-1 ring-zinc-800 p-6">
          <div className="text-sm text-zinc-400">Highlight</div>
          <div className="mt-2 font-semibold">{p.highlight}</div>
        </div>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-xl font-semibold">Problem</h2>
            <p className="mt-2 text-zinc-300 leading-relaxed">{p.problem}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Solution</h2>
            <p className="mt-2 text-zinc-300 leading-relaxed">{p.solution}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Impact</h2>
            <ul className="mt-3 space-y-2 text-zinc-300">
              {p.impact.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="text-zinc-500">•</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}