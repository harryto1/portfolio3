"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./page.module.css";

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
  const navigationListRef = useRef<HTMLOListElement>(null);
  const indicatorRef = useRef<HTMLLIElement>(null);
  const navigationLinkRefs = useRef<
    Record<string, HTMLAnchorElement | null>
  >({});

  useEffect(() => {
    const sections = navigationItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const updateActiveSection = () => {
      frameRef.current = null;

      const pageBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 4;

      if (pageBottom) {
        setActiveSection(navigationItems[navigationItems.length - 1].id);
        return;
      }

      const readingLine = window.innerHeight * 0.28;
      let currentSection = sections[0]?.id ?? "presentation";

      for (const section of sections) {
        const bounds = section.getBoundingClientRect();

        if (bounds.top <= readingLine) {
          currentSection = section.id;
        }

        if (bounds.top <= readingLine && bounds.bottom > readingLine) {
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

    const initialFrame = window.requestAnimationFrame(updateActiveSection);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(initialFrame);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, []);

  useEffect(() => {
    let isCurrent = true;

    const updateIndicator = () => {
      const activeLink = navigationLinkRefs.current[activeSection];
      const indicator = indicatorRef.current;

      if (!activeLink || !indicator) {
        return;
      }

      indicator.style.width = `${activeLink.offsetWidth}px`;
      indicator.style.transform = `translate3d(${activeLink.offsetLeft}px, 0, 0)`;
      indicator.dataset.ready = "true";
    };

    const animationFrame = window.requestAnimationFrame(updateIndicator);
    const resizeObserver = new ResizeObserver(updateIndicator);

    if (navigationListRef.current) {
      resizeObserver.observe(navigationListRef.current);
    }

    document.fonts.ready.then(() => {
      if (isCurrent) {
        updateIndicator();
      }
    });

    return () => {
      isCurrent = false;
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
    };
  }, [activeSection]);

  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerInner}>
        <a
          className={styles.brand}
          href="#presentation"
          aria-label="Harry Ruiz — back to introduction"
          onClick={() => setActiveSection("presentation")}
        >
          <span aria-hidden="true">HR</span>
          <span>Harry Ruiz</span>
        </a>

        <nav className={styles.navigation} aria-label="Primary navigation">
          <ol className={styles.navigationList} ref={navigationListRef}>
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li key={item.id}>
                  <a
                    className={`${styles.navigationLink} ${
                      isActive ? styles.navigationLinkActive : ""
                    }`}
                    href={`#${item.id}`}
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => setActiveSection(item.id)}
                    ref={(element) => {
                      navigationLinkRefs.current[item.id] = element;
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
            <li
              className={styles.navigationIndicator}
              ref={indicatorRef}
              aria-hidden="true"
            />
          </ol>
        </nav>

        <p className={styles.headerMeta}>Mayagüez, Puerto Rico</p>
      </div>
    </header>
  );
}
