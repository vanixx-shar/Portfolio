/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  Linkedin,
  Mail,
  Medal,
  MousePointer2,
  Radar,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import Counter from "@/components/Counter";
import Footer from "@/components/Footer";
import Magnet from "@/components/Magnet";
import MetalField from "@/components/MetalField";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import { ContactButton } from "@/components/PortfolioButtons";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionNav from "@/components/SectionNav";
import Timeline from "@/components/Timeline";
import TourGuide, { type TourStop } from "@/components/TourGuide";
import WalkBand from "@/components/WalkBand";
import { featuredProjects } from "@/lib/projects";
import { avatar3dFull, profile } from "@/lib/profile";

const capabilityItems = [
  {
    name: "Robotics Prototyping",
    description:
      "Humanoid, assistive, underwater, and competition robotics shaped around practical support workflows and real deployment constraints.",
  },
  {
    name: "CAD + Product Design",
    description:
      "Mechanical concepts, configurable products, and CAD-centered iteration for ideas that need to move cleanly from sketch to prototype.",
  },
  {
    name: "AI + Computer Vision",
    description:
      "Applied automation, analytics workflows, and vision systems that turn messy real-world inputs into structured decisions.",
  },
  {
    name: "Engineering Leadership",
    description:
      "Chapter leadership, makerspace strategy, project management, mentoring, and cross-team execution across technical communities.",
  },
  {
    name: "Innovation + Research",
    description:
      "Problem framing, entrepreneurship, patent value articulation, and responsible AI research for practical technical systems.",
  },
];

const activeRoles = profile.experiences.filter((item) => item.period.includes("Present")).length;
const topHighlights = profile.highlights.slice(0, 3);

const marqueeWords = [
  "Robotics",
  "Humanoids",
  "Autonomy",
  "Fusion 360",
  "SolidWorks",
  "Computer Vision",
  "Python",
  "C/C++",
  "Rapid Prototyping",
  "CAD",
  "Leadership",
  "Innovation",
];

const tourStops: TourStop[] = [
  { id: "about", label: "About", line: "Start here — a quick hello and what actually drives me as an engineer." },
  { id: "skills", label: "Toolkit", line: "My toolkit: robotics, CAD, AI, and a whole lot of leadership." },
  { id: "experience", label: "Experience", line: "Where I've done the real work — labs, a startup, and orgs I lead." },
  { id: "projects", label: "Projects", line: "My favourite part! Real builds, awards, and case studies." },
  { id: "timeline", label: "Milestones", line: "The milestones, in order. We're almost at the finish line." },
  { id: "contact", label: "Contact", line: "Loved the tour? Let's build something exceptional together." },
];

const navItems = [
  { id: "top", label: "Top" },
  { id: "about", label: "About" },
  { id: "skills", label: "Toolkit" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "timeline", label: "Milestones" },
  { id: "contact", label: "Contact" },
];

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <Reveal direction="blur" className="mb-12 grid gap-5 md:mb-16 md:grid-cols-[0.85fr_1fr] md:items-end">
      <div>
        <p className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#ff9ecb]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff5fa8] shadow-[0_0_12px_rgba(255,95,168,0.9)]" />
          {eyebrow}
        </p>
        <h2 className="text-[clamp(2.4rem,6vw,5.6rem)] font-black uppercase leading-[0.92] text-chrome">
          {title}
        </h2>
      </div>
      <p className="max-w-xl text-base font-light leading-relaxed text-[color:var(--muted)] sm:text-lg md:justify-self-end md:text-right">
        {subtitle}
      </p>
    </Reveal>
  );
}

function ContentCard({
  eyebrow,
  title,
  children,
  icon,
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <article className="metal-card metal-lift shine-surface h-full p-5 sm:p-7">
      {eyebrow || icon ? (
        <div className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-[color:var(--faint)]">
          {icon}
          {eyebrow}
        </div>
      ) : null}
      <h3 className="text-2xl font-black leading-tight text-[#f4f7fb]">{title}</h3>
      <div className="mt-4 text-base font-light leading-relaxed text-[color:var(--muted)]">{children}</div>
    </article>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="metal-chip inline-flex px-3 py-1 text-xs font-medium text-[#f4f7fb]/85">{children}</span>
  );
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip text-[color:var(--text)]">
      <Preloader />
      <MetalField />
      <Navbar />
      <SectionNav items={navItems} />
      <TourGuide videoSrc="/guide-reel.mp4" poster="/guide-poster.jpg" stops={tourStops} />

      <main className="relative overflow-x-clip">
        {/* ───────────────────────── HERO ───────────────────────── */}
        <section
          id="top"
          className="relative flex min-h-[94svh] items-center overflow-hidden px-[var(--shell)] pb-10 pt-28 sm:pt-32"
        >
          <div className="mx-auto grid w-full max-w-[1280px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="fade-in relative z-20" style={{ ["--fade-delay" as string]: "0.05s" }}>
              <div className="metal-chip mb-6 inline-flex items-center gap-2 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-[#f4f7fb]/85">
                <Sparkles className="h-3.5 w-3.5 text-[#ff9ecb]" />
                {profile.tagline}
              </div>

              <h1 className="hero-heading max-w-[14ch] break-words text-[clamp(3rem,9vw,7.5rem)] font-black uppercase leading-[0.86]">
                Hi, I&apos;m Vanika
              </h1>
              <p className="mt-6 max-w-2xl text-[clamp(1.1rem,2.2vw,1.7rem)] font-medium leading-tight text-[#f4f7fb]">
                {profile.role}
              </p>
              <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-[color:var(--muted)] sm:text-lg">
                {profile.summary[1]} {profile.summary[2]}
              </p>

              <div className="glass mt-7 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs leading-snug text-[color:var(--muted)] sm:text-sm">
                <span className="pulse-glow h-2.5 w-2.5 rounded-full bg-[#ff5fa8] shadow-[0_0_18px_rgba(255,95,168,0.8)]" />
                Open to internships, collaborations, and engineering product roles
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Magnet>
                  <Link
                    href="#projects"
                    className="metal-button inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-black uppercase tracking-wider sm:px-9"
                  >
                    Take the tour
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Magnet>
                <Magnet>
                  <Link
                    href={profile.resumePath}
                    className="metal-chip inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-[#f4f7fb]"
                  >
                    Resume
                  </Link>
                </Magnet>
                <Magnet>
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="metal-chip inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-[#f4f7fb]"
                  >
                    LinkedIn
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Magnet>
              </div>

              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
                {[
                  { value: featuredProjects.length, suffix: "+", label: "Featured builds" },
                  { value: profile.leadership.length, suffix: "", label: "Leadership roles" },
                  { value: profile.highlights.length, suffix: "", label: "Recognitions" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <Counter
                      to={stat.value}
                      suffix={stat.suffix}
                      className="text-pink-grad text-3xl font-black sm:text-4xl"
                    />
                    <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-[color:var(--faint)]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Full-body avatar */}
            <div className="fade-in relative z-10 flex min-h-[420px] items-end justify-center lg:min-h-[640px]" style={{ ["--fade-delay" as string]: "0.25s" }}>
              <div className="aurora pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70" />
              <div className="spin-slow pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[34vw] max-h-[560px] w-[34vw] max-w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff9ecb]/15" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[24vw] max-h-[420px] w-[24vw] max-w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff5fa8]/20" />
              <div className="pointer-events-none absolute bottom-[6%] left-1/2 -z-10 h-[14%] w-[60%] -translate-x-1/2 rounded-[999px] bg-black/70 blur-2xl" />

              <Magnet padding={180} strength={6} className="float-idle">
                <img
                  src={avatar3dFull}
                  alt="3D full-body avatar of Vanika Sharma"
                  className="h-[clamp(380px,52vw,640px)] w-auto select-none object-contain drop-shadow-[0_44px_90px_rgba(255,95,168,0.28)]"
                  draggable={false}
                />
              </Magnet>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[color:var(--faint)] sm:flex">
            <MousePointer2 className="h-4 w-4 animate-bounce text-[#ff9ecb]" />
            Scroll · Vanika will guide you
          </div>
        </section>

        {/* marquee strip */}
        <div className="relative overflow-hidden border-y border-[#ff9ecb]/12 py-4">
          <div className="marquee-track marquee-left">
            {[...marqueeWords, ...marqueeWords].map((word, i) => (
              <span
                key={`${word}-${i}`}
                className="flex items-center gap-3 px-4 text-lg font-black uppercase tracking-wider text-[#f4f7fb]/70 sm:text-2xl"
              >
                {word}
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff5fa8]/70" />
              </span>
            ))}
          </div>
        </div>

        {/* ───────────────────────── ABOUT ───────────────────────── */}
        <section id="about" className="relative px-[var(--shell)] py-16 md:py-24">
          <div className="mx-auto max-w-[1280px]">
            <SectionHeading
              eyebrow="About"
              title="Builder, leader, engineer"
              subtitle="Leadership, curiosity, disciplined execution, and engineering work with practical, human impact."
            />

            <Reveal direction="blur">
              <ContentCard title="About Vanika" icon={<Sparkles className="h-4 w-4 text-[#ff9ecb]" />} eyebrow="The story">
                <div className="gap-x-10 md:columns-2 [&>p]:mb-4 [&>p]:break-inside-avoid">
                  {profile.about.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </ContentCard>
            </Reveal>

            <div className="mt-5 grid gap-5 lg:grid-cols-3">
              <Reveal direction="up" delay={0.03}>
                <ContentCard title="Leadership Track" icon={<Radar className="h-4 w-4 text-[#ff9ecb]" />} eyebrow="Current Scope">
                  <ul className="space-y-3">
                    {profile.leadership.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff5fa8] shadow-[0_0_12px_rgba(255,95,168,0.7)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </ContentCard>
              </Reveal>
              <Reveal direction="up" delay={0.08}>
                <ContentCard title="Recognition" icon={<Medal className="h-4 w-4 text-[#ff9ecb]" />} eyebrow="Highlights">
                  <div className="flex flex-wrap gap-2">
                    {profile.highlights.map((item) => (
                      <Pill key={item.title}>
                        {item.title} — {item.description}
                      </Pill>
                    ))}
                  </div>
                </ContentCard>
              </Reveal>
              <Reveal direction="up" delay={0.13}>
                <ContentCard title="Quick Facts" icon={<Sparkles className="h-4 w-4 text-[#ff9ecb]" />} eyebrow="At a glance">
                  <dl className="space-y-3">
                    {[
                      { k: "Based in", v: profile.location },
                      { k: "Studying", v: "Engineering Product Development, SUTD" },
                      { k: "Status", v: "Global Merit Scholar" },
                      { k: "Focus", v: "Humanoid & assistive robotics, autonomy, CAD" },
                      { k: "Also", v: "Certified yoga instructor & Asian Yoga Sports referee" },
                    ].map((row) => (
                      <div key={row.k} className="flex flex-col border-b border-[#ff9ecb]/10 pb-2.5 last:border-b-0 last:pb-0 sm:flex-row sm:gap-3">
                        <dt className="w-28 shrink-0 text-[11px] font-bold uppercase tracking-[0.18em] text-[#ff9ecb]/80">
                          {row.k}
                        </dt>
                        <dd className="text-sm text-[#f4f7fb]">{row.v}</dd>
                      </div>
                    ))}
                  </dl>
                </ContentCard>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───────────────────────── SKILLS ───────────────────────── */}
        <section id="skills" className="relative px-[var(--shell)] py-16 md:py-24">
          <div className="mx-auto max-w-[1280px]">
            <SectionHeading
              eyebrow="Toolkit"
              title="Capability stack"
              subtitle="Robotics, product development, leadership, innovation, and communication working together."
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {capabilityItems.map((item, index) => (
                <Reveal key={item.name} direction="up" delay={index * 0.06}>
                  <article className="metal-card metal-lift shine-surface h-full p-5 lg:min-h-[300px]">
                    <p className="text-5xl font-black leading-none text-[#ff5fa8]/30">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-8 text-xl font-black uppercase leading-tight text-[#f4f7fb]">{item.name}</h3>
                    <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <Reveal direction="left">
                <ContentCard title="Education" icon={<GraduationCap className="h-4 w-4 text-[#ff9ecb]" />} eyebrow="Academic Foundation">
                  <div className="space-y-6">
                    {profile.education.map((item) => (
                      <div key={item.institution} className="border-b border-[#ff9ecb]/10 pb-5 last:border-b-0 last:pb-0">
                        <h4 className="text-lg font-black text-[#f4f7fb]">{item.institution}</h4>
                        <p className="mt-1 font-medium text-[color:var(--muted)]">{item.program}</p>
                        <p className="mt-1 text-sm text-[color:var(--faint)]">{item.period}</p>
                        <div className="mt-4 space-y-2">
                          {item.details.map((detail) => (
                            <p key={detail}>{detail}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </ContentCard>
              </Reveal>

              <div className="grid gap-5">
                <Reveal direction="right">
                  <ContentCard title="Certifications" icon={<ShieldCheck className="h-4 w-4 text-[#ff9ecb]" />} eyebrow="Credentials">
                    <div className="grid gap-3 sm:grid-cols-2">
                      {profile.certifications.map((item) => (
                        <div key={item.name} className="metal-card p-4">
                          <h4 className="font-black text-[#f4f7fb]">{item.name}</h4>
                          <p className="mt-1 text-[color:var(--muted)]">{item.issuer}</p>
                          <p className="mt-1 text-sm text-[color:var(--faint)]">
                            Issued {item.issued}
                            {item.expires ? ` · Expires ${item.expires}` : ""}
                          </p>
                        </div>
                      ))}
                    </div>
                  </ContentCard>
                </Reveal>
                <Reveal direction="right" delay={0.05}>
                  <ContentCard title="Technical + Leadership Skills" icon={<Wrench className="h-4 w-4 text-[#ff9ecb]" />} eyebrow="Skill Groups">
                    <div className="space-y-5">
                      {profile.skillGroups.map((group) => (
                        <div key={group.name}>
                          <h4 className="mb-2 font-black text-[#f4f7fb]">{group.name}</h4>
                          <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                              <Pill key={skill}>{skill}</Pill>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </ContentCard>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────── EXPERIENCE ───────────────────────── */}
        <section id="experience" className="relative px-[var(--shell)] py-16 md:py-24">
          <div className="mx-auto max-w-[1280px]">
            <SectionHeading
              eyebrow="Experience"
              title="Roles in motion"
              subtitle="Real leadership and applied engineering across institutions, industry, sport, and technical communities."
            />
            <div className="grid gap-5 lg:grid-cols-2">
              {profile.experiences.map((item, index) => (
                <Reveal key={`${item.role}-${item.organization}`} direction="up" delay={(index % 2) * 0.06}>
                  <ContentCard eyebrow={item.type} title={item.role} icon={<Briefcase className="h-4 w-4 text-[#ff9ecb]" />}>
                    <p className="text-lg font-medium text-[#f4f7fb]">{item.organization}</p>
                    <p className="mt-1 text-sm text-[color:var(--faint)]">
                      {item.period}
                      {item.location ? ` · ${item.location}` : ""}
                    </p>
                    <ul className="mt-5 space-y-3">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff9ecb]/70" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    {item.skills?.length ? (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <Pill key={skill}>{skill}</Pill>
                        ))}
                      </div>
                    ) : null}
                  </ContentCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────────── WALKING INTERLUDE ───────────────────────── */}
        <WalkBand
          videoSrc="/band.mp4"
          poster="/band-poster.jpg"
          eyebrow="The work"
          title="Now the fun part"
          subtitle="Real builds, awards, and the projects I'm proudest of — robotics, CAD, AI, and product concepts."
        />

        {/* ───────────────────────── PROJECTS ───────────────────────── */}
        <section id="projects" className="relative px-[var(--shell)] py-16 md:py-24">
          <div className="mx-auto max-w-[1280px]">
            <SectionHeading
              eyebrow="Featured Projects"
              title="Case studies"
              subtitle="Selected work across awards, competitions, applied engineering, CAD, AI, robotics, patents, and product concepts."
            />
            <div className="grid gap-6 lg:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <Reveal key={project.slug} direction="up" delay={(index % 2) * 0.06}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
            <Magnet>
              <Link
                href="/projects"
                className="mt-10 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-[#f4f7fb] transition hover:text-[#ff9ecb]"
              >
                View all projects
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Magnet>
          </div>
        </section>

        {/* ───────────────────────── TIMELINE ───────────────────────── */}
        <section id="timeline" className="relative px-[var(--shell)] py-16 md:py-24">
          <div className="mx-auto max-w-[1280px]">
            <SectionHeading
              eyebrow="Milestones"
              title="Recent milestones"
              subtitle="Recent movement across robotics, leadership, community impact, sport, and technical programs."
            />
            <Reveal direction="up">
              <Timeline />
            </Reveal>
          </div>
        </section>

        {/* ───────────────────────── CONTACT ───────────────────────── */}
        <section id="contact" className="relative px-[var(--shell)] py-16 md:py-24">
          <Reveal direction="scale" className="mx-auto max-w-[1280px]">
            <div className="metal-card shine-surface relative overflow-hidden p-7 sm:p-12">
              <div className="aurora pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-40" />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#ff9ecb]">Contact</p>
                  <h2 className="mt-4 text-[clamp(2.4rem,6vw,5.6rem)] font-black uppercase leading-[0.92] text-chrome">
                    Let&apos;s build something exceptional
                  </h2>
                  <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-[color:var(--muted)] sm:text-lg">
                    If your team is tackling difficult robotics or product engineering problems, let&apos;s talk.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <Magnet>
                    <ContactButton href={`mailto:${profile.email}`} className="gap-2">
                      <Mail className="h-4 w-4" />
                      Email Vanika
                    </ContactButton>
                  </Magnet>
                  <Magnet>
                    <a
                      href={profile.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="metal-chip inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-[#f4f7fb]"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </Magnet>
                  <Magnet>
                    <Link
                      href={profile.resumePath}
                      className="metal-chip inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-[#f4f7fb]"
                    >
                      Resume
                    </Link>
                  </Magnet>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
