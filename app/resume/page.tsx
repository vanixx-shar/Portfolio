import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Download, FileText, Linkedin } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ContactButton } from "@/components/PortfolioButtons";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Resume",
  description: "Professional resume for Vanika Sharma.",
};

export default function ResumePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#0C0C0C] text-[#D7E2EA]">
      <Navbar />

      <main className="relative mx-auto w-full max-w-4xl px-5 pb-20 pt-32 sm:px-6 md:pt-40">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/75 transition hover:text-[#D7E2EA]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back Home
        </Link>

        <section className="mt-8 rounded-[2rem] border border-[#D7E2EA]/20 bg-white/[0.03] p-7 sm:p-9">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/15 bg-[#0C0C0C] px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#D7E2EA]/60">
            <FileText className="h-3.5 w-3.5" />
            Resume Access
          </p>

          <h1 className="hero-heading mt-5 text-[clamp(3rem,9vw,92px)] font-black uppercase leading-none">
            Vanika Sharma Resume
          </h1>
          <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-[#D7E2EA]/75">
            Open the resume or download a local copy.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={profile.resumeFilePath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-6 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition hover:bg-[#D7E2EA]/10"
            >
              Open Resume
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={profile.resumeFilePath}
              download
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-6 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition hover:bg-[#D7E2EA]/10"
            >
              Download PDF
              <Download className="h-4 w-4" />
            </a>
            <ContactButton href={profile.linkedinUrl} className="gap-2">
              LinkedIn
              <Linkedin className="h-4 w-4" />
            </ContactButton>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
