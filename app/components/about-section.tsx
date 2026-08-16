import SectionHeading from "./section-heading";

const highlights = [
  { value: "2+", label: "Years coding & developing" },
  { value: "10+", label: "Web & mobile projects" },
  { value: "5+", label: "Languages & frameworks" },
] as const;

export default function AboutSection() {
  return (
    <section id="about" className="border-t border-line" aria-labelledby="about-title">
      <div className="mx-auto grid w-[calc(100%_-_3rem)] max-w-[74rem] grid-cols-[9rem_minmax(0,1fr)] gap-[clamp(2.5rem,6vw,6rem)] py-[clamp(3.75rem,6vw,5.5rem)] max-[1000px]:grid-cols-[7rem_minmax(0,1fr)] max-[1000px]:gap-10 max-[760px]:w-[calc(100%_-_2rem)] max-[760px]:grid-cols-1 max-[760px]:gap-8 max-[760px]:py-13">
        <SectionHeading id="about-title" index="02">
          About
        </SectionHeading>

        <div className="min-w-0">
          <div className="grid grid-cols-[minmax(0,1.35fr)_minmax(15rem,0.65fr)] items-start gap-[clamp(2rem,5vw,5rem)] max-[1000px]:grid-cols-1 max-[1000px]:gap-6">
            <p className="m-0 max-w-[43rem] text-[clamp(2rem,3.6vw,3.4rem)] leading-[1.08] font-[520] tracking-[-0.055em] max-[760px]:text-[clamp(1.9rem,9vw,2.8rem)]">
              I&apos;m driven by coding, problem-solving, mathematics, and the
              science behind intelligent systems.
            </p>
            <p className="m-0 text-[0.9rem] leading-[1.7] text-muted max-[1000px]:max-w-[38rem]">
              I am a third-year Software Engineering student at the University
              of Puerto Rico — Mayagüez, working toward AI research and
              engineering while strengthening my foundation in data structures,
              new languages, and frameworks.
            </p>
          </div>

          <dl
            className="mt-[clamp(2.75rem,5vw,4rem)] grid grid-cols-3 border-y border-line p-0 max-[440px]:grid-cols-1"
            aria-label="Student highlights"
          >
            {highlights.map((highlight, index) => (
              <div
                className={`py-5 max-[760px]:py-4 max-[440px]:grid max-[440px]:grid-cols-[3.5rem_minmax(0,1fr)] max-[440px]:items-center max-[440px]:gap-4 ${
                  index > 0
                    ? "border-l border-line pl-6 max-[760px]:pl-[0.8rem] max-[440px]:border-t max-[440px]:border-l-0 max-[440px]:pl-0"
                    : ""
                }`}
                key={highlight.label}
              >
                <dt className="mb-[0.3rem] text-[2.3rem] leading-none font-[540] tracking-[-0.055em] max-[760px]:text-[1.8rem] max-[440px]:m-0">
                  {highlight.value}
                </dt>
                <dd className="m-0 max-w-40 font-mono text-[0.57rem] leading-[1.45] tracking-[0.05em] text-muted uppercase max-[760px]:text-[0.48rem] max-[440px]:max-w-none max-[440px]:text-[0.55rem]">
                  {highlight.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
