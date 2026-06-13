"use client";

import { useEffect, useRef, useState } from "react";
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

export default function Preloader({ videoSrc = "/wave.mp4", poster = "/wave-poster.jpg" }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Force autoplay (browsers can ignore the muted attr after hydration).
  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = performance.now();
    const DURATION = 2800;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 600);
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

          {/* ambience — always visible, no JS gate */}
          <div className="aurora pointer-events-none absolute h-[70vmin] w-[70vmin] rounded-full opacity-70" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.1]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,210,220,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,210,220,0.35) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage: "radial-gradient(ellipse at center, black, transparent 68%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black, transparent 68%)",
            }}
          />

          <div className="relative z-20 flex flex-col items-center">
            {/* stage: rings + waving avatar + progress ring (visible on first paint) */}
            <div className="relative grid h-[330px] w-[330px] place-items-center">
              <div className="spin-slow pointer-events-none absolute h-[300px] w-[300px] rounded-full border border-[#ff9ecb]/20" />
              <div
                className="pointer-events-none absolute h-[244px] w-[244px] rounded-full border border-[#ff5fa8]/25"
                style={{ animation: "spin-slow 18s linear infinite reverse" }}
              />

              {/* the real avatar (poster shows instantly, then plays) */}
              <div className="relative grid h-[252px] w-[180px] place-items-end overflow-hidden">
                <div className="absolute bottom-3 left-1/2 h-9 w-28 -translate-x-1/2 rounded-[999px] bg-[#ff5fa8]/45 blur-xl" />
                <video
                  ref={videoRef}
                  src={videoSrc}
                  poster={poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="h-[252px] w-[180px] object-cover"
                  style={{
                    WebkitMaskImage: "radial-gradient(130% 96% at 50% 44%, #000 66%, transparent 100%)",
                    maskImage: "radial-gradient(130% 96% at 50% 44%, #000 66%, transparent 100%)",
                  }}
                />
              </div>

              <svg width="330" height="330" viewBox="0 0 330 330" className="absolute -rotate-90">
                <circle cx="165" cy="165" r={R} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="2" />
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
            </div>

            {/* name reveal — CSS-driven so it shows without waiting on hydration */}
            <div className="mt-7 flex">
              {NAME.split("").map((ch, i) => (
                <span
                  key={`${ch}-${i}`}
                  className="animated-char text-chrome text-[clamp(1.05rem,3.2vw,1.9rem)] font-black uppercase tracking-[0.34em]"
                  style={{ ["--char-delay" as string]: `${0.15 + i * 0.05}s` }}
                >
                  {ch === " " ? " " : ch}
                </span>
              ))}
            </div>

            {/* status + percentage */}
            <div className="mt-5 flex w-[clamp(220px,42vw,340px)] items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#ff9ecb]">
                {statusFor(progress)}
              </span>
              <span className="h-px flex-1 bg-[#ff9ecb]/20" />
              <span className="tabular-nums text-[11px] font-black tracking-[0.1em] text-[#f4f7fb]">
                {String(progress).padStart(3, "0")}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
