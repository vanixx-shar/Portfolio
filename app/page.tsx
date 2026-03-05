"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Backdrop from "@/components/Backdrop";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import { profile } from "@/lib/profile";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Backdrop />
      <Navbar />

      <div className="relative mx-auto max-w-6xl px-6 py-14">
        {/* HERO */}
        <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900/60 px-4 py-2 ring-1 ring-zinc-800 text-sm text-zinc-300"
            >
              {profile.headline}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06 }}
              className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]"
            >
              Building robotics + products that make people go
              <span className="text-zinc-300"> “wow.”</span>
            </motion.h1>

            <div className="mt-5 space-y-2 text-zinc-300 leading-relaxed max-w-xl">
              {profile.summary.map((s) => (
                <p key={s}>{s}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-xl bg-white text-black px-5 py-2 text-sm font-semibold hover:opacity-90 transition"
              >
                Explore Projects
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-xl bg-zinc-900 px-5 py-2 text-sm font-semibold ring-1 ring-zinc-800 hover:bg-zinc-800 transition"
              >
                Contact
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 max-w-xl">
              {profile.highlights.map((s) => (
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

          {/* RIGHT “WOW” CARD */}
          <div className="rounded-3xl bg-zinc-900/50 ring-1 ring-zinc-800 p-7">
            <div className="text-sm text-zinc-400">Signature Focus</div>
            <div className="mt-2 text-xl font-semibold">Assistive robotics + autonomy</div>
            <p className="mt-3 text-zinc-300 leading-relaxed">
              From underwater robotics (RoboSub) to humanoid assistive exploration, I build and lead with impact.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {profile.badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full bg-zinc-950 px-3 py-1 text-xs text-zinc-300 ring-1 ring-zinc-800"
                >
                  {b}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <div className="text-sm text-zinc-400 mb-3">Featured Case Studies</div>
              <div className="space-y-3">
                {projects.slice(0, 3).map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="group block rounded-2xl bg-zinc-950/60 ring-1 ring-zinc-800 p-4 hover:bg-zinc-950 transition"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-semibold">{p.title}</div>
                        <div className="mt-1 text-sm text-zinc-400">{p.subtitle}</div>
                      </div>
                      <div className="text-zinc-500 group-hover:text-zinc-200 transition">
                        ↗
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <Section title="Featured Projects" subtitle="Case studies with problem → solution → impact">
          <div className="grid gap-4 md:grid-cols-2">
            {projects.slice(0, 4).map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-200 hover:text-white"
            >
              View all projects <span className="text-zinc-500">→</span>
            </Link>
          </div>
        </Section>

        {/* LEADERSHIP */}
        <Section title="Leadership & Experience" subtitle="Leadership with delivery — not just titles">
          <div className="rounded-2xl bg-zinc-900/60 ring-1 ring-zinc-800 p-6">
            <ul className="space-y-3 text-zinc-200">
              {profile.leadership.map((r) => (
                <li key={r} className="flex gap-3">
                  <span className="text-zinc-500">•</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* TIMELINE */}
        <Section title="Timeline" subtitle="A fast-moving trajectory in engineering + robotics">
          <Timeline />
        </Section>

        {/* CONTACT */}
        <Section title="Let’s connect" subtitle="Internships • collaborations • robotics • research">
          <div className="rounded-3xl bg-zinc-900/60 ring-1 ring-zinc-800 p-7">
            <p className="text-zinc-300">
              Email me for collaborations, internships, research opportunities, or robotics projects.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-xl bg-white text-black px-5 py-2 text-sm font-semibold hover:opacity-90 transition"
              >
                Email
              </a>
              <a
                href={profile.links.resume}
                className="rounded-xl bg-zinc-950 px-5 py-2 text-sm font-semibold ring-1 ring-zinc-800 hover:bg-zinc-900 transition"
              >
                Resume
              </a>
              <Link
                href="/projects"
                className="rounded-xl bg-zinc-950 px-5 py-2 text-sm font-semibold ring-1 ring-zinc-800 hover:bg-zinc-900 transition"
              >
                Projects
              </Link>
            </div>
          </div>
        </Section>
      </div>

      <Footer />
    </div>
  );
}