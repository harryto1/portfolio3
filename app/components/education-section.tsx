import { ExternalLink } from "lucide-react";
import Image from "next/image";

import { education } from "../data/portfolio";
import SectionHeading from "./section-heading";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="border-t border-line"
      aria-labelledby="education-title"
    >
      <div className="mx-auto grid w-[calc(100%-3rem)] max-w-296 grid-cols-[9rem_minmax(0,1fr)] gap-[clamp(2.5rem,6vw,6rem)] py-[clamp(3.75rem,6vw,5.5rem)] max-[1000px]:grid-cols-[7rem_minmax(0,1fr)] max-[1000px]:gap-10 max-[760px]:w-[calc(100%-2rem)] max-[760px]:grid-cols-1 max-[760px]:gap-8 max-[760px]:py-13">
        <SectionHeading id="education-title" index="04">
          Education
        </SectionHeading>

        <div className="min-w-0">
          {education.map((item) => (
            <article
              className="grid grid-cols-[5rem_minmax(0,1fr)] items-center gap-[clamp(1.5rem,4vw,3rem)] rounded-[0.65rem] border border-line bg-panel p-[clamp(1.5rem,3vw,2.25rem)] max-[760px]:grid-cols-[3.75rem_minmax(0,1fr)] max-[760px]:gap-4 max-[440px]:grid-cols-1"
              key={item.degree}
            >
              <div className="relative aspect-square w-18 max-[760px]:self-start max-[760px]:w-15 max-[440px]:w-14">
                <Image
                  src="/logo-uprm.png"
                  alt="University of Puerto Rico at Mayagüez seal"
                  fill
                  sizes="72px"
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-mono text-[0.64rem] leading-6 tracking-[0.075em] text-muted uppercase">
                  {item.period}
                </p>
                <h3 className="mt-[0.55rem] max-w-lg text-[clamp(1.45rem,2.5vw,2.25rem)] leading-[1.1] font-[590] tracking-[-0.035em]">
                  {item.degree}
                </h3>
                <a
                  className="mt-[0.35rem] inline-flex items-center gap-[0.35rem] text-[0.76rem] text-accent underline-offset-[0.2em] hover:underline"
                  href={item.schoolUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.school}
                  <ExternalLink className="size-[0.78rem]" aria-hidden="true" />
                </a>
                <p className="mt-4 max-w-164 text-[0.84rem] leading-[1.6] text-muted">
                  {item.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
