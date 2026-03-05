import type { Metadata } from "next";
import Backdrop from "@/components/Backdrop";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Complete project archive for Vanika Sharma: robotics systems, autonomy, CAD, AI, and award-winning engineering case studies.",
};

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-100">
      <Backdrop />
      <Navbar />

      <main className="relative mx-auto w-full max-w-6xl px-5 pb-12 pt-14 sm:px-6">
        <header className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">Project Archive</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
            Engineering Case Studies
          </h1>
          <p className="mt-4 text-base leading-relaxed text-zinc-300">
            Problem-first, systems-level work spanning humanoids, autonomy, CAD, product innovation, and research.
          </p>
        </header>

        <section className="mt-10 grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
