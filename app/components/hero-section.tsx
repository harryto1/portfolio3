import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="presentation"
      className="px-6 pt-[clamp(4.5rem,8vw,7rem)] pb-[clamp(4rem,7vw,6rem)] max-[760px]:px-4 max-[760px]:pt-14 max-[760px]:pb-12"
      aria-labelledby="introduction-title"
    >
      <div className="mx-auto grid max-w-[74rem] grid-cols-[minmax(0,1.25fr)_minmax(16rem,0.6fr)] items-center gap-[clamp(3rem,8vw,8rem)] max-[1000px]:grid-cols-[minmax(0,1.15fr)_minmax(14rem,0.55fr)] max-[1000px]:gap-12 max-[760px]:grid-cols-1 max-[760px]:gap-8">
        <div className="max-w-[45rem]">
          <p className="animate-[fade-up_500ms_80ms_both] font-mono text-[0.64rem] tracking-[0.075em] text-accent uppercase">
            Third-year Software Engineering Student
          </p>
          <h1
            className="mt-[1.2rem] max-w-[43rem] animate-[fade-up_600ms_140ms_both] text-[clamp(4rem,7.2vw,6.8rem)] leading-[0.92] font-[560] tracking-[-0.075em] text-balance max-[760px]:text-[clamp(3.6rem,17vw,5.5rem)] max-[440px]:text-[clamp(3.25rem,16vw,4.25rem)]"
            id="introduction-title"
          >
            I&apos;m Harry Ruiz.
          </h1>
          <p className="mt-[1.8rem] max-w-[34rem] animate-[fade-up_600ms_200ms_both] text-[clamp(1.05rem,1.5vw,1.25rem)] leading-[1.55] tracking-[-0.02em] text-[#484846] max-[760px]:mt-[1.35rem]">
            A software engineering student passionate about building innovative
            solutions and learning new technologies.
          </p>

          <div className="mt-8 flex animate-[fade-up_600ms_260ms_both] items-center gap-[1.4rem] max-[760px]:mt-6 max-[440px]:flex-col max-[440px]:items-start max-[440px]:gap-4">
            <a
              className="inline-flex min-h-[2.9rem] items-center gap-[1.2rem] rounded-[0.35rem] bg-ink px-4 text-[0.76rem] font-[620] text-white transition hover:-translate-y-px hover:bg-accent"
              href="#projects"
            >
              See my work <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              className="border-b border-line-strong pb-[0.2rem] text-[0.76rem] text-muted transition-colors hover:text-ink"
              href="mailto:harry.ruiz6@upr.edu"
            >
              Contact me
            </a>
          </div>

          <dl className="mt-10 grid max-w-[35rem] animate-[fade-up_600ms_320ms_both] grid-cols-2 gap-5 border-t border-line pt-[1.15rem] max-[760px]:mt-8 max-[440px]:grid-cols-1">
            <div className="grid gap-[0.35rem]">
              <dt className="font-mono text-[0.58rem] tracking-[0.07em] text-muted uppercase">
                Currently
              </dt>
              <dd className="text-[0.76rem]">B.Sc. Software Engineering</dd>
            </div>
            <div className="grid gap-[0.35rem]">
              <dt className="font-mono text-[0.58rem] tracking-[0.07em] text-muted uppercase">
                Focus
              </dt>
              <dd className="text-[0.76rem]">AI research &amp; engineering</dd>
            </div>
          </dl>
        </div>

        <figure className="w-full max-w-[22rem] justify-self-end animate-[fade-in_700ms_180ms_both] max-[760px]:max-w-[18rem] max-[760px]:justify-self-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[0.7rem] border border-line bg-panel">
            <Image
              src="/harry.jpg"
              alt="Portrait of Harry Ruiz"
              fill
              preload
              sizes="(max-width: 760px) 18rem, (max-width: 1000px) 30vw, 22rem"
              className="object-cover object-[center_24%] saturate-[0.85]"
            />
          </div>
          <figcaption className="mt-3 flex justify-between font-mono text-[0.58rem] tracking-[0.08em] text-muted uppercase">
            Mayagüez, Puerto Rico <span>2026</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
