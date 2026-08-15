import type { ReactNode } from "react";

import Navigation from "./navigation";
import styles from "./page.module.css";

const experiences = [
  {
    period: "2024 — Now",
    role: "Senior Product Designer",
    company: "Northstar Studio",
    description:
      "Leading end-to-end product design for early-stage teams, from shaping the problem to shipping polished, scalable experiences.",
    skills: ["Product strategy", "Design systems", "Prototyping"],
  },
  {
    period: "2022 — 2024",
    role: "Product Designer",
    company: "Orbit Labs",
    description:
      "Designed collaborative tools used by distributed teams and partnered closely with engineering to raise the quality bar across the product.",
    skills: ["UX research", "Interaction design", "React"],
  },
  {
    period: "2020 — 2022",
    role: "UI/UX Designer",
    company: "Independent",
    description:
      "Helped ambitious founders turn early ideas into clear brands, thoughtful interfaces, and launch-ready digital products.",
    skills: ["Art direction", "Web design", "No-code"],
  },
] as const;

const education = [
  {
    period: "2016 — 2020",
    degree: "B.Sc. in Interaction Design",
    school: "University of Your City",
    note: "Focused on human-computer interaction, visual systems, and product development.",
  },
  {
    period: "2023",
    degree: "Advanced Web Development",
    school: "Online Institute",
    note: "Intensive specialization in modern React, accessibility, and frontend architecture.",
  },
] as const;

const projects = [
  {
    number: "01",
    title: "Astra Finance",
    category: "Fintech · Product design",
    description:
      "A calmer way for independent professionals to understand cash flow and make confident financial decisions.",
    tags: ["Strategy", "UX/UI", "Design system"],
    artClass: styles.projectArtCobalt,
  },
  {
    number: "02",
    title: "Field Notes",
    category: "Mobile · Design & build",
    description:
      "A location-aware journal that turns everyday observations into a personal, searchable field guide.",
    tags: ["Research", "Product design", "React Native"],
    artClass: styles.projectArtCoral,
  },
  {
    number: "03",
    title: "Northstar OS",
    category: "SaaS · Design system",
    description:
      "A flexible operating system that helps small creative teams plan work without losing momentum.",
    tags: ["Design system", "Frontend", "Accessibility"],
    artClass: styles.projectArtLime,
  },
] as const;

const skillGroups = [
  {
    number: "01",
    title: "Design",
    items: ["Product design", "UX/UI", "Design systems", "Prototyping"],
  },
  {
    number: "02",
    title: "Development",
    items: ["TypeScript", "React / Next.js", "CSS", "Motion"],
  },
  {
    number: "03",
    title: "Thinking",
    items: ["Product strategy", "User research", "Workshops", "Storytelling"],
  },
  {
    number: "04",
    title: "Tools",
    items: ["Figma", "GitHub", "Linear", "Framer"],
  },
] as const;

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
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
    <div className={styles.sectionHeading}>
      <p className={styles.sectionIndex} aria-hidden="true">
        / {index}
      </p>
      <h2 id={id}>{children}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.portfolio}>
      <a className={styles.skipLink} href="#main-content">
        Skip to main content
      </a>

      <Navigation />

      <main id="main-content" className={styles.main}>
        <section
          id="presentation"
          className={styles.hero}
          aria-labelledby="introduction-title"
        >
          <div className={styles.heroTopline}>
            <p>Portfolio / 2026</p>
            <p>Scroll to explore</p>
          </div>

          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Hello, I&apos;m Your Name</p>
            <h1 id="introduction-title">
              I design &amp; build digital experiences that{" "}
              <span>feel inevitable.</span>
            </h1>
          </div>

          <div className={styles.heroBottom}>
            <p className={styles.heroSummary}>
              A product-minded designer and developer turning complex ideas into
              useful, memorable products.
            </p>

            <dl className={styles.heroDetails}>
              <div>
                <dt>Currently</dt>
                <dd>Senior Product Designer</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Design + Frontend</dd>
              </div>
            </dl>

            <a className={styles.circleLink} href="#projects">
              <span>See my work</span>
              <ArrowIcon />
            </a>
          </div>

          <div className={styles.heroShape} aria-hidden="true">
            <span />
            <span />
          </div>
        </section>

        <section
          id="about"
          className={styles.section}
          aria-labelledby="about-title"
        >
          <SectionHeading id="about-title" index="02">
            About me
          </SectionHeading>

          <div className={styles.aboutLayout}>
            <p className={styles.aboutLead}>
              I sit at the intersection of{" "}
              <span>design, technology, and strategy</span> — making things
              simpler without making them ordinary.
            </p>

            <div className={styles.aboutCopy}>
              <p>
                I care about the small details that shape how a product feels,
                and the big decisions that determine whether it should exist at
                all. My process is collaborative, curious, and grounded in real
                user needs.
              </p>
              <p>
                Away from the screen, you can usually find me collecting books,
                taking long walks, or learning something I am not yet good at.
              </p>
            </div>
          </div>

          <dl className={styles.metrics} aria-label="Career highlights">
            <div>
              <dt>04+</dt>
              <dd>Years of experience</dd>
            </div>
            <div>
              <dt>20</dt>
              <dd>Products launched</dd>
            </div>
            <div>
              <dt>06</dt>
              <dd>Countries collaborated with</dd>
            </div>
          </dl>
        </section>

        <section
          id="experience"
          className={styles.section}
          aria-labelledby="experience-title"
        >
          <SectionHeading id="experience-title" index="03">
            Work experience
          </SectionHeading>

          <div className={styles.timeline}>
            {experiences.map((experience) => (
              <article className={styles.timelineItem} key={experience.company}>
                <p className={styles.timelinePeriod}>{experience.period}</p>
                <div className={styles.timelineRole}>
                  <h3>{experience.role}</h3>
                  <p>{experience.company}</p>
                </div>
                <div className={styles.timelineDetails}>
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
        </section>

        <section
          id="education"
          className={styles.section}
          aria-labelledby="education-title"
        >
          <SectionHeading id="education-title" index="04">
            Education
          </SectionHeading>

          <div className={styles.educationGrid}>
            {education.map((item) => (
              <article className={styles.educationCard} key={item.degree}>
                <p className={styles.educationPeriod}>{item.period}</p>
                <div>
                  <h3>{item.degree}</h3>
                  <p className={styles.educationSchool}>{item.school}</p>
                  <p className={styles.educationNote}>{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="projects"
          className={[styles.section, styles.projectsSection].join(" ")}
          aria-labelledby="projects-title"
        >
          <SectionHeading id="projects-title" index="05">
            Selected projects
          </SectionHeading>

          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <article className={styles.projectCard} key={project.title}>
                <div
                  className={[styles.projectArt, project.artClass].join(" ")}
                >
                  <p>{project.number}</p>
                  <div className={styles.projectArtShape} aria-hidden="true">
                    <span />
                    <span />
                  </div>
                  <p>Selected work</p>
                </div>

                <div className={styles.projectInfo}>
                  <p className={styles.projectCategory}>{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                  <ul className={styles.projectTags} aria-label="Project services">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <p className={styles.projectStatus}>
                    Case study coming soon <ArrowIcon />
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="skills"
          className={styles.section}
          aria-labelledby="skills-title"
        >
          <SectionHeading id="skills-title" index="06">
            Skills &amp; tools
          </SectionHeading>

          <div className={styles.skillsIntro}>
            <p>
              A hybrid toolkit for taking ideas from{" "}
              <span>rough question to refined product.</span>
            </p>
          </div>

          <div className={styles.skillsGrid}>
            {skillGroups.map((group) => (
              <section className={styles.skillGroup} key={group.title}>
                <div className={styles.skillTitle}>
                  <p aria-hidden="true">{group.number}</p>
                  <h3>{group.title}</h3>
                </div>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className={styles.contact}
          aria-labelledby="contact-title"
        >
          <p className={styles.contactEyebrow}>Have a project in mind?</p>
          <h2 id="contact-title">
            Let&apos;s make something <span>worth remembering.</span>
          </h2>

          <a
            className={styles.emailLink}
            href="mailto:hello@yourname.dev"
            aria-label="Email hello at yourname dot dev"
          >
            hello@yourname.dev
            <ArrowIcon />
          </a>

          <div className={styles.contactFooter}>
            <p>© 2026 Your Name</p>
            <nav aria-label="Social links">
              <a
                href="https://www.linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </nav>
            <a href="#presentation">
              Back to top <span aria-hidden="true">↑</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
