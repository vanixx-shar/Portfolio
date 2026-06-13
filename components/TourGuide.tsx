"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, X } from "lucide-react";

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
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(true);
  const [facing, setFacing] = useState(1);

  const ratios = useRef<number[]>(stops.map(() => 0));
  const facingRef = useRef(1);
  const lastPos = useRef(8);

  // Walk path: she strolls back and forth across the bottom as you scroll.
  const { scrollYProgress } = useScroll();
  const target = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [5, 52, 16, 58, 22, 44]);
  const pos = useSpring(target, { stiffness: 38, damping: 18, mass: 0.7 });
  const left = useMotionTemplate`${pos}%`;

  // Flip her to face the direction she's walking.
  useMotionValueEvent(pos, "change", (v) => {
    const moving = Math.abs(v - lastPos.current);
    if (moving > 0.08) {
      const dir = v >= lastPos.current ? 1 : -1;
      if (dir !== facingRef.current) {
        facingRef.current = dir;
        setFacing(dir);
      }
    }
    lastPos.current = v;
  });

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
        <motion.div
          key="tour-guide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="pointer-events-none fixed bottom-0 left-0 z-40 hidden h-0 w-full sm:block"
        >
          <motion.div style={{ left }} className="absolute bottom-3 will-change-transform">
            {/* Speech bubble — sits above her and walks along */}
            <AnimatePresence mode="wait">
              {open && (
                <motion.div
                  key={stop.id}
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="glass pointer-events-auto absolute bottom-full left-0 mb-2 w-[230px] rounded-2xl rounded-bl-sm p-3.5 shadow-[0_18px_50px_rgba(0,0,0,0.5)]"
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
                  <p className="mt-1.5 text-[13px] font-medium leading-snug text-[#e7edf3]">{stop.line}</p>
                  <button
                    onClick={goNext}
                    className="mt-2.5 inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#ff5fa8] transition hover:text-[#ff9ecb]"
                  >
                    {active < stops.length - 1 ? "Walk me to the next stop" : "Back to top"}
                    <ArrowRight className="h-3 w-3" />
                  </button>
                  <span className="absolute -bottom-1.5 left-6 h-3 w-3 rotate-45 border-b border-l border-[#ff9ecb]/16 bg-[#121216]" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Re-open tab when collapsed */}
            {!open && (
              <button
                onClick={() => setOpen(true)}
                className="glass pointer-events-auto absolute bottom-full left-0 mb-2 whitespace-nowrap rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff9ecb] transition hover:text-white"
              >
                Ask Vanika
              </button>
            )}

            {/* Walking avatar: facing flip + two-step stride cycle */}
            <div className="relative">
              <div className="aurora pointer-events-none absolute -inset-4 -z-10 rounded-full opacity-50" />
              <motion.div animate={{ scaleX: facing }} transition={{ duration: 0.4 }}>
                <motion.img
                  src={src}
                  alt="Vanika, your guide"
                  draggable={false}
                  animate={{
                    y: [0, -7, 0, -7, 0],
                    rotate: [-2.4, 0, 2.4, 0, -2.4],
                    x: [0, -3, 0, 3, 0],
                  }}
                  transition={{
                    duration: 0.92,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.25, 0.5, 0.75, 1],
                  }}
                  className="h-[160px] w-auto select-none object-contain drop-shadow-[0_16px_34px_rgba(255,95,168,0.34)] md:h-[200px]"
                />
              </motion.div>
              {/* ground shadow compresses on each footfall */}
              <motion.span
                className="absolute -bottom-1 left-1/2 h-2.5 w-20 -translate-x-1/2 rounded-[999px] bg-black/60 blur-md"
                animate={{ scaleX: [1, 0.74, 1, 0.74, 1], opacity: [0.5, 0.28, 0.5, 0.28, 0.5] }}
                transition={{ duration: 0.92, repeat: Infinity, ease: "easeInOut", times: [0, 0.25, 0.5, 0.75, 1] }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
