import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { orderedProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Complete project archive for Vanika Sharma: robotics systems, autonomy, CAD, AI, and award-winning engineering case studies.",
};

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#0C0C0C] text-[#D7E2EA]">
      <Navbar />

      <main className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32 sm:px-6 md:pt-40">
        <header className="max-w-4xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#D7E2EA]/55">Project Archive</p>
          <h1 className="hero-heading mt-4 text-[clamp(3.5rem,10vw,120px)] font-black uppercase leading-none">
            Engineering Case Studies
          </h1>
          <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-[#D7E2EA]/75 sm:text-lg">
            Problem-first, systems-level work spanning humanoids, autonomy, CAD, product innovation, and research.
          </p>
        </header>

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          {orderedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
