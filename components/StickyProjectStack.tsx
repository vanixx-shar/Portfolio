/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from "react";
import { LiveProjectButton } from "@/components/PortfolioButtons";
import type { Project } from "@/lib/projects";

const projectVisuals = [
  [
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
  ],
  [
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
  ],
  [
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
  ],
];

function StickyProjectCard({
  project,
  index,
  totalCards,
}: {
  project: Project;
  index: number;
  totalCards: number;
}) {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const images = projectVisuals[index % projectVisuals.length];
  const style = {
    "--card-offset": `${index * 28}px`,
    "--card-scale": targetScale,
  } as CSSProperties;

  return (
    <div className="h-[85vh] min-h-[680px]" style={style}>
      <article className="sticky top-[calc(6rem+var(--card-offset))] overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.55)] transition-transform duration-500 hover:scale-[1.01] sm:rounded-[50px] sm:p-6 md:top-[calc(8rem+var(--card-offset))] md:rounded-[60px] md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-8">
            <p className="hero-heading text-[clamp(3rem,10vw,140px)] font-black leading-none">
              {String(index + 1).padStart(2, "0")}
            </p>
            <div className="max-w-2xl pt-2">
              <p className="text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/70 md:text-base">
                {project.tags[0] ?? project.highlight}
              </p>
              <h3 className="mt-2 text-[clamp(1.7rem,4vw,4rem)] font-black uppercase leading-none text-[#D7E2EA]">
                {project.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-[#D7E2EA]/75 sm:text-base">
                {project.subtitle}
              </p>
            </div>
          </div>
          <LiveProjectButton href={`/projects/${project.slug}`} />
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-[0.4fr_0.6fr]">
          <div className="grid gap-3">
            <img
              src={images[0]}
              alt={`Abstract 3D visual for ${project.title}`}
              loading="lazy"
              className="h-[clamp(130px,16vw,230px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            />
            <img
              src={images[1]}
              alt={`Abstract product visual for ${project.title}`}
              loading="lazy"
              className="h-[clamp(160px,22vw,340px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
          <img
            src={images[2]}
            alt={`Large abstract engineering visual for ${project.title}`}
            loading="lazy"
            className="h-[clamp(300px,42vw,585px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
          />
        </div>
      </article>
    </div>
  );
}

export default function StickyProjectStack({ projects }: { projects: Project[] }) {
  const totalCards = projects.length;

  return (
    <div className="mx-auto mt-12 max-w-7xl px-4 sm:mt-16 sm:px-6 md:mt-20 md:px-8">
      {projects.map((project, index) => (
        <StickyProjectCard key={project.slug} project={project} index={index} totalCards={totalCards} />
      ))}
    </div>
  );
}
