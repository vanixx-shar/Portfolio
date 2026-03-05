import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarClock, Sparkles } from "lucide-react";
import Backdrop from "@/components/Backdrop";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { projects } from "@/lib/projects";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project case study does not exist.",
    };
  }

  return {
    title: project.title,
    description: `${project.subtitle} | ${project.highlight}`,
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-100">
      <Backdrop />
      <Navbar />

      <main className="relative mx-auto w-full max-w-4xl px-5 pb-12 pt-14 sm:px-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <header className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs uppercase tracking-[0.14em] text-zinc-400">
            <CalendarClock className="h-3.5 w-3.5" />
            {project.year}
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">{project.title}</h1>
          <p className="mt-4 text-base leading-relaxed text-zinc-300">{project.subtitle}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5">
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-zinc-500">
              <Sparkles className="h-3.5 w-3.5" />
              Project Highlight
            </p>
            <p className="mt-2 text-base font-medium text-zinc-100">{project.highlight}</p>
          </div>
        </header>

        <section className="mt-10 space-y-8">
          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-100">Problem</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">{project.problem}</p>
          </article>

          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-100">Solution</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">{project.solution}</p>
          </article>

          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-100">Impact</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {project.impact.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}
