import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-tawny-ten-7fv0d2vi2z.vercel.app"),
  title: {
    default: `${profile.name} -- Robotics + Product Engineering`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Dark 3D-inspired portfolio for Vanika Sharma, featuring robotics, CAD, AI-driven prototypes, product engineering, and technical leadership.",
  openGraph: {
    title: `${profile.name} -- Robotics + Product Engineering`,
    description:
      "Robotics, product engineering, autonomy, CAD, leadership, and award-winning technical projects.",
    type: "website",
    url: "https://portfolio-tawny-ten-7fv0d2vi2z.vercel.app",
    siteName: `${profile.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} -- Robotics + Product Engineering`,
    description:
      "Robotics, product development, autonomy, and leadership from Vanika Sharma.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
