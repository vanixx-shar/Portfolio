import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  metadataBase: new URL("https://vanika-portfolio.example"),
  title: {
    default: `${profile.name} | Robotics Portfolio`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Elite robotics portfolio of Vanika Sharma featuring humanoids, autonomy, CAD-driven engineering, and award-winning product development.",
  openGraph: {
    title: `${profile.name} | Robotics Portfolio`,
    description:
      "Humanoids, autonomy, CAD, leadership, and award-winning engineering projects.",
    type: "website",
    url: "https://vanika-portfolio.example",
    siteName: `${profile.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Robotics Portfolio`,
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
