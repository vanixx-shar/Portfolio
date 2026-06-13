import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectNotFoundPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#0C0C0C] text-[#D7E2EA]">
      <Navbar />

      <main className="relative mx-auto flex w-full max-w-3xl flex-col px-5 pb-20 pt-32 sm:px-6 md:pt-40">
        <div className="rounded-[2rem] border border-[#D7E2EA]/20 bg-white/[0.03] p-8 text-center sm:p-12">
          <p className="text-xs uppercase tracking-[0.18em] text-[#D7E2EA]/55">404</p>
          <h1 className="hero-heading mt-4 text-4xl font-black uppercase leading-none sm:text-5xl">
            Project not found
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-[#D7E2EA]/75">
            The case study you requested does not exist or may have been moved. You can continue exploring the full projects archive.
          </p>
          <Link
            href="/projects"
            className="mt-7 inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-6 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition hover:bg-[#D7E2EA]/10"
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
