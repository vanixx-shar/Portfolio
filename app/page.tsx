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
  Radar,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Magnet from "@/components/Magnet";
import Navbar from "@/components/Navbar";
import { ContactButton } from "@/components/PortfolioButtons";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import { featuredProjects } from "@/lib/projects";
import { profile } from "@/lib/profile";

const capabilityItems = [
  {
    name: "Robotics Prototyping",
    description:
      "Humanoid, assistive, underwater, and competition robotics work shaped around practical support workflows and real deployment constraints.",
  },
  {
    name: "CAD + Product Design",
    description:
      "Mechanical concepts, configurable products, and CAD-centered iteration for ideas that need to move cleanly from sketch to prototype.",
  },
  {
    name: "AI + Computer Vision",
    description:
      "Applied automation concepts, analytics workflows, and vision systems that turn messy real-world inputs into structured decisions.",
  },
  {
    name: "Engineering Leadership",
    description:
      "Chapter leadership, makerspace strategy, project management, student mentoring, and cross-team execution across technical communities.",
  },
  {
    name: "Innovation + Research",
    description:
      "Problem framing, entrepreneurship, social impact, patent value articulation, and responsible AI research for practical technical systems.",
  },
];

const activeRoles = profile.experiences.filter((item) => item.period.includes("Present")).length;
const topHighlights = profile.highlights.slice(0, 3);

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "split",
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  align?: "split" | "center";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto mb-12 max-w-3xl text-center sm:mb-16"
          : "mb-12 grid gap-5 md:mb-16 md:grid-cols-[0.9fr_1fr] md:items-end"
      }
    >
      <div>
        {eyebrow ? (
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[#D7E2EA]/45">{eyebrow}</p>
        ) : null}
        <h2 className="text-[clamp(2.6rem,7vw,6.8rem)] font-black uppercase leading-none text-[#F5F7FA]">
          {title}
        </h2>
      </div>
      <p
        className={
          align === "center"
            ? "mx-auto mt-5 max-w-2xl text-base font-light leading-relaxed text-[#D7E2EA]/68 sm:text-lg"
            : "max-w-2xl text-base font-light leading-relaxed text-[#D7E2EA]/68 sm:text-lg md:justify-self-end md:text-right"
        }
      >
        {subtitle}
      </p>
    </div>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="metal-card metal-lift rounded-lg p-4">
      <p className="text-[11px] uppercase tracking-[0.24em] text-[#D7E2EA]/42">{label}</p>
      <p className="mt-2 text-xl font-semibold leading-snug text-[#F5F7FA]">{value}</p>
    </div>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="metal-chip inline-flex rounded-full px-3 py-1 text-xs font-medium text-[#F5F7FA]/82">
      {children}
    </span>
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
    <article className="metal-card metal-lift shine-surface rounded-lg p-5 sm:p-7">
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,154,195,0.6),rgba(179,134,54,0.45),transparent)]" />
      <div className="relative">
        {eyebrow || icon ? (
          <div className="mb-5 flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#D7E2EA]/42">
            {icon}
            {eyebrow}
          </div>
        ) : null}
        <h3 className="text-2xl font-black leading-tight text-[#F5F7FA]">{title}</h3>
        <div className="mt-4 text-base font-light leading-relaxed text-[#D7E2EA]/72">{children}</div>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#0C0C0C] text-[#D7E2EA]">
      <Navbar />

      <main className="overflow-x-clip bg-[#0C0C0C]">
        <section className="relative flex min-h-[840px] flex-col overflow-hidden bg-[#0C0C0C] px-5 pb-8 pt-24 sm:min-h-[900px] sm:px-8 md:px-10 lg:min-h-screen">
          <div
            className="pointer-events-none absolute inset-0 opacity-28"
            style={{
              backgroundImage:
                "linear-gradient(rgba(215,226,234,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(215,226,234,0.1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%] bg-[linear-gradient(180deg,transparent,rgba(215,226,234,0.05)_38%,rgba(0,0,0,0.78))]" />
          <div className="pointer-events-none absolute -left-[18%] bottom-[23%] h-[120px] w-[58vw] -rotate-12 rounded-[28px] border border-[#D7E2EA]/10 bg-[linear-gradient(110deg,rgba(215,226,234,0.02),rgba(215,226,234,0.22)_45%,rgba(215,226,234,0.03))] shadow-[0_40px_90px_rgba(0,0,0,0.5)] sm:h-[150px]" />
          <div className="pointer-events-none absolute -right-[18%] bottom-[24%] h-[130px] w-[56vw] rotate-12 rounded-[28px] border border-[#D7E2EA]/10 bg-[linear-gradient(250deg,rgba(215,226,234,0.02),rgba(182,0,168,0.2)_45%,rgba(215,226,234,0.16))] shadow-[0_40px_90px_rgba(0,0,0,0.55)] sm:h-[165px]" />

          <div className="relative z-20 mx-auto grid w-full max-w-[1500px] flex-1 gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <FadeIn delay={0.1} y={34} className="relative z-20">
              <div className="metal-chip mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-[#F5F7FA]/78">
                <Sparkles className="h-3.5 w-3.5" />
                {profile.tagline}
              </div>

              <h1 className="hero-heading max-w-[920px] break-words text-[clamp(3.25rem,16vw,10.5rem)] font-black uppercase leading-[0.88] sm:text-[clamp(4rem,11vw,10.5rem)]">
                Hi, I&apos;m Vanika Sharma
              </h1>
              <p className="mt-6 max-w-2xl text-[clamp(1.2rem,2.4vw,2rem)] font-medium leading-tight text-[#F5F7FA]">
                {profile.role}
              </p>
              <div className="mt-6 hidden max-w-2xl space-y-3 text-base font-light leading-relaxed text-[#D7E2EA]/72 sm:block sm:text-lg">
                {profile.summary.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <div className="metal-card mt-6 flex max-w-[360px] items-start gap-2 rounded-lg px-4 py-3 text-xs leading-snug text-[#D7E2EA]/82 sm:mt-7 sm:inline-flex sm:max-w-full sm:items-center sm:rounded-full sm:py-2 sm:text-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff9ac3] shadow-[0_0_18px_rgba(255,154,195,0.72)]" />
                <span>Open to internships, collaborations, and engineering product opportunities</span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="#projects"
                  className="metal-button inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-black uppercase tracking-wider text-[#0C0C0C] transition hover:scale-[1.02] sm:px-9"
                  style={{ color: "#0C0C0C" }}
                >
                  Explore Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={profile.resumePath}
                  className="metal-chip inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-bold uppercase tracking-wider text-[#F5F7FA] transition hover:scale-[1.02]"
                >
                  Resume
                </Link>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="metal-chip inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-bold uppercase tracking-wider text-[#F5F7FA] transition hover:scale-[1.02]"
                >
                  LinkedIn
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-9 hidden gap-3 sm:grid sm:grid-cols-3">
                <MetricCard label="Selected Projects" value={`${featuredProjects.length}+ featured case studies`} />
                <MetricCard label="Active Roles" value={`${activeRoles} leadership and engineering tracks`} />
                <MetricCard label="Certifications" value={`${profile.certifications.length} industry credentials`} />
              </div>
            </FadeIn>

            <FadeIn delay={0.35} y={28} className="pointer-events-none absolute inset-x-0 bottom-[-84px] z-10 min-h-0 opacity-90 sm:bottom-[-120px] lg:pointer-events-auto lg:relative lg:bottom-auto lg:min-h-[680px] lg:opacity-100">
              <div className="pointer-events-none absolute left-1/2 top-[8%] h-[64vw] max-h-[620px] w-[64vw] max-w-[620px] -translate-x-1/2 rounded-[999px] border border-[#D7E2EA]/10" />
              <div className="pointer-events-none absolute left-1/2 top-[19%] h-[42vw] max-h-[420px] w-[42vw] max-w-[420px] -translate-x-1/2 rounded-[999px] border border-[#B600A8]/20" />
              <div className="pointer-events-none absolute bottom-[8%] left-1/2 h-[22%] w-[74%] -translate-x-1/2 rounded-[999px] bg-black/70 blur-3xl" />

              <Magnet padding={150} strength={3}>
                <img
                  src="/vanika-3d-avatar.png"
                  alt="3D avatar of Vanika Sharma"
                  className="relative z-10 ml-auto mr-[-18px] h-auto w-[min(82vw,340px)] select-none object-contain drop-shadow-[0_44px_90px_rgba(0,0,0,0.85)] sm:mr-[-50px] sm:w-[min(62vw,520px)] lg:mx-auto lg:w-[min(100%,620px)]"
                  draggable={false}
                />
              </Magnet>

              <div className="relative z-20 mt-[-36px] hidden gap-3 sm:grid-cols-3 lg:mt-[-80px] lg:grid">
                {topHighlights.map((item) => (
                  <div key={item.title} className="metal-card rounded-lg p-4 backdrop-blur">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#ff9ac3]/62">{item.title}</p>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-[#F5F7FA]">{item.description}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="about" className="relative px-5 py-20 sm:px-8 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1500px]">
            <SectionHeading
              eyebrow="About"
              title="Builder, leader, engineer"
              subtitle="Leadership, curiosity, disciplined execution, and engineering work with practical impact."
            />
            <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <ContentCard title="About Vanika" icon={<Sparkles className="h-4 w-4" />} eyebrow="Profile">
                <div className="space-y-4">
                  {profile.about.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </ContentCard>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <ContentCard title="Leadership Track" icon={<Radar className="h-4 w-4" />} eyebrow="Current Scope">
                  <ul className="space-y-3">
                    {profile.leadership.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d75f92] shadow-[0_0_12px_rgba(215,95,146,0.75)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </ContentCard>
                <ContentCard title="Recognition" icon={<Medal className="h-4 w-4" />} eyebrow="Highlights">
                  <div className="flex flex-wrap gap-2">
                    {profile.highlights.map((item) => (
                      <Pill key={item.title}>
                        {item.title} - {item.description}
                      </Pill>
                    ))}
                  </div>
                </ContentCard>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="relative px-5 py-20 sm:px-8 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1500px]">
            <SectionHeading
              eyebrow="Experience"
              title="Roles in motion"
              subtitle="Real leadership and applied engineering across institutions, industry, sports, and technical communities."
            />
            <div className="grid gap-4 lg:grid-cols-2">
              {profile.experiences.map((item) => (
                <ContentCard
                  key={`${item.role}-${item.organization}`}
                  eyebrow={item.type}
                  title={item.role}
                  icon={<Briefcase className="h-4 w-4" />}
                >
                  <p className="text-lg font-medium text-[#F5F7FA]">{item.organization}</p>
                  <p className="mt-1 text-sm text-[#D7E2EA]/42">
                    {item.period}
                    {item.location ? ` | ${item.location}` : ""}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D7E2EA]/60" />
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
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="relative px-5 py-20 sm:px-8 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1500px]">
            <SectionHeading
              eyebrow="Skills"
              title="Capability stack"
              subtitle="The portfolio is not just projects; it is robotics, product development, leadership, innovation, and communication working together."
            />
            <div className="grid gap-4 lg:grid-cols-5">
              {capabilityItems.map((item, index) => (
                <article
                  key={item.name}
                  className="metal-card metal-lift shine-surface rounded-lg p-5 lg:min-h-[300px]"
                >
                  <p className="text-5xl font-black leading-none text-[#ff9ac3]/26">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-8 text-xl font-black uppercase leading-tight text-[#F5F7FA]">{item.name}</h3>
                  <p className="mt-4 text-sm font-light leading-relaxed text-[#D7E2EA]/66">{item.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
              <ContentCard title="Education" icon={<GraduationCap className="h-4 w-4" />} eyebrow="Academic Foundation">
                <div className="space-y-6">
                  {profile.education.map((item) => (
                    <div key={item.institution} className="border-b border-[#D7E2EA]/10 pb-5 last:border-b-0 last:pb-0">
                      <h4 className="text-lg font-black text-[#F5F7FA]">{item.institution}</h4>
                      <p className="mt-1 font-medium text-[#D7E2EA]/80">{item.program}</p>
                      <p className="mt-1 text-sm text-[#D7E2EA]/42">{item.period}</p>
                      <div className="mt-4 space-y-2">
                        {item.details.map((detail) => (
                          <p key={detail}>{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </ContentCard>

              <div className="grid gap-4">
                <ContentCard title="Certifications" icon={<ShieldCheck className="h-4 w-4" />} eyebrow="Credentials">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {profile.certifications.map((item) => (
                      <div key={item.name} className="metal-card rounded-lg p-4">
                        <h4 className="font-black text-[#F5F7FA]">{item.name}</h4>
                        <p className="mt-1 text-[#D7E2EA]/72">{item.issuer}</p>
                        <p className="mt-1 text-sm text-[#D7E2EA]/42">
                          Issued {item.issued}
                          {item.expires ? ` | Expires ${item.expires}` : ""}
                        </p>
                      </div>
                    ))}
                  </div>
                </ContentCard>
                <ContentCard title="Technical + Leadership Skills" icon={<Wrench className="h-4 w-4" />} eyebrow="Skill Groups">
                  <div className="space-y-5">
                    {profile.skillGroups.map((group) => (
                      <div key={group.name}>
                        <h4 className="mb-2 font-black text-[#F5F7FA]">{group.name}</h4>
                        <div className="flex flex-wrap gap-2">
                          {group.skills.map((skill) => (
                            <Pill key={skill}>{skill}</Pill>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </ContentCard>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="relative px-5 py-20 sm:px-8 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1500px]">
            <SectionHeading
              eyebrow="Featured Projects"
              title="Case studies"
              subtitle="Selected work across awards, competitions, applied engineering, CAD, AI, robotics, patents, and product concepts."
            />
            <div className="grid gap-5 lg:grid-cols-2">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
            <Link
              href="/projects"
              className="mt-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-[#F5F7FA] transition hover:opacity-70"
            >
              View all projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section id="timeline" className="relative px-5 py-20 sm:px-8 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1500px]">
            <SectionHeading
              eyebrow="Timeline"
              title="Recent milestones"
              subtitle="Recent movement across robotics, leadership, community impact, sports leadership, and technical programs."
            />
            <Timeline />
          </div>
        </section>

        <section className="relative px-5 py-20 sm:px-8 md:px-10 md:py-28">
          <div className="metal-card shine-surface mx-auto max-w-[1500px] rounded-lg p-6 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#D7E2EA]/45">Contact</p>
                <h2 className="mt-4 text-[clamp(2.6rem,7vw,6.8rem)] font-black uppercase leading-none text-[#F5F7FA]">
                  Let&apos;s build something exceptional
                </h2>
                <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-[#D7E2EA]/70 sm:text-lg">
                  If your team is tackling difficult robotics or product engineering problems, connect with Vanika.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <ContactButton href={`mailto:${profile.email}`} className="gap-2">
                  <Mail className="h-4 w-4" />
                  Email Vanika
                </ContactButton>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="metal-chip inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-bold uppercase tracking-wider text-[#F5F7FA] transition hover:scale-[1.02]"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <Link
                  href={profile.resumePath}
                  className="metal-chip inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-bold uppercase tracking-wider text-[#F5F7FA] transition hover:scale-[1.02]"
                >
                  Resume
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
