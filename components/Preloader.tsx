"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAME = "VANIKA SHARMA";

function statusFor(p: number) {
  if (p < 28) return "Booting systems";
  if (p < 55) return "Loading projects";
  if (p < 80) return "Calibrating robotics";
  if (p < 100) return "Polishing pixels";
  return "Welcome";
}

type PreloaderProps = {
  videoSrc?: string;
  poster?: string;
};

export default function Preloader({ videoSrc = "/walk.mp4", poster = "/walk-poster.jpg" }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = performance.now();
    const DURATION = 2600;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 520);
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

  const R = 150;
  const C = 2 * Math.PI * R;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#08080a]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* split curtains on exit */}
          <motion.div
            className="absolute inset-y-0 left-0 z-30 w-1/2 bg-[#08080a]"
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 z-30 w-1/2 bg-[#08080a]"
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* ambience */}
          <div className="aurora pointer-events-none absolute h-[64vmin] w-[64vmin] rounded-full opacity-55" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.09]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,210,220,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,210,220,0.35) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage: "radial-gradient(ellipse at center, black, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black, transparent 70%)",
            }}
          />

          <motion.div
            className="relative z-20 flex flex-col items-center"
            exit={{ scale: 1.12, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* stage: rings + walking avatar + progress ring */}
            <div className="relative grid h-[330px] w-[330px] place-items-center">
              <div className="spin-slow pointer-events-none absolute h-[300px] w-[300px] rounded-full border border-[#ff9ecb]/15" />
              <div
                className="pointer-events-none absolute h-[244px] w-[244px] rounded-full border border-[#ff5fa8]/20"
                style={{ animation: "spin-slow 18s linear infinite reverse" }}
              />

              <svg width="330" height="330" viewBox="0 0 330 330" className="absolute -rotate-90">
                <circle cx="165" cy="165" r={R} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
                <motion.circle
                  cx="165"
                  cy="165"
                  r={R}
                  fill="none"
                  stroke="url(#pinkgrad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray={C}
                  style={{ strokeDashoffset: C - (C * progress) / 100 }}
                />
                <defs>
                  <linearGradient id="pinkgrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ff9ecb" />
                    <stop offset="55%" stopColor="#ff5fa8" />
                    <stop offset="100%" stopColor="#b51e66" />
                  </linearGradient>
                </defs>
              </svg>

              {/* the real walking avatar */}
              <motion.div
                className="relative grid h-[250px] w-[160px] place-items-end"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="absolute bottom-3 h-8 w-28 rounded-[999px] bg-[#ff5fa8]/40 blur-xl" />
                <video
                  src={videoSrc}
                  poster={poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-[250px] w-[160px] object-cover"
                  style={{
                    WebkitMaskImage: "radial-gradient(125% 95% at 50% 44%, #000 68%, transparent 100%)",
                    maskImage: "radial-gradient(125% 95% at 50% 44%, #000 68%, transparent 100%)",
                  }}
                />
              </motion.div>
            </div>

            {/* name reveal */}
            <div className="mt-7 flex overflow-hidden">
              {NAME.split("").map((ch, i) => (
                <motion.span
                  key={`${ch}-${i}`}
                  className="text-chrome text-[clamp(1.05rem,3.2vw,1.9rem)] font-black uppercase tracking-[0.34em]"
                  initial={{ y: "120%", opacity: 0 }}
                  animate={{ y: "0%", opacity: ch === " " ? 0 : 1 }}
                  transition={{ delay: 0.3 + i * 0.04, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  {ch === " " ? " " : ch}
                </motion.span>
              ))}
            </div>

            {/* status + percentage */}
            <div className="mt-5 flex w-[clamp(220px,42vw,340px)] items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#ff9ecb]">
                {statusFor(progress)}
              </span>
              <span className="h-px flex-1 bg-[#ff9ecb]/15" />
              <span className="tabular-nums text-[11px] font-black tracking-[0.1em] text-[#f4f7fb]">
                {String(progress).padStart(3, "0")}%
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
