import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Backdrop from "@/components/Backdrop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectNotFoundPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-100">
      <Backdrop />
      <Navbar />

      <main className="relative mx-auto flex w-full max-w-3xl flex-col px-5 pb-20 pt-16 sm:px-6">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/55 p-8 text-center sm:p-12">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">404</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Project not found
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-300">
            The case study you requested does not exist or may have been moved. You can continue exploring the full projects archive.
          </p>
          <Link
            href="/projects"
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-zinc-100 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
