"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight canvas backdrop: drifting metallic-pink motes + a faint
 * parallax grid. Sits fixed behind all content. Pauses for reduced motion.
 */
export default function MetalField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    setSize();

    const COUNT = Math.min(70, Math.floor((width * height) / 26000));
    const palette = ["255,95,168", "255,158,203", "201,210,220"];
    type Mote = {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      a: number;
      c: string;
    };
    const motes: Mote[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2.2 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      a: Math.random() * 0.5 + 0.15,
      c: palette[Math.floor(Math.random() * palette.length)],
    }));

    const mouse = { x: width / 2, y: height / 2, tx: width / 2, ty: height / 2 };
    const onMove = (e: MouseEvent) => {
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", setSize);

    let raf = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      const px = (mouse.x / width - 0.5) * 26;
      const py = (mouse.y / height - 0.5) * 26;

      for (const m of motes) {
        m.x += m.vx;
        m.y += m.vy;
        if (m.x < -10) m.x = width + 10;
        if (m.x > width + 10) m.x = -10;
        if (m.y < -10) m.y = height + 10;
        if (m.y > height + 10) m.y = -10;

        const gx = m.x + px * (m.r / 2.6);
        const gy = m.y + py * (m.r / 2.6);
        const glow = ctx.createRadialGradient(gx, gy, 0, gx, gy, m.r * 6);
        glow.addColorStop(0, `rgba(${m.c},${m.a})`);
        glow.addColorStop(1, `rgba(${m.c},0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(gx, gy, m.r * 6, 0, Math.PI * 2);
        ctx.fill();
      }

      // faint connecting filaments for nearby motes
      for (let i = 0; i < motes.length; i++) {
        for (let j = i + 1; j < motes.length; j++) {
          const a = motes[i];
          const b = motes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) {
            ctx.strokeStyle = `rgba(255,95,168,${(1 - d / 130) * 0.08})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      if (!reduce) raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,95,168,0.07),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(20,20,24,0.9),rgba(8,8,10,1))]" />
      <canvas ref={canvasRef} className="absolute inset-0 opacity-80" />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,210,220,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(201,210,220,0.14) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at center, black, transparent 78%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black, transparent 78%)",
        }}
      />
    </div>
  );
}
