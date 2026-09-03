import { ExternalLink } from "lucide-react";

import { experiences } from "../data/portfolio";
import SectionHeading from "./section-heading";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-t border-line"
      aria-labelledby="experience-title"
    >
      <div className="mx-auto grid w-[calc(100%-3rem)] max-w-296 grid-cols-[9rem_minmax(0,1fr)] gap-[clamp(2.5rem,6vw,6rem)] py-[clamp(3.75rem,6vw,5.5rem)] max-[1000px]:grid-cols-[7rem_minmax(0,1fr)] max-[1000px]:gap-10 max-[760px]:w-[calc(100%-2rem)] max-[760px]:grid-cols-1 max-[760px]:gap-8 max-[760px]:py-13">
        <SectionHeading id="experience-title" index="03">
          Experience
        </SectionHeading>

        <div className="min-w-0">
          {experiences.map((experience) => (
            <article
              className="grid grid-cols-[7rem_minmax(10rem,0.8fr)_minmax(16rem,1.2fr)] gap-[clamp(1.5rem,4vw,3.5rem)] border-y border-line py-[1.6rem] max-[1000px]:grid-cols-[6.5rem_minmax(10rem,0.8fr)_minmax(14rem,1.2fr)] max-[1000px]:gap-6 max-[760px]:grid-cols-1 max-[760px]:gap-4"
              key={experience.company}
            >
              <p className="mt-1 font-mono text-[0.64rem] leading-6 tracking-[0.075em] text-muted uppercase">
                {experience.period}
              </p>
              <div>
                <h3 className="text-xl font-[590] tracking-[-0.035em]">
                  {experience.role}
                </h3>
                <a
                  className="mt-[0.35rem] inline-flex items-center gap-[0.35rem] text-[0.76rem] text-accent underline-offset-[0.2em] hover:underline"
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {experience.company}
                  <ExternalLink className="size-[0.78rem]" aria-hidden="true" />
                </a>
              </div>
              <div>
                <p className="max-w-136 text-[0.86rem] leading-[1.65] text-muted">
                  {experience.description}
                </p>
                <ul
                  className="mt-4 flex flex-wrap gap-[0.35rem]"
                  aria-label="Key skills"
                >
                  {experience.skills.map((skill) => (
                    <li
                      className="rounded-full border border-line px-[0.55rem] py-[0.32rem] font-mono text-[0.53rem] tracking-[0.035em] text-muted uppercase"
                      key={skill}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
