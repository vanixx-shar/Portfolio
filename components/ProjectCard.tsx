"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="group rounded-2xl bg-zinc-900/60 ring-1 ring-zinc-800 p-6 hover:bg-zinc-900 transition relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative">
        <div className="text-xs text-zinc-500">{p.year}</div>
        <div className="mt-1 text-lg font-semibold tracking-tight">{p.title}</div>
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

        <div className="mt-6">
          <Link
            href={`/projects/${p.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-200 hover:text-white"
          >
            View case study <span className="text-zinc-500">↗</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}