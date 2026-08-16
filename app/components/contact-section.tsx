import { ArrowUp, ArrowUpRight, GitBranch, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-line px-6 pt-6 pb-10 max-[760px]:p-4"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto w-full max-w-[74rem] rounded-[0.85rem] bg-ink p-[clamp(2rem,5vw,4rem)] text-white max-[760px]:p-6">
        <div>
          <p className="font-mono text-[0.64rem] tracking-[0.075em] text-[#9caeff] uppercase">
            07 · Contact
          </p>
          <h2
            className="mt-4 max-w-[49rem] text-[clamp(2.8rem,5.8vw,5.7rem)] leading-[0.98] font-[520] tracking-[-0.065em] max-[760px]:text-[clamp(2.55rem,12.5vw,4rem)]"
            id="contact-title"
          >
            Let&apos;s build something reliable and useful.
          </h2>
        </div>

        <a
          className="mt-[clamp(2.5rem,5vw,4rem)] inline-flex w-fit items-center gap-[0.8rem] border-b border-white/35 pb-[0.3rem] text-[clamp(1.1rem,2vw,1.65rem)] tracking-[-0.025em] transition-colors hover:border-[#9caeff] hover:text-[#9caeff]"
          href="mailto:harry.ruiz6@upr.edu"
          aria-label="Email Harry Ruiz at harry dot ruiz six at upr dot edu"
        >
          harry.ruiz6@upr.edu
          <ArrowUpRight className="size-[0.9em]" aria-hidden="true" />
        </a>

        <footer className="mt-[clamp(2.5rem,5vw,4rem)] flex items-center justify-between gap-6 border-t border-white/15 pt-[1.1rem] font-mono text-[0.57rem] tracking-[0.05em] text-white/55 uppercase max-[760px]:flex-col max-[760px]:items-start">
          <p>© 2026 Harry Ruiz</p>
          <nav
            className="flex gap-[1.35rem] max-[760px]:flex-wrap max-[760px]:gap-x-[1.1rem] max-[760px]:gap-y-[0.8rem]"
            aria-label="Contact and social links"
          >
            <a
              className="inline-flex items-center gap-[0.35rem] transition-colors hover:text-white"
              href="https://github.com/harryto1"
              target="_blank"
              rel="noreferrer"
            >
              <GitBranch className="size-[0.72rem]" aria-hidden="true" /> GitHub
            </a>
            <a
              className="inline-flex items-center gap-[0.35rem] transition-colors hover:text-white"
              href="tel:+17873859381"
            >
              <Phone className="size-[0.72rem]" aria-hidden="true" /> +1 (787)
              385-9381
            </a>
            <a
              className="inline-flex items-center gap-[0.35rem] transition-colors hover:text-white"
              href="#presentation"
            >
              <ArrowUp className="size-[0.72rem]" aria-hidden="true" /> Back to
              top
            </a>
          </nav>
        </footer>
      </div>
    </section>
  );
}
