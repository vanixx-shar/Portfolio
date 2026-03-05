"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), {
    stiffness: 220,
    damping: 22,
  });

  const glowX = useTransform(x, [0, 1], ["20%", "80%"]);
  const glowY = useTransform(y, [0, 1], ["15%", "85%"]);

  return (
    <div className="[perspective:1000px]">
      <motion.article
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          x.set((event.clientX - rect.left) / rect.width);
          y.set((event.clientY - rect.top) / rect.height);
        }}
        onMouseLeave={() => {
          x.set(0.5);
          y.set(0.5);
        }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/55 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
      >
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at var(--gx) var(--gy), rgba(255,255,255,0.16), transparent 40%)",
            ["--gx" as string]: glowX,
            ["--gy" as string]: glowY,
          }}
        />

        <div style={{ transform: "translateZ(40px)" }}>
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
        </div>
      </motion.article>
    </div>
  );
}
