"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

type ProjectImage = NonNullable<Project["images"]>[number];

function cardImageFrameClass(image: ProjectImage): string {
  const aspect = image.aspect ?? "photo";
  const aspectClass =
    aspect === "banner"
      ? "aspect-[2.1/1]"
      : aspect === "logo"
        ? "aspect-[2.35/1]"
        : aspect === "portrait"
          ? "aspect-[4/3]"
          : "aspect-[16/10]";
  const surfaceClass =
    image.surface === "light"
      ? "bg-[#f5f1e8]"
      : image.surface === "dark"
        ? "bg-black"
        : "bg-white/[0.04]";

  return [
    "shine-surface relative mb-5 overflow-hidden rounded-[1.35rem] border border-[#D7E2EA]/18",
    aspectClass,
    surfaceClass,
  ].join(" ");
}

function cardImageClass(image: ProjectImage): string {
  return image.fit === "contain"
    ? "h-full w-full object-contain p-2 transition duration-500 group-hover:scale-[1.02]"
    : "h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]";
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const leadImage = project.images?.[0];
  const [style, setStyle] = useState<CSSProperties>({
    "--gx": "50%",
    "--gy": "50%",
    "--rx": "0deg",
    "--ry": "0deg",
  } as CSSProperties);

  return (
    <div className="[perspective:1000px]">
      <article
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          const px = (event.clientX - rect.left) / rect.width;
          const py = (event.clientY - rect.top) / rect.height;

          setStyle({
            "--gx": `${px * 100}%`,
            "--gy": `${py * 100}%`,
            "--rx": `${(0.5 - py) * 10}deg`,
            "--ry": `${(px - 0.5) * 12}deg`,
          } as CSSProperties);
        }}
        onMouseLeave={() => {
          setStyle({
            "--gx": "50%",
            "--gy": "50%",
            "--rx": "0deg",
            "--ry": "0deg",
          } as CSSProperties);
        }}
        style={style}
        className="metal-card project-card-tilt group h-full overflow-hidden rounded-[2rem] p-4 sm:p-5"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(circle at var(--gx) var(--gy), rgba(255,95,168,0.26), transparent 42%)",
          }}
        />

        <div className="relative" style={{ transform: "translateZ(40px)" }}>
          {leadImage ? (
            <div className={cardImageFrameClass(leadImage)}>
              <img
                src={leadImage.src}
                alt={leadImage.alt}
                className={cardImageClass(leadImage)}
              />
              {leadImage.fit !== "contain" ? (
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/45 via-transparent to-transparent" />
              ) : null}
            </div>
          ) : null}

          <p className="text-xs uppercase tracking-[0.18em] text-[#ff9ecb]/62">{project.year}</p>
          <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-[#D7E2EA]">{project.title}</h3>
          <p className="mt-3 text-sm font-light leading-relaxed text-[#D7E2EA]/75">{project.subtitle}</p>
          <p className="mt-4 text-sm font-medium text-[#D7E2EA]">{project.highlight}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="metal-chip rounded-full px-3 py-1 text-xs text-[#F5F7FA]/78"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition hover:opacity-70"
          >
            View case study
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    </div>
  );
}
