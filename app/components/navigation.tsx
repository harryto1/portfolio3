"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";

const navigationItems = [
  { id: "presentation", label: "Intro" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("presentation");
  const frameRef = useRef<number | null>(null);
  const navigationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = navigationItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const updateActiveSection = () => {
      frameRef.current = null;

      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 4
      ) {
        setActiveSection(navigationItems.at(-1)?.id ?? "contact");
        return;
      }

      const readingLine = window.innerHeight * 0.28;
      let currentSection = sections[0]?.id ?? "presentation";

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= readingLine) {
          currentSection = section.id;
        } else {
          break;
        }
      }

      setActiveSection(currentSection);
    };

    const scheduleUpdate = () => {
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  useEffect(() => {
    const navigation = navigationRef.current;

    if (!navigation || !window.matchMedia("(max-width: 760px)").matches) {
      return;
    }

    const activeLink = navigation.querySelector<HTMLAnchorElement>(
      '[aria-current="location"]',
    );

    if (!activeLink) {
      return;
    }

    const targetLeft =
      activeLink.offsetLeft -
      (navigation.clientWidth - activeLink.offsetWidth) / 2;

    navigation.scrollTo({ left: targetLeft, behavior: "smooth" });
  }, [activeSection]);

  const activeIndex = Math.max(
    0,
    navigationItems.findIndex(({ id }) => id === activeSection),
  );
  const sliderPosition = {
    "--indicator-x": `${activeIndex * 100}%`,
  } as CSSProperties;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[rgb(250_250_248_/_92%)] backdrop-blur-[14px]">
      <div className="mx-auto grid min-h-16 w-[calc(100%_-_3rem)] max-w-[74rem] grid-cols-[auto_1fr_auto] items-center gap-[clamp(1.5rem,4vw,4rem)] max-[1000px]:grid-cols-[auto_1fr] max-[760px]:flex max-[760px]:min-h-0 max-[760px]:w-full max-[760px]:flex-wrap max-[760px]:gap-[0.55rem] max-[760px]:px-4 max-[760px]:pt-[0.7rem]">
        <a
          className="inline-flex items-center gap-[0.7rem] text-[0.78rem] font-[650] whitespace-nowrap max-[760px]:w-full"
          href="#presentation"
          aria-label="Harry Ruiz — back to introduction"
        >
          <svg
            className="h-10 w-10 rounded-md"
            viewBox="0 0 64 64"
            role="img"
            aria-label="Harry Ruiz logo"
          >
            <image href="/harry-logo.svg" width="64" height="64" />
          </svg>
          <span>Harry Ruiz</span>
        </a>

        <nav
          className="min-w-0 max-[760px]:mx-[-1rem] max-[760px]:w-[calc(100%_+_2rem)] max-[760px]:overflow-x-auto max-[760px]:overscroll-x-contain max-[760px]:px-4 max-[760px]:[scrollbar-width:none] max-[760px]:[&::-webkit-scrollbar]:hidden"
          aria-label="Primary navigation"
          ref={navigationRef}
        >
          <ol
            className="relative mx-auto grid w-max list-none grid-cols-[repeat(7,var(--nav-item-width))] p-0 [--indicator-inset:0.85rem] [--nav-item-width:5.15rem] after:pointer-events-none after:absolute after:bottom-[-1px] after:left-0 after:box-border after:h-0.5 after:w-[var(--nav-item-width)] after:bg-accent after:bg-clip-content after:px-[var(--indicator-inset)] after:content-[''] after:[transform:translate3d(var(--indicator-x,0%),0,0)] after:transition-transform after:[transition-duration:280ms] after:[transition-timing-function:cubic-bezier(0.22,1,0.36,1)] max-[1000px]:mr-0 max-[760px]:mx-0"
            style={sliderPosition}
          >
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li className="min-w-0 text-center" key={item.id}>
                  <a
                    className={`relative block pt-[1.45rem] pb-[1.35rem] text-[0.72rem] transition-colors [transition-duration:160ms] hover:text-ink max-[760px]:pt-[0.6rem] max-[760px]:pb-[0.7rem] max-[760px]:text-[0.68rem] ${isActive ? "text-ink" : "text-muted"}`}
                    href={`#${item.id}`}
                    aria-current={isActive ? "location" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>

        <p className="m-0 font-mono text-[0.6rem] tracking-[0.06em] whitespace-nowrap text-muted uppercase max-[1000px]:hidden">
          Mayagüez, Puerto Rico
        </p>
      </div>
    </header>
  );
}
