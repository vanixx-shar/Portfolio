"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type WalkBandProps = {
  videoSrc: string;
  poster?: string;
  eyebrow: string;
  title: string;
  subtitle: string;
};

export default function WalkBand({ videoSrc, poster, eyebrow, title, subtitle }: WalkBandProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative my-4 overflow-hidden border-y border-[#ff9ecb]/12">
      <video
        ref={videoRef}
        src={videoSrc}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      {/* blends + readability */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#08080a_2%,rgba(8,8,10,0.55)_38%,rgba(8,8,10,0.25)_70%,#08080a_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#08080a,transparent_28%,transparent_72%,#08080a)]" />

      <div className="relative mx-auto flex min-h-[clamp(240px,38vh,400px)] max-w-[1280px] items-center px-[var(--shell)]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#ff9ecb]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5fa8] shadow-[0_0_12px_rgba(255,95,168,0.9)]" />
            {eyebrow}
          </p>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-[0.95] text-chrome">{title}</h2>
          <p className="mt-4 max-w-md text-base font-light leading-relaxed text-[color:var(--muted)] sm:text-lg">
            {subtitle}
          </p>
          <a
            href="#projects"
            className="mt-5 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-[#ff5fa8] transition hover:text-[#ff9ecb]"
          >
            See the work
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
