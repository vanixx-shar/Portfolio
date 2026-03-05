import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/profile";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-900/80 pb-10 pt-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 text-zinc-300 transition hover:text-white"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-zinc-300 transition hover:text-white"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
        <p className="text-zinc-500">Built by {profile.name} with Next.js, Tailwind CSS, and Framer Motion.</p>
        <Link href={profile.resumePath} className="text-zinc-400 transition hover:text-zinc-200">
          Resume
        </Link>
      </div>
    </footer>
  );
}
