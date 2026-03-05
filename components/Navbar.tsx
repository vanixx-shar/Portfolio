import Link from "next/link";
import { profile } from "@/lib/profile";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-40 border-b border-zinc-800/60 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-zinc-900 ring-1 ring-zinc-800 grid place-items-center font-semibold">
            VS
          </div>
          <div className="leading-tight">
            <div className="text-sm text-zinc-200 font-semibold tracking-tight">
              {profile.name}
            </div>
            <div className="text-xs text-zinc-400">Robotics • Product Engineering</div>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/projects"
            className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium ring-1 ring-zinc-800 hover:bg-zinc-800 transition"
          >
            Projects
          </Link>
          <a
            href={profile.links.resume}
            className="rounded-xl bg-white text-black px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}