"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -7 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/55 p-6 shadow-[0_0_0_1px_rgba(24,24,27,0.6)]"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-zinc-200/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

      <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">{project.year}</p>
      <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-100">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-300">{project.subtitle}</p>
      <p className="mt-4 text-sm font-medium text-zinc-200">{project.highlight}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-zinc-800 bg-zinc-950/80 px-3 py-1 text-xs text-zinc-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-100 transition hover:text-white"
      >
        View case study
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </motion.article>
  );
}
