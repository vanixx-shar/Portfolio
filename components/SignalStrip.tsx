"use client";

import { motion } from "framer-motion";
import { Gauge, Medal, Rocket } from "lucide-react";

const items = [
  {
    icon: Medal,
    label: "Awards",
    value: "Top 5 / Top 10 / Merit",
  },
  {
    icon: Rocket,
    label: "Build Speed",
    value: "Prototype to validation",
  },
  {
    icon: Gauge,
    label: "Engineering Style",
    value: "Systems-first, impact-driven",
  },
];

export default function SignalStrip() {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-3">
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          className="group rounded-2xl border border-zinc-800 bg-zinc-900/55 p-4"
        >
          <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-zinc-500">
            <item.icon className="h-3.5 w-3.5" />
            {item.label}
          </p>
          <p className="mt-2 text-sm font-medium text-zinc-200 transition group-hover:text-white">{item.value}</p>
        </motion.div>
      ))}
    </div>
  );
}
