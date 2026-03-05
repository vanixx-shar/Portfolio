import Link from "next/link";
import Backdrop from "@/components/Backdrop";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Backdrop />
      <Navbar />

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
          Deep case studies showing the engineering thinking: problem → solution → impact.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}