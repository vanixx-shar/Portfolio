import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, GraduationCap, Linkedin, Mail, ShieldCheck, Sparkles } from "lucide-react";
import Backdrop from "@/components/Backdrop";
import Footer from "@/components/Footer";
import HeroScene from "@/components/HeroScene";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import { featuredProjects } from "@/lib/projects";
import { profile } from "@/lib/profile";

export default function HomePage() {
  const totalProjects = featuredProjects.length;
  const activeRoles = profile.experiences.filter((item) => item.period.includes("Present")).length;
  const totalCertifications = profile.certifications.length;

  return (
    <div className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-100">
      <Backdrop />
      <Navbar />

      <main className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-14 sm:px-6">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-xs uppercase tracking-[0.18em] text-zinc-300">
              <Sparkles className="h-3.5 w-3.5" />
              {profile.tagline}
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-tight text-zinc-100 sm:text-6xl">
              Vanika Sharma
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-zinc-300">{profile.role}</p>

            <div className="mt-6 space-y-3 text-zinc-300">
              {profile.summary.map((point) => (
                <p key={point} className="leading-relaxed">
                  {point}
                </p>
              ))}
            </div>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/65 px-4 py-2 text-xs text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open to internships, collaborations, and engineering product opportunities
            </div>

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
                Resume
              </Link>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition hover:border-zinc-700 hover:bg-zinc-800"
              >
                LinkedIn
                <Linkedin className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/55 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">Selected Projects</p>
                <p className="mt-1 text-sm text-zinc-300">{totalProjects}+ featured case studies</p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/55 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">Active Roles</p>
                <p className="mt-1 text-sm text-zinc-300">{activeRoles} concurrent leadership and engineering tracks</p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/55 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">Certifications</p>
                <p className="mt-1 text-sm text-zinc-300">{totalCertifications} industry credentials</p>
              </div>
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {profile.highlights.slice(0, 3).map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/55 p-4 transition hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900/75"
                >
                  <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{item.title}</p>
                  <p className="mt-1 text-sm text-zinc-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <HeroScene role={profile.role} highlights={profile.highlights} />
        </section>

        <Section title="About" subtitle="Leadership, curiosity, and disciplined execution.">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/45 p-6 sm:p-8">
            <div className="space-y-4 text-zinc-300">
              {profile.about.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Section>

        <Section title="Experience" subtitle="Real leadership and applied engineering across institutions and industry.">
          <div className="grid gap-4 md:grid-cols-2">
            {profile.experiences.map((item) => (
              <article
                key={`${item.organization}-${item.role}`}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 transition hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/70"
              >
                <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{item.type}</p>
                <h3 className="mt-2 text-lg font-semibold text-zinc-100">{item.role}</h3>
                <p className="text-sm text-zinc-300">{item.organization}</p>
                <p className="mt-1 text-xs text-zinc-500">
                  {item.period}
                  {item.location ? ` | ${item.location}` : ""}
                </p>
                <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                {item.skills?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </Section>

        <Section title="Education & Certifications" subtitle="Academic foundation and professional credentials.">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-zinc-500">
                <GraduationCap className="h-4 w-4" />
                Education
              </p>
              <div className="mt-4 space-y-4">
                {profile.education.map((edu) => (
                  <article key={edu.institution} className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-4">
                    <h3 className="font-semibold text-zinc-100">{edu.institution}</h3>
                    <p className="mt-1 text-sm text-zinc-300">{edu.program}</p>
                    <p className="mt-1 text-xs text-zinc-500">{edu.period}</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-zinc-400">
                      {edu.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-zinc-500">
                <ShieldCheck className="h-4 w-4" />
                Certifications
              </p>
              <div className="mt-4 space-y-3">
                {profile.certifications.map((cert) => (
                  <article key={cert.name} className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-4">
                    <h3 className="font-semibold text-zinc-100">{cert.name}</h3>
                    <p className="mt-1 text-sm text-zinc-300">{cert.issuer}</p>
                    <p className="mt-1 text-xs text-zinc-500">
                      Issued {cert.issued}
                      {cert.expires ? ` | Expires ${cert.expires}` : ""}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-6">
                <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-zinc-500">
                  <BriefcaseBusiness className="h-4 w-4" />
                  Skills
                </p>
                <div className="mt-3 space-y-3">
                  {profile.skillGroups.map((group) => (
                    <div key={group.name}>
                      <p className="text-sm font-medium text-zinc-200">{group.name}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span key={skill} className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Featured Projects" subtitle="Selected case studies from awards, competitions, and applied engineering work.">
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

        <Section title="Timeline" subtitle="Recent milestones across robotics, leadership, and community impact.">
          <Timeline />
        </Section>

        <Section
          title="Let's Build Something Exceptional"
          subtitle="If your team is tackling difficult robotics or product engineering problems, let's connect."
        >
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-100/80 bg-zinc-100 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-white"
              >
                <Mail className="h-4 w-4" />
                Email Vanika
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition hover:border-zinc-700 hover:bg-zinc-800"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <Link
                href={profile.resumePath}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition hover:border-zinc-700 hover:bg-zinc-800"
              >
                Resume
              </Link>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
