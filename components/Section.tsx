"use client";

import { motion } from "framer-motion";

type SectionProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function Section({ title, subtitle, children }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mt-20"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">{title}</h2>
        {subtitle ? <p className="max-w-2xl text-sm text-zinc-400">{subtitle}</p> : null}
      </div>
      <div className="mt-7">{children}</div>
    </motion.section>
  );
}
