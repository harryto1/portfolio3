import Image from "next/image";
import type { ReactNode } from "react";

import Navigation from "./navigation";
import styles from "./page.module.css";
import ProjectShowcase from "./project-showcase";

const experiences = [
  {
    period: "Jul — Dec 2025",
    role: "Software Developer",
    company: "MiUni LLC · Puerto Rico",
    companyUrl: "https://www.miunipr.com",
    description:
      "Built responsive iOS and Android features, secured sensitive client data, and moved selected API calls to Firebase Functions.",
    skills: ["Flutter", "Dart", "Firebase", "Git"],
  },
] as const;

const education = [
  {
    period: "2024 — Expected 2029",
    degree: "Bachelor of Science in Software Engineering",
    school: "University of Puerto Rico — Mayagüez",
    schoolUrl: "https://www.uprm.edu",
    note: "Third-year student · 4.0 GPA · Data Structures, Advanced Programming, Fundamentals of Computing, and Calculus I & II.",
  },
] as const;

const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "HTML / CSS", "JavaScript"],
  },
  {
    title: "Backend",
    items: ["Flask", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Mobile",
    items: ["Flutter", "Dart", "Bloc", "Firebase"],
  },
  {
    title: "Tools",
    items: ["Git", "Firebase", "VS Code"],
  },
] as const;

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <path d="M4 10h11M10.5 5.5 15 10l-4.5 4.5" />
    </svg>
  );
}

function SectionHeading({
  id,
  index,
  children,
}: {
  id: string;
  index: string;
  children: ReactNode;
}) {
  return (
    <header className={styles.sectionHeading}>
      <p aria-hidden="true">{index}</p>
      <h2 id={id}>{children}</h2>
    </header>
  );
}

export default function Home() {
  return (
    <div className={styles.portfolio}>
      <a className={styles.skipLink} href="#main-content">
        Skip to main content
      </a>

      <Navigation />

      <main id="main-content">
        <section
          id="presentation"
          className={styles.hero}
          aria-labelledby="introduction-title"
        >
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                Third-year Software Engineering Student
              </p>
              <h1 id="introduction-title">I&apos;m Harry Ruiz.</h1>
              <p className={styles.heroSummary}>
                A software engineering student passionate about building
                innovative solutions and learning new technologies.
              </p>

              <div className={styles.heroActions}>
                <a className={styles.primaryLink} href="#projects">
                  See my work <ArrowIcon />
                </a>
                <a
                  className={styles.textLink}
                  href="mailto:harry.ruiz6@upr.edu"
                >
                  Contact me
                </a>
              </div>

              <dl className={styles.heroFacts}>
                <div>
                  <dt>Currently</dt>
                  <dd>B.Sc. Software Engineering</dd>
                </div>
                <div>
                  <dt>Focus</dt>
                  <dd>AI research &amp; engineering</dd>
                </div>
              </dl>
            </div>

            <figure className={styles.heroFigure}>
              <div className={styles.heroPortrait}>
                <Image
                  src="/harry.jpg"
                  alt="Portrait of Harry Ruiz"
                  fill
                  priority
                  sizes="(max-width: 720px) 82vw, 30vw"
                />
              </div>
              <figcaption>
                Mayagüez, Puerto Rico <span>2026</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section
          id="about"
          className={styles.section}
          aria-labelledby="about-title"
        >
          <div className={styles.sectionInner}>
            <SectionHeading id="about-title" index="02">
              About
            </SectionHeading>

            <div className={styles.sectionContent}>
              <div className={styles.aboutLayout}>
                <p className={styles.aboutLead}>
                  I&apos;m driven by coding, problem-solving, mathematics, and
                  the science behind intelligent systems.
                </p>
                <p className={styles.aboutCopy}>
                  I am a third-year Software Engineering student at the
                  University of Puerto Rico — Mayagüez, working toward AI
                  research and engineering while strengthening my foundation in
                  data structures, new languages, and frameworks.
                </p>
              </div>

              <dl className={styles.metrics} aria-label="Student highlights">
                <div>
                  <dt>2+</dt>
                  <dd>Years coding &amp; developing</dd>
                </div>
                <div>
                  <dt>10+</dt>
                  <dd>Web &amp; mobile projects</dd>
                </div>
                <div>
                  <dt>5+</dt>
                  <dd>Languages &amp; frameworks</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className={styles.section}
          aria-labelledby="experience-title"
        >
          <div className={styles.sectionInner}>
            <SectionHeading id="experience-title" index="03">
              Experience
            </SectionHeading>

            <div className={styles.sectionContent}>
              {experiences.map((experience) => (
                <article className={styles.resumeRow} key={experience.company}>
                  <p className={styles.resumePeriod}>{experience.period}</p>
                  <div className={styles.resumeTitle}>
                    <h3>{experience.role}</h3>
                    <a
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {experience.company} <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                  <div className={styles.resumeDetails}>
                    <p>{experience.description}</p>
                    <ul className={styles.tagList} aria-label="Key skills">
                      {experience.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="education"
          className={styles.section}
          aria-labelledby="education-title"
        >
          <div className={styles.sectionInner}>
            <SectionHeading id="education-title" index="04">
              Education
            </SectionHeading>

            <div className={styles.sectionContent}>
              {education.map((item) => (
                <article className={styles.educationCard} key={item.degree}>
                  <div className={styles.educationLogo}>
                    <Image
                      src="/logo-uprm.png"
                      alt="University of Puerto Rico at Mayagüez seal"
                      fill
                      sizes="72px"
                    />
                  </div>
                  <div className={styles.educationContent}>
                    <p className={styles.resumePeriod}>{item.period}</p>
                    <h3>{item.degree}</h3>
                    <a
                      className={styles.educationSchool}
                      href={item.schoolUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.school} <span aria-hidden="true">↗</span>
                    </a>
                    <p className={styles.educationNote}>{item.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className={`${styles.section} ${styles.projectsSection}`}
          aria-labelledby="projects-title"
        >
          <div className={styles.sectionInner}>
            <SectionHeading id="projects-title" index="05">
              Projects
            </SectionHeading>

            <div className={styles.sectionContent}>
              <ProjectShowcase />
            </div>
          </div>
        </section>

        <section
          id="skills"
          className={styles.section}
          aria-labelledby="skills-title"
        >
          <div className={styles.sectionInner}>
            <SectionHeading id="skills-title" index="06">
              Skills
            </SectionHeading>

            <div className={`${styles.sectionContent} ${styles.skillsGrid}`}>
              {skillGroups.map((group) => (
                <section className={styles.skillGroup} key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className={styles.contact}
          aria-labelledby="contact-title"
        >
          <div className={styles.contactPanel}>
            <div>
              <p className={styles.contactLabel}>07 · Contact</p>
              <h2 id="contact-title">
                Let&apos;s build something reliable and useful.
              </h2>
            </div>

            <a
              className={styles.emailLink}
              href="mailto:harry.ruiz6@upr.edu"
              aria-label="Email Harry Ruiz at harry dot ruiz six at upr dot edu"
            >
              harry.ruiz6@upr.edu
              <ArrowIcon />
            </a>

            <footer className={styles.contactFooter}>
              <p>© 2026 Harry Ruiz</p>
              <nav aria-label="Contact and social links">
                <a
                  href="https://github.com/harryto1"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <span aria-hidden="true">↗</span>
                </a>
                <a href="tel:+17873859381">
                  +1 (787) 385-9381 <span aria-hidden="true">↗</span>
                </a>
                <a href="#presentation">
                  Back to top <span aria-hidden="true">↑</span>
                </a>
              </nav>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
