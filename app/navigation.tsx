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

      const readingLine = window.innerHeight * 0.34;
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

  return (
    <header className={styles.siteHeader}>
      <div className={styles.brandRow}>
        <a
          className={styles.brand}
          href="#presentation"
          aria-label="Your Name — back to introduction"
          onClick={() => setActiveSection("presentation")}
        >
          YN<span aria-hidden="true">.</span>
        </a>
        <p className={styles.brandDescriptor}>
          Designer
          <br />
          &amp; Developer
        </p>
      </div>

      <nav className={styles.navigation} aria-label="Primary navigation">
        <ol className={styles.navigationList}>
          {navigationItems.map((item, index) => {
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
                >
                  <span className={styles.navigationNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item.label}</span>
                  <span className={styles.navigationMark} aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ol>
      </nav>

      <div className={styles.headerFooter}>
        <p className={styles.availability}>
          <span className={styles.statusDot} aria-hidden="true" />
          Available for select projects
        </p>
        <p className={styles.location}>Based in your city · Working worldwide</p>
      </div>
    </header>
  );
}
