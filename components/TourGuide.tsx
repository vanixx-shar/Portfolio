"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp, X } from "lucide-react";

export type TourStop = {
  id: string;
  label: string;
  line: string;
};

type TourGuideProps = {
  src: string;
  stops: TourStop[];
};

export default function TourGuide({ src, stops }: TourGuideProps) {
  const [active, setActive] = useState(0);
  const [docked, setDocked] = useState(false);
  const [open, setOpen] = useState(true);
  const ratios = useRef<number[]>(stops.map(() => 0));

  // Track which stop is most in view.
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
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: "-20% 0px -30% 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [stops]);

  // Dock the guide once the hero is scrolled past.
  useEffect(() => {
    const onScroll = () => setDocked(window.scrollY > window.innerHeight * 0.7);
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
      {docked && (
        <motion.aside
          key="tour-guide"
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 60, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 180, damping: 22 }}
          className="pointer-events-none fixed bottom-3 left-3 z-40 flex items-end gap-2 sm:bottom-5 sm:left-5"
        >
          {/* Avatar */}
          <div className="pointer-events-auto relative">
            <div className="aurora absolute -inset-3 -z-10 rounded-full opacity-60" />
            <motion.img
              src={src}
              alt="Vanika, your guide"
              className="bob h-[150px] w-auto select-none object-contain drop-shadow-[0_18px_38px_rgba(255,95,168,0.32)] sm:h-[210px]"
              draggable={false}
              animate={{ scaleX: active % 2 === 0 ? 1 : -1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Speech bubble */}
          <AnimatePresence mode="wait">
            {open && (
              <motion.div
                key={stop.id}
                initial={{ opacity: 0, x: -12, y: 8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: -12, y: 8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="glass pointer-events-auto relative mb-6 max-w-[210px] rounded-2xl rounded-bl-sm p-3 shadow-[0_18px_50px_rgba(0,0,0,0.5)] sm:mb-10 sm:max-w-[260px] sm:p-4"
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
                <p className="mt-1.5 text-[13px] font-medium leading-snug text-[#e7edf3] sm:text-sm">
                  {stop.line}
                </p>
                <button
                  onClick={goNext}
                  className="mt-2.5 inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#ff5fa8] transition hover:text-[#ff9ecb]"
                >
                  <ChevronUp className="h-3 w-3 rotate-180" />
                  {active < stops.length - 1 ? "Next stop" : "Back to top"}
                </button>
                <span className="absolute -bottom-1.5 left-3 h-3 w-3 rotate-45 border-b border-l border-[#ff9ecb]/16 bg-[#121216]" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Re-open tab when collapsed */}
          {!open && (
            <button
              onClick={() => setOpen(true)}
              className="glass pointer-events-auto mb-8 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff9ecb] transition hover:text-white"
            >
              Ask Vanika
            </button>
          )}
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
