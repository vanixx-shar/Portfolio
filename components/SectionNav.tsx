"use client";

import { useEffect, useState } from "react";

type Item = { id: string; label: string };

export default function SectionNav({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const els = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.5, 1] }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="pointer-events-none fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex">
      {items.map((item) => {
        const isActive = active === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="group pointer-events-auto flex items-center gap-2"
          >
            <span
              className={`text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                isActive
                  ? "translate-x-0 text-[#ff9ecb] opacity-100"
                  : "translate-x-1 text-[#e7edf3]/45 opacity-0 group-hover:opacity-100"
              }`}
            >
              {item.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? "h-2.5 w-2.5 bg-[#ff5fa8] shadow-[0_0_14px_rgba(255,95,168,0.9)]"
                  : "h-2 w-2 bg-[#e7edf3]/25 group-hover:bg-[#ff9ecb]/70"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
