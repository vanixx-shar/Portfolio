import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarClock, Images, Sparkles } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { projects } from "@/lib/projects";

/* eslint-disable @next/next/no-img-element */

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

type ProjectImage = NonNullable<(typeof projects)[number]["images"]>[number];
type ImagePlacement = "hero" | "gallery";

function imageFrameClass(image: ProjectImage, placement: ImagePlacement): string {
  const aspect = image.aspect ?? "photo";
  const aspectClass =
    aspect === "banner"
      ? "aspect-[2.62/1]"
      : aspect === "logo"
        ? "aspect-[2.75/1]"
        : aspect === "portrait"
          ? "aspect-[3/4]"
          : aspect === "wide"
            ? "aspect-[16/9]"
            : placement === "hero"
              ? "aspect-[4/3]"
              : "aspect-[16/9]";
  const widthClass =
    aspect === "portrait"
      ? placement === "hero"
        ? "mx-auto w-full max-w-[380px]"
        : "mx-auto w-full max-w-[520px]"
      : "w-full";
  const surfaceClass =
    image.surface === "light"
      ? "bg-[#f5f1e8]"
      : image.surface === "dark"
        ? "bg-black"
        : "bg-white/[0.03]";

  return [
    "relative overflow-hidden rounded-[1.5rem] border border-[#D7E2EA]/15 shadow-[0_24px_80px_rgba(0,0,0,0.35)]",
    aspectClass,
    widthClass,
    surfaceClass,
  ].join(" ");
}

function imageClass(image: ProjectImage): string {
  return image.fit === "contain"
    ? "h-full w-full object-contain p-2 sm:p-3"
    : "h-full w-full object-cover";
}

function galleryFigureClass(image: ProjectImage, index: number, imageCount: number): string | undefined {
  if (image.aspect === "portrait") {
    return imageCount === 1 ? "md:col-span-2" : undefined;
  }

  if (imageCount === 1 || (index === 0 && imageCount > 2)) {
    return "md:col-span-2";
  }

  return undefined;
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project case study does not exist.",
    };
  }

  return {
    title: project.title,
    description: `${project.subtitle} | ${project.highlight}`,
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const leadImage = project.images?.[0];
  const galleryImages = project.images ?? [];

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#0C0C0C] text-[#D7E2EA]">
      <Navbar />

      <main className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32 sm:px-6 md:pt-40">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/75 transition hover:text-[#D7E2EA]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <header className="mt-8 overflow-hidden rounded-[2rem] border border-[#D7E2EA]/20 bg-white/[0.03] backdrop-blur">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.78fr)] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/15 bg-[#0C0C0C] px-3 py-1 text-xs uppercase tracking-[0.14em] text-[#D7E2EA]/65">
                <CalendarClock className="h-3.5 w-3.5" />
                {project.year}
              </div>

              <h1 className="hero-heading mt-5 text-[clamp(3rem,9vw,92px)] font-black uppercase leading-none">
                {project.title}
              </h1>
              <p className="mt-5 text-base font-light leading-relaxed text-[#D7E2EA]/75 sm:text-lg">
                {project.subtitle}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#D7E2EA]/15 bg-white/[0.03] px-3 py-1 text-xs text-[#D7E2EA]/75"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {leadImage ? (
              <div className={imageFrameClass(leadImage, "hero")}>
                <img
                  src={leadImage.src}
                  alt={leadImage.alt}
                  className={imageClass(leadImage)}
                />
                {leadImage.fit !== "contain" ? (
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/50 via-transparent to-transparent" />
                ) : null}
              </div>
            ) : null}
          </div>

          <div className="border-t border-[#D7E2EA]/10 px-6 py-5 sm:px-8">
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#D7E2EA]/55">
              <Sparkles className="h-3.5 w-3.5" />
              Project Highlight
            </p>
            <p className="mt-2 text-base font-medium leading-relaxed text-[#D7E2EA]">{project.highlight}</p>
          </div>
        </header>

        {galleryImages.length > 0 ? (
          <section className="mt-10">
            <div className="mb-5 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#D7E2EA]/55">
              <Images className="h-4 w-4" />
              Project Gallery
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {galleryImages.map((image, index) => (
                <figure
                  key={image.src}
                  className={galleryFigureClass(image, index, galleryImages.length)}
                >
                  <div className={imageFrameClass(image, "gallery")}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={imageClass(image)}
                    />
                  </div>
                  <figcaption className="mt-3 text-sm leading-relaxed text-[#D7E2EA]/60">{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-10 grid gap-5 lg:grid-cols-3">
          <article className="rounded-2xl border border-[#D7E2EA]/15 bg-white/[0.03] p-6">
            <h2 className="text-xl font-black uppercase text-[#D7E2EA]">Problem</h2>
            <p className="mt-3 text-sm font-light leading-relaxed text-[#D7E2EA]/75">{project.problem}</p>
          </article>

          <article className="rounded-2xl border border-[#D7E2EA]/15 bg-white/[0.03] p-6">
            <h2 className="text-xl font-black uppercase text-[#D7E2EA]">Solution</h2>
            <p className="mt-3 text-sm font-light leading-relaxed text-[#D7E2EA]/75">{project.solution}</p>
          </article>

          <article className="rounded-2xl border border-[#D7E2EA]/15 bg-white/[0.03] p-6">
            <h2 className="text-xl font-black uppercase text-[#D7E2EA]">Impact</h2>
            <ul className="mt-3 space-y-2 text-sm font-light text-[#D7E2EA]/75">
              {project.impact.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#B600A8]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        {project.sections?.length ? (
          <section className="mt-5 grid gap-5 md:grid-cols-2">
            {project.sections.map((section) => (
              <article key={section.title} className="rounded-2xl border border-[#D7E2EA]/15 bg-white/[0.03] p-6">
                <h2 className="text-xl font-black uppercase text-[#D7E2EA]">{section.title}</h2>
                <div className="mt-3 space-y-3 text-sm font-light leading-relaxed text-[#D7E2EA]/75">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </section>
        ) : null}
      </main>

      <Footer />
    </div>
  );
}
