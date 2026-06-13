"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAME = "VANIKA SHARMA";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  // Lock scroll while the intro plays.
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = performance.now();
    const DURATION = 2200;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 380);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (done) {
      document.body.style.overflow = "";
      window.scrollTo({ top: 0 });
    }
  }, [done]);

  const R = 132;
  const C = 2 * Math.PI * R;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#08080a]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* curtain panels that split on exit */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-[#08080a]"
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-[#08080a]"
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* pulsing aurora */}
          <div className="aurora pointer-events-none absolute h-[60vmin] w-[60vmin] rounded-full opacity-60" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.1]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,210,220,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,210,220,0.35) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage: "radial-gradient(ellipse at center, black, transparent 72%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black, transparent 72%)",
            }}
          />

          <div className="relative flex flex-col items-center">
            {/* progress ring + monogram */}
            <div className="relative grid place-items-center">
              <svg width="300" height="300" viewBox="0 0 300 300" className="-rotate-90">
                <circle cx="150" cy="150" r={R} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
                <motion.circle
                  cx="150"
                  cy="150"
                  r={R}
                  fill="none"
                  stroke="url(#pinkgrad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={C}
                  style={{ strokeDashoffset: C - (C * progress) / 100 }}
                />
                <defs>
                  <linearGradient id="pinkgrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ff9ecb" />
                    <stop offset="60%" stopColor="#ff5fa8" />
                    <stop offset="100%" stopColor="#b51e66" />
                  </linearGradient>
                </defs>
              </svg>

              <motion.div
                className="absolute grid h-[120px] w-[120px] place-items-center"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="hero-heading text-6xl font-black tracking-tight">VS</span>
              </motion.div>
            </div>

            {/* name reveal */}
            <div className="mt-9 flex overflow-hidden">
              {NAME.split("").map((ch, i) => (
                <motion.span
                  key={`${ch}-${i}`}
                  className="text-chrome text-[clamp(1.1rem,3.4vw,2rem)] font-black uppercase tracking-[0.32em]"
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: ch === " " ? 0 : 1 }}
                  transition={{ delay: 0.35 + i * 0.045, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  {ch === " " ? " " : ch}
                </motion.span>
              ))}
            </div>

            <motion.div
              className="mt-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.4em] text-[#ff9ecb]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <span className="h-px w-8 bg-[#ff5fa8]/60" />
              {progress < 100 ? `Loading ${progress}%` : "Welcome"}
              <span className="h-px w-8 bg-[#ff5fa8]/60" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
