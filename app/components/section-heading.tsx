import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  index: string;
  children: ReactNode;
};

export default function SectionHeading({
  id,
  index,
  children,
}: SectionHeadingProps) {
  return (
    <header className="self-start max-[760px]:flex max-[760px]:items-baseline max-[760px]:justify-between max-[760px]:border-b max-[760px]:border-line max-[760px]:pb-[0.9rem]">
      <p
        className="mb-[0.65rem] font-mono text-[0.64rem] tracking-[0.075em] text-accent uppercase max-[760px]:m-0"
        aria-hidden="true"
      >
        {index}
      </p>
      <h2 className="m-0 text-[1.15rem] font-[610] tracking-[-0.035em]" id={id}>
        {children}
      </h2>
    </header>
  );
}
