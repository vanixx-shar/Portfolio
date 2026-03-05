import Link from "next/link";
import { ArrowUpRight, Home, Layers3 } from "lucide-react";
import { profile } from "@/lib/profile";

const navLinkClass =
  "inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-800/90 hover:text-white";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900/80 bg-zinc-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl border border-zinc-800 bg-zinc-900 text-sm font-semibold text-zinc-100 transition group-hover:border-zinc-700 group-hover:text-white">
            VS
          </div>
          <div className="hidden leading-tight sm:block">
            <p className="text-sm font-semibold tracking-tight text-zinc-100">{profile.name}</p>
            <p className="text-xs text-zinc-400">Robotics + Product Engineering</p>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <Link href="/" className={navLinkClass}>
            <Home className="h-4 w-4" />
            Home
          </Link>
          <Link href="/projects" className={navLinkClass}>
            <Layers3 className="h-4 w-4" />
            Projects
          </Link>
          <Link
            href={profile.resumePath}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-white"
          >
            Resume
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
