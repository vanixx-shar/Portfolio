import Link from "next/link";
import { FileText, Linkedin } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { profile } from "@/lib/profile";

export default function Navbar() {
  return (
    <FadeIn delay={0} y={-20} className="fixed inset-x-0 top-0 z-50 border-b border-[#D7E2EA]/10 bg-[#0C0C0C]/82 backdrop-blur-xl">
      <header>
        <nav className="mx-auto flex w-full max-w-[1500px] items-center justify-between gap-4 px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#D7E2EA] sm:px-6 md:px-8 lg:px-10">
          <Link href="/" className="flex min-w-0 items-center gap-3 transition duration-200 hover:opacity-70">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[#D7E2EA]/13 bg-white/[0.045] text-sm font-black">
              VS
            </span>
            <span className="hidden min-w-0 sm:block">
              <span className="block truncate text-sm normal-case tracking-normal text-[#F5F7FA]">{profile.name}</span>
              <span className="block truncate text-[11px] normal-case tracking-normal text-[#D7E2EA]/52">
                Robotics + Product Engineering
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:hidden">
            <Link
              href="/#projects"
              className="inline-flex items-center rounded-full border border-[#D7E2EA]/12 bg-white/[0.04] px-3 py-2 transition hover:bg-white/[0.08]"
            >
              Work
            </Link>
            <Link
              href={profile.resumePath}
              className="inline-flex items-center rounded-full bg-[#F5F7FA] px-3 py-2 text-[#0C0C0C] transition hover:scale-[1.02]"
              style={{ color: "#0C0C0C" }}
            >
              Resume
            </Link>
          </div>

          <div className="hidden min-w-0 items-center justify-end gap-2 sm:flex">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#D7E2EA]/0 px-3 py-2 transition duration-200 hover:border-[#D7E2EA]/12 hover:bg-white/[0.045]"
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#D7E2EA]/0 px-3 py-2 transition duration-200 hover:border-[#D7E2EA]/12 hover:bg-white/[0.045]"
            >
              About
            </Link>
            <Link
              href="/#skills"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#D7E2EA]/0 px-3 py-2 transition duration-200 hover:border-[#D7E2EA]/12 hover:bg-white/[0.045]"
            >
              Skills
            </Link>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#D7E2EA]/0 px-3 py-2 transition duration-200 hover:border-[#D7E2EA]/12 hover:bg-white/[0.045]"
            >
              Projects
            </Link>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1.5 rounded-full border border-[#D7E2EA]/12 bg-white/[0.04] px-3 py-2 transition hover:bg-white/[0.08] md:inline-flex"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <Link
              href={profile.resumePath}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F7FA] px-3 py-2 text-[#0C0C0C] transition hover:scale-[1.02] sm:px-4"
              style={{ color: "#0C0C0C" }}
            >
              Resume
              <FileText className="hidden h-4 w-4 sm:block" />
            </Link>
          </div>
        </nav>
      </header>
    </FadeIn>
  );
}
