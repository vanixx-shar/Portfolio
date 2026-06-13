"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

export type TourStop = {
  id: string;
  label: string;
  line: string;
};

type TourGuideProps = {
  /** Looping walk-cycle video (with poster fallback). */
  videoSrc: string;
  poster?: string;
  stops: TourStop[];
};

export default function TourGuide({ videoSrc, poster, stops }: TourGuideProps) {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(true);
  const ratios = useRef<number[]>(stops.map(() => 0));
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (visible && v) {
      v.muted = true;
      v.play().catch(() => {});
    }
  }, [visible]);

  // Which section is she standing in front of?
  useEffect(() => {
    const els = stops
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const idx = stops.findIndex((s) => s.id === entry.target.id);
          if (idx >= 0) ratios.current[idx] = entry.isIntersecting ? entry.intersectionRatio : 0;
        }
        let best = 0;
        let bestVal = -1;
        ratios.current.forEach((r, i) => {
          if (r > bestVal) {
            bestVal = r;
            best = i;
          }
        });
        setActive(best);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: "-15% 0px -25% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [stops]);

  // Appear once the hero is scrolled past.
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goNext = () => {
    const next = stops[Math.min(active + 1, stops.length - 1)];
    document.getElementById(next.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const stop = stops[active];

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          key="tour-guide"
          initial={{ opacity: 0, y: 50, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.92 }}
          transition={{ type: "spring", stiffness: 170, damping: 22 }}
          className="pointer-events-none fixed bottom-4 left-4 z-40 flex items-end gap-2 sm:bottom-6 sm:left-6"
        >
          {/* Live walking panel */}
          <motion.div
            className="pointer-events-auto relative"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="aurora pointer-events-none absolute -inset-4 -z-10 rounded-full opacity-55" />
            <div
              className="relative overflow-hidden rounded-[1.5rem] p-[1.5px] shadow-[0_22px_60px_rgba(255,95,168,0.28)]"
              style={{
                background:
                  "linear-gradient(150deg, rgba(255,158,203,0.85), rgba(255,95,168,0.4), rgba(201,210,220,0.25), rgba(181,30,102,0.6))",
              }}
            >
              <div className="relative overflow-hidden rounded-[1.4rem] bg-[#100a0e]">
                <video
                  ref={videoRef}
                  src={videoSrc}
                  poster={poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="h-[180px] w-[112px] object-cover sm:h-[224px] sm:w-[140px]"
                  style={{
                    WebkitMaskImage:
                      "radial-gradient(120% 100% at 50% 42%, #000 72%, transparent 100%)",
                    maskImage: "radial-gradient(120% 100% at 50% 42%, #000 72%, transparent 100%)",
                  }}
                />
                {/* hologram scanlines */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-screen"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, rgba(255,158,203,0.5) 0px, rgba(255,158,203,0) 2px, rgba(255,158,203,0) 4px)",
                  }}
                />
                {/* floor glow */}
                <div className="pointer-events-none absolute bottom-0 left-1/2 h-10 w-[80%] -translate-x-1/2 rounded-[999px] bg-[#ff5fa8]/35 blur-xl" />
                {/* LIVE tag */}
                <div className="absolute left-2 top-2 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2 py-0.5 backdrop-blur">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ff5fa8] shadow-[0_0_8px_rgba(255,95,168,0.9)]" />
                  <span className="text-[8px] font-black uppercase tracking-[0.22em] text-[#ff9ecb]">Live</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Speech bubble */}
          <AnimatePresence mode="wait">
            {open && (
              <motion.div
                key={stop.id}
                initial={{ opacity: 0, x: -12, y: 8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: -12, y: 8 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="glass pointer-events-auto relative mb-8 max-w-[210px] rounded-2xl rounded-bl-sm p-3.5 shadow-[0_18px_50px_rgba(0,0,0,0.5)] sm:mb-12 sm:max-w-[250px]"
              >
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Hide guide"
                  className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-[#1b1b21] text-[#e7edf3]/70 ring-1 ring-[#ff5fa8]/30 transition hover:text-white"
                >
                  <X className="h-3 w-3" />
                </button>
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#ff9ecb]">
                  {`Stop ${active + 1} / ${stops.length} · ${stop.label}`}
                </p>
                <p className="mt-1.5 text-[13px] font-medium leading-snug text-[#e7edf3] sm:text-sm">{stop.line}</p>
                <button
                  onClick={goNext}
                  className="mt-2.5 inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#ff5fa8] transition hover:text-[#ff9ecb]"
                >
                  {active < stops.length - 1 ? "Walk me to the next stop" : "Back to top"}
                  <ArrowRight className="h-3 w-3" />
                </button>
                <span className="absolute -bottom-1.5 left-4 h-3 w-3 rotate-45 border-b border-l border-[#ff9ecb]/16 bg-[#121216]" />
              </motion.div>
            )}
          </AnimatePresence>

          {!open && (
            <button
              onClick={() => setOpen(true)}
              className="glass pointer-events-auto mb-10 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff9ecb] transition hover:text-white"
            >
              Ask Vanika
            </button>
          )}
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
