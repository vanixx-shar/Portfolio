import Link from "next/link";
import { ArrowRight, Award, Bot, BriefcaseBusiness, Sparkles } from "lucide-react";
import Backdrop from "@/components/Backdrop";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import { featuredProjects } from "@/lib/projects";
import { profile } from "@/lib/profile";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-100">
      <Backdrop />
      <Navbar />

      <main className="relative mx-auto w-full max-w-6xl px-5 pb-12 pt-14 sm:px-6">
        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-xs uppercase tracking-[0.18em] text-zinc-300">
              <Sparkles className="h-3.5 w-3.5" />
              {profile.tagline}
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-100 sm:text-6xl">
              Building world-class robotics products that convert bold engineering into measurable impact.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300">{profile.role}</p>

            <ul className="mt-6 space-y-3 text-zinc-300">
              {profile.summary.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-100/80 bg-zinc-100 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-white"
              >
                Explore Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={profile.resumePath}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition hover:border-zinc-700 hover:bg-zinc-800"
              >
                Resume PDF
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-transparent px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-900/70"
              >
                Contact
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-zinc-800/80 bg-zinc-900/45 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">Impact Snapshot</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {profile.highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-2xl border border-zinc-800 bg-zinc-950/75 p-4"
                >
                  <p className="text-sm font-semibold text-zinc-100">{highlight.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-400">{highlight.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4">
              <p className="text-sm font-semibold text-zinc-100">Current Focus</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                Humanoid and assistive robotics programs focused on autonomy, system reliability, and disability-centered deployment outcomes.
              </p>
            </div>
          </aside>
        </section>

        <Section
          title="Featured Projects"
          subtitle="Award-winning and high-impact case studies across robotics, autonomy, AI, and product engineering."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {featuredProjects.slice(0, 6).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-200 transition hover:text-white"
            >
              View all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Section>

        <Section
          title="Leadership & Experience"
          subtitle="Community leadership backed by execution in robotics programs and engineering ecosystems."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {profile.leadership.map((item) => (
              <article
                key={item}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-400">
                  <BriefcaseBusiness className="h-3.5 w-3.5" />
                  Leadership
                </div>
                <p className="mt-3 text-sm font-medium leading-relaxed text-zinc-200">{item}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          title="Trajectory Timeline"
          subtitle="Rapid growth across research, competition robotics, and industry-linked engineering leadership."
        >
          <Timeline />
        </Section>

        <Section
          title="Ready to Build the Next Breakthrough"
          subtitle="Open to internships, collaborations, and robotics product opportunities."
        >
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/55 p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-base leading-relaxed text-zinc-300">
                  If your team is solving hard autonomy or engineering product challenges, I&apos;d love to collaborate.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-300">
                    <Bot className="h-3.5 w-3.5" />
                    Robotics
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-300">
                    <Award className="h-3.5 w-3.5" />
                    Award-winning builds
                  </span>
                </div>
              </div>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-100/85 bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-white"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
