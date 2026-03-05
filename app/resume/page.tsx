import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Download, FileText, Linkedin } from "lucide-react";
import Backdrop from "@/components/Backdrop";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Resume",
  description: "Professional resume for Vanika Sharma.",
};

export default function ResumePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-100">
      <Backdrop />
      <Navbar />

      <main className="relative mx-auto w-full max-w-4xl px-5 pb-16 pt-14 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back Home
        </Link>

        <section className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900/55 p-7 sm:p-9">
          <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs uppercase tracking-[0.16em] text-zinc-500">
            <FileText className="h-3.5 w-3.5" />
            Resume Access
          </p>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">Vanika Sharma Resume</h1>
          <p className="mt-3 max-w-2xl text-zinc-300">
            Open the resume or download a local copy.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={profile.resumeFilePath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-100/80 bg-zinc-100 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-white"
            >
              Open Resume
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={profile.resumeFilePath}
              download
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition hover:border-zinc-700 hover:bg-zinc-800"
            >
              Download PDF
              <Download className="h-4 w-4" />
            </a>
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
        </section>
      </main>

      <Footer />
    </div>
  );
}
