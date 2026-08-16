import { skillGroups } from "../data/portfolio";
import SectionHeading from "./section-heading";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-t border-line"
      aria-labelledby="skills-title"
    >
      <div className="mx-auto grid w-[calc(100%_-_3rem)] max-w-[74rem] grid-cols-[9rem_minmax(0,1fr)] gap-[clamp(2.5rem,6vw,6rem)] py-[clamp(3.75rem,6vw,5.5rem)] max-[1000px]:grid-cols-[7rem_minmax(0,1fr)] max-[1000px]:gap-10 max-[760px]:w-[calc(100%_-_2rem)] max-[760px]:grid-cols-1 max-[760px]:gap-8 max-[760px]:py-[3.25rem]">
        <SectionHeading id="skills-title" index="06">
          Skills
        </SectionHeading>

        <div className="grid min-w-0 grid-cols-4 border-y border-line max-[1000px]:grid-cols-2 max-[440px]:grid-cols-1">
          {skillGroups.map((group, index) => (
            <section
              className={`p-5 ${
                index === 1
                  ? "border-l border-line max-[440px]:border-t max-[440px]:border-l-0"
                  : index === 2
                    ? "border-l border-line max-[1000px]:border-t max-[1000px]:border-l-0"
                    : index === 3
                      ? "border-l border-line max-[1000px]:border-t max-[440px]:border-l-0"
                      : ""
              }`}
              key={group.title}
            >
              <h3 className="mb-6 text-[0.95rem] font-[590] tracking-[-0.02em]">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-[0.35rem]">
                {group.items.map((item) => (
                  <li
                    className="rounded-full border border-line px-[0.55rem] py-[0.32rem] font-mono text-[0.53rem] tracking-[0.06em] text-muted uppercase"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
