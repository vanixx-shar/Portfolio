import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { ContactButton } from "@/components/PortfolioButtons";
import { profile } from "@/lib/profile";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0C0C0C] px-5 py-20 text-[#D7E2EA] sm:px-8 md:px-10">
      <div className="metal-card shine-surface mx-auto flex max-w-6xl flex-col gap-10 rounded-[2rem] p-6 sm:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/60">Contact</p>
            <h2 className="hero-heading mt-4 text-[clamp(3rem,10vw,120px)] font-black uppercase leading-none">
              Build with Vanika
            </h2>
            <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-[#D7E2EA]/75 sm:text-lg">
              If your team is tackling difficult robotics or product engineering problems, let&apos;s connect.
            </p>
          </div>
          <ContactButton href={`mailto:${profile.email}`}>Email Vanika</ContactButton>
        </div>

        <div className="flex flex-wrap items-center gap-5 border-t border-[#ff9ac3]/18 pt-8 text-sm font-light">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 transition hover:opacity-70"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition hover:opacity-70"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <Link href={profile.resumePath} className="transition hover:opacity-70">
            Resume
          </Link>
          <Link href="/projects" className="transition hover:opacity-70">
            Project archive
          </Link>
          <p className="ml-0 text-[#D7E2EA]/45 md:ml-auto">
            Built by {profile.name} with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
