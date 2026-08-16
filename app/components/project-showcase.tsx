"use client";

import { ArrowRight, ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { projects, type Project } from "../data/portfolio";

export default function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (activeProject && dialog && !dialog.open) {
      dialog.showModal();
    }
  }, [activeProject]);

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 max-[760px]:grid-cols-1">
        {projects.map((project) => (
          <button
            className="group grid w-full min-w-0 cursor-pointer grid-rows-[auto_1fr] overflow-hidden rounded-[0.7rem] border border-line bg-canvas p-0 text-left font-[inherit] text-[inherit] transition [transition-duration:180ms] hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[0_0.8rem_2rem_rgb(18_18_18_/_7%)]"
            type="button"
            key={project.title}
            aria-label={`View details for ${project.title}`}
            aria-haspopup="dialog"
            onClick={() => setActiveProject(project)}
          >
            <span className="grid place-items-center overflow-hidden border-b border-line bg-[#e5e5e1]">
              <Image
                className="block h-auto w-full"
                src={project.image.src}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
                sizes="(max-width: 760px) calc(100vw - 2rem), 42vw"
                quality={85}
              />
            </span>

            <span className="flex min-h-72 flex-col p-[1.35rem] max-[760px]:min-h-[16.5rem]">
              <span className="flex min-h-[3.4rem] items-center gap-[0.8rem]">
                {project.logo ? (
                  <span
                    className="grid aspect-square w-[2.8rem] flex-[0_0_2.8rem] place-items-center overflow-hidden rounded-full border border-line bg-white"
                    aria-hidden="true"
                  >
                    <Image
                      className="block h-auto w-full"
                      src={project.logo.src}
                      alt={project.logo.alt}
                      width={project.logo.width}
                      height={project.logo.height}
                      sizes="44px"
                    />
                  </span>
                ) : null}
                <span>
                  <span className="block font-mono text-[0.64rem] tracking-[0.075em] text-muted uppercase">
                    {project.category}
                  </span>
                  <span className="mt-[0.35rem] block text-[clamp(1.55rem,2.5vw,2.15rem)] leading-none font-[590] tracking-[-0.035em]">
                    {project.title}
                  </span>
                </span>
              </span>

              <span className="mt-4 block max-w-[31rem] text-[0.84rem] leading-[1.6] text-muted">
                {project.description}
              </span>
              <span
                className="mt-4 flex flex-wrap gap-[0.35rem]"
                aria-label="Project technologies"
              >
                {project.tags.map((tag) => (
                  <span
                    className="rounded-full border border-line px-[0.55rem] py-[0.32rem] font-mono text-[0.53rem] tracking-[0.035em] text-muted uppercase"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </span>
              <span className="mt-auto flex justify-between border-t border-line pt-[1.2rem] font-mono text-[0.58rem] tracking-[0.055em] uppercase transition-colors group-hover:text-accent">
                View details
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </span>
          </button>
        ))}
      </div>

      <dialog
        className="m-auto max-h-[min(90dvh,58rem)] w-[min(calc(100%_-_2rem),64rem)] max-w-none overflow-auto rounded-[0.85rem] border border-line bg-canvas p-0 text-ink shadow-[0_1.5rem_5rem_rgb(18_18_18_/_24%)] backdrop:bg-[rgb(17_17_16_/_62%)] backdrop:backdrop-blur-[4px] open:animate-[dialog-in_240ms_cubic-bezier(0.22,1,0.36,1)_both] max-[760px]:max-h-[94dvh] max-[760px]:w-[calc(100%_-_1rem)] max-[760px]:rounded-[0.7rem]"
        ref={dialogRef}
        aria-labelledby="project-dialog-title"
        aria-describedby="project-dialog-description"
        onClose={() => setActiveProject(null)}
        onCancel={(event) => {
          event.preventDefault();
          closeDialog();
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            closeDialog();
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeDialog();
          }
        }}
      >
        {activeProject ? (
          <div className="min-w-0">
            <header className="sticky top-0 z-[5] flex items-center justify-between gap-6 border-b border-line bg-[rgb(250_250_248_/_94%)] px-[1.35rem] py-[1.2rem] backdrop-blur-[12px] max-[760px]:p-4">
              <div>
                <p className="mb-[0.3rem] font-mono text-[0.58rem] tracking-[0.065em] text-muted uppercase">
                  {activeProject.category}
                </p>
                <h2
                  className="text-[clamp(1.7rem,3vw,2.4rem)] leading-none font-[590] tracking-[-0.045em]"
                  id="project-dialog-title"
                >
                  {activeProject.title}
                </h2>
              </div>
              <button
                className="inline-flex size-10 min-h-10 cursor-pointer items-center justify-center rounded-full border border-line bg-canvas p-0 text-muted transition-colors hover:border-line-strong hover:text-ink"
                type="button"
                aria-label="Close project details"
                onClick={closeDialog}
                autoFocus
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </header>

            <div className="grid place-items-center border-b border-line bg-panel p-[clamp(0.75rem,2.5vw,2rem)]">
              <Image
                className="block h-auto w-full max-w-[54rem]"
                src={activeProject.image.src}
                alt={activeProject.image.alt}
                width={activeProject.image.width}
                height={activeProject.image.height}
                sizes="(max-width: 760px) calc(100vw - 1rem), 54rem"
                quality={85}
              />
            </div>

            {activeProject.gallery.length > 0 ? (
              <div
                className="grid grid-cols-3 items-start gap-3 px-[1.35rem] pt-4 max-[760px]:gap-[0.45rem] max-[760px]:px-4 max-[760px]:pt-3"
                role="group"
                aria-label={`${activeProject.title} screenshots`}
              >
                {activeProject.gallery.map((image) => (
                  <div
                    className="grid place-items-start overflow-hidden rounded-lg border border-line bg-white"
                    key={image.src}
                  >
                    <Image
                      className="block h-auto w-full"
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      sizes="(max-width: 760px) 30vw, 20rem"
                      quality={85}
                    />
                  </div>
                ))}
              </div>
            ) : null}

            <div className="grid grid-cols-[minmax(13rem,0.55fr)_minmax(0,1.45fr)] gap-[clamp(2rem,5vw,4rem)] px-[1.35rem] pt-7 pb-8 max-[760px]:grid-cols-1 max-[760px]:gap-8 max-[760px]:px-4 max-[760px]:pt-6 max-[760px]:pb-7">
              <div>
                <p
                  className="text-[0.88rem] leading-[1.65] text-muted"
                  id="project-dialog-description"
                >
                  {activeProject.description}
                </p>
                <ul
                  className="mt-4 flex list-none flex-wrap gap-[0.35rem] p-0"
                  aria-label="Project technologies"
                >
                  {activeProject.tags.map((tag) => (
                    <li
                      className="rounded-full border border-line px-[0.55rem] py-[0.32rem] font-mono text-[0.53rem] tracking-[0.035em] text-muted uppercase"
                      key={tag}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  className="mt-6 flex min-h-[2.7rem] w-fit items-center gap-4 rounded-[0.35rem] bg-ink px-[0.85rem] text-[0.7rem] font-[620] text-white transition-colors hover:bg-accent"
                  href={activeProject.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {activeProject.linkLabel}
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              </div>

              <div className="grid grid-cols-3 gap-5 max-[760px]:grid-cols-1">
                <section className="border-t border-line pt-[0.8rem]">
                  <h3 className="mb-[0.8rem] text-[0.78rem] font-[650]">
                    Key features
                  </h3>
                  <ul className="grid list-none gap-[0.55rem] p-0 text-[0.7rem] leading-[1.45] text-muted">
                    {activeProject.features.map((feature) => (
                      <li
                        className="before:mr-[0.4rem] before:text-accent before:content-['·']"
                        key={feature}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>
                <section className="border-t border-line pt-[0.8rem]">
                  <h3 className="mb-[0.8rem] text-[0.78rem] font-[650]">
                    Challenges
                  </h3>
                  <ul className="grid list-none gap-[0.55rem] p-0 text-[0.7rem] leading-[1.45] text-muted">
                    {activeProject.challenges.map((challenge) => (
                      <li
                        className="before:mr-[0.4rem] before:text-accent before:content-['·']"
                        key={challenge}
                      >
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </section>
                <section className="border-t border-line pt-[0.8rem]">
                  <h3 className="mb-[0.8rem] text-[0.78rem] font-[650]">
                    What I learned
                  </h3>
                  <ul className="grid list-none gap-[0.55rem] p-0 text-[0.7rem] leading-[1.45] text-muted">
                    {activeProject.learnings.map((learning) => (
                      <li
                        className="before:mr-[0.4rem] before:text-accent before:content-['·']"
                        key={learning}
                      >
                        {learning}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
