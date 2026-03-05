import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vanika Sharma — Robotics & Product Engineering",
  description:
    "Portfolio of Vanika Sharma (SUTD) — robotics, product engineering, leadership, and award-winning innovation.",
  openGraph: {
    title: "Vanika Sharma — Robotics & Product Engineering",
    description:
      "Robotics, product engineering, leadership, awards, and projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}