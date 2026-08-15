import type { ReactNode } from "react";

import Navigation from "./navigation";
import styles from "./page.module.css";

const experiences = [
  {
    period: "Jul — Dec 2025",
    role: "Software Developer",
    company: "MiUni LLC · Puerto Rico",
    companyUrl: "https://www.miunipr.com",
    description:
      "Developed responsive mobile applications for iOS and Android with a cross-functional team. Improved security by encrypting and hiding sensitive client data, and refactored Flutter frontend flows to use Firebase Functions for selected API calls.",
    skills: ["Flutter", "Dart", "Firebase", "Git"],
  },
] as const;

const education = [
  {
    period: "2024 — Expected 2029",
    degree: "Bachelor of Science in Software Engineering",
    school: "University of Puerto Rico — Mayagüez",
    schoolUrl: "https://www.uprm.edu",
    note: "Third-year student with a 4.0 GPA. Relevant coursework includes Data Structures, Advanced Programming, Fundamentals of Computing, and Calculus I & II. I also participate in coding competitions and hackathons while independently studying AI and machine learning.",
  },
] as const;

const projects = [
  {
    number: "01",
    title: "Fórmula al Éxito",
    category: "Full-stack platform · Jan 2025 · 6 months",
    description:
      "A full-stack tutoring platform with authentication, booking, live chat, video calls, interactive whiteboards, recordings, learning materials, and an admin dashboard. Built with Flask, Jinja, JavaScript, SQLAlchemy, PostgreSQL, and Flask-SocketIO, with cookie-based session management so students can book without creating an account.",
    tags: [
      "Flask",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "Socket.IO",
      "JavaScript",
    ],
    artClass: styles.projectArtCobalt,
    link: "https://www.formulaalexito.com",
    linkLabel: "Visit live site",
    features: [
      "Authentication and authorization",
      "Real-time chat and video conferencing",
      "Interactive whiteboards and recordings",
      "Learning resource library",
      "User and content administration",
      "Responsive mobile and desktop experience",
    ],
    challenges: [
      "Integrating real-time video and chat",
      "Designing an intuitive tutoring workflow",
      "Protecting user data and privacy",
      "Managing complex database relationships",
    ],
    learnings: [
      "Advanced Flask development",
      "Hosting and deployment strategies",
      "Socket programming with Flask-SocketIO",
      "SQLAlchemy and PostgreSQL database design",
    ],
  },
  {
    number: "02",
    title: "Atabei",
    category: "Mobile application · May 2025 · 2 months",
    description:
      "An in-progress, Twitter-inspired social application for iOS and Android. It uses Flutter, Bloc, Dart, and Firebase for authentication, a real-time timeline, post creation and editing, profiles, user search, notifications, and Firestore updates. Built as a learning project for clean architecture, state management, and cross-platform development.",
    tags: ["Flutter", "Bloc", "Dart", "Firebase"],
    artClass: styles.projectArtCoral,
    link: "https://github.com/harryto1/atabei",
    linkLabel: "View on GitHub",
    features: [
      "Firebase authentication",
      "Real-time timeline and Firestore updates",
      "Post creation and editing",
      "User profiles and search",
      "Push notification system",
      "Cross-platform iOS and Android support",
    ],
    challenges: [
      "Real-time data synchronization",
      "Responsive UI across screen sizes",
      "State management with Bloc",
      "Firebase Cloud Messaging integration",
    ],
    learnings: [
      "Flutter clean architecture",
      "Effective state management with Bloc",
      "Firebase services and integration",
      "Cross-platform mobile development",
    ],
  },
] as const;

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    items: ["React", "TypeScript", "HTML / CSS", "JavaScript"],
  },
  {
    number: "02",
    title: "Backend",
    items: ["Flask — 80%", "PostgreSQL — 70%", "REST APIs — 75%"],
  },
  {
    number: "03",
    title: "Mobile",
    items: ["Flutter", "Dart", "Bloc", "Firebase"],
  },
  {
    number: "04",
    title: "Tools",
    items: ["Git — 90%", "Firebase — 80%", "VS Code — 95%"],
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
            <p>Software Engineering / 2026</p>
            <p>Scroll to explore</p>
          </div>

          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>
              Third-year Software Engineering Student
            </p>
            <h1 id="introduction-title">I&apos;m Harry Ruiz.</h1>
          </div>

          <div className={styles.heroBottom}>
            <p className={styles.heroSummary}>
              A software engineering student passionate about building
              innovative solutions and learning new technologies.
            </p>

            <dl className={styles.heroDetails}>
              <div>
                <dt>Currently</dt>
                <dd>B.Sc. Software Engineering</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>AI research &amp; engineering</dd>
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
              I&apos;m driven by coding, problem-solving, mathematics, and{" "}
              <span>the science behind intelligent systems.</span>
            </p>

            <div className={styles.aboutCopy}>
              <p>
                I am a third-year Software Engineering student at the University
                of Puerto Rico — Mayagüez. My long-term goal is to become an AI
                researcher and engineer, and I am committed to building the
                technical expertise needed to get there.
              </p>
              <p>
                I am advancing my knowledge through Data Structures and other
                coursework while continuously exploring new programming
                languages and frameworks, driven by a passion for learning and
                growth as a developer.
              </p>
            </div>
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
                  <p>
                    <a
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {experience.company} <span aria-hidden="true">↗</span>
                    </a>
                  </p>
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
                  <p className={styles.educationSchool}>
                    <a href={item.schoolUrl} target="_blank" rel="noreferrer">
                      {item.school} <span aria-hidden="true">↗</span>
                    </a>
                  </p>
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
                  <ul
                    className={styles.projectTags}
                    aria-label="Project technologies"
                  >
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <details className={styles.projectDetails}>
                    <summary>
                      Explore project details
                      <span aria-hidden="true">+</span>
                    </summary>
                    <div className={styles.projectDetailGroups}>
                      <section>
                        <h4>Key features</h4>
                        <ul>
                          {project.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      </section>
                      <section>
                        <h4>Challenges</h4>
                        <ul>
                          {project.challenges.map((challenge) => (
                            <li key={challenge}>{challenge}</li>
                          ))}
                        </ul>
                      </section>
                      <section>
                        <h4>What I learned</h4>
                        <ul>
                          {project.learnings.map((learning) => (
                            <li key={learning}>{learning}</li>
                          ))}
                        </ul>
                      </section>
                    </div>
                  </details>
                  <a
                    className={styles.projectStatus}
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={
                      project.linkLabel +
                      ": " +
                      project.title +
                      " (opens in a new tab)"
                    }
                  >
                    {project.linkLabel} <ArrowIcon />
                  </a>
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
              From responsive web interfaces to cross-platform mobile apps,{" "}
              <span>I learn by shipping real software.</span>
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
          <p className={styles.contactEyebrow}>
            New opportunities, exciting projects, or just saying hello
          </p>
          <h2 id="contact-title">
            Let&apos;s build something <span>reliable and useful.</span>
          </h2>

          <a
            className={styles.emailLink}
            href="mailto:harry.ruiz6@upr.edu"
            aria-label="Email Harry Ruiz at harry dot ruiz six at upr dot edu"
          >
            harry.ruiz6@upr.edu
            <ArrowIcon />
          </a>

          <div className={styles.contactFooter}>
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
