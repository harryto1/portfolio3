import ProjectShowcase from "./project-showcase";
import SectionHeading from "./section-heading";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-t border-line bg-panel"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto grid w-[calc(100%_-_3rem)] max-w-[74rem] grid-cols-[9rem_minmax(0,1fr)] gap-[clamp(2.5rem,6vw,6rem)] py-[clamp(3.75rem,6vw,5.5rem)] max-[1000px]:grid-cols-[7rem_minmax(0,1fr)] max-[1000px]:gap-10 max-[760px]:w-[calc(100%_-_2rem)] max-[760px]:grid-cols-1 max-[760px]:gap-8 max-[760px]:py-[3.25rem]">
        <SectionHeading id="projects-title" index="05">
          Projects
        </SectionHeading>

        <div className="min-w-0">
          <ProjectShowcase />
        </div>
      </div>
    </section>
  );
}
