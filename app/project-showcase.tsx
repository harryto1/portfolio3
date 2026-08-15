"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import styles from "./page.module.css";

const projects = [
  {
    title: "Fórmula al Éxito",
    category: "Full-stack · 2025",
    description:
      "A tutoring platform with booking, live chat, video calls, whiteboards, recordings, learning resources, and admin tools.",
    tags: ["Flask", "PostgreSQL", "Socket.IO", "JavaScript"],
    image: "/faeBanner.png",
    imageAlt: "Fórmula al Éxito tutoring platform homepage",
    logo: "/thumbnail_Logo_sin_FAE_sin_diseños_PNG.png",
    gallery: [],
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
    title: "Atabei",
    category: "Mobile · 2025",
    description:
      "An in-progress Flutter social app with authentication, real-time posts, profiles, search, and notifications for iOS and Android.",
    tags: ["Flutter", "Bloc", "Dart", "Firebase"],
    image: "/atabei_banner.png",
    imageAlt: "Atabei social app timeline",
    logo: null,
    gallery: [
      { src: "/atabei_img_1.png", alt: "Atabei profile screen" },
      { src: "/atabei_img_2.png", alt: "Atabei search screen" },
      { src: "/atabei_img_3.png", alt: "Atabei feed screen" },
    ],
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

type Project = (typeof projects)[number];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <path d="M4 10h11M10.5 5.5 15 10l-4.5 4.5" />
    </svg>
  );
}

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
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <button
            className={styles.projectCard}
            type="button"
            key={project.title}
            aria-haspopup="dialog"
            onClick={() => setActiveProject(project)}
          >
            <span className={styles.projectVisual}>
              <Image
                className={styles.projectImage}
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 720px) 100vw, 42vw"
              />
            </span>

            <span className={styles.projectInfo}>
              <span className={styles.projectHeading}>
                {project.logo ? (
                  <span className={styles.projectLogo} aria-hidden="true">
                    <Image src={project.logo} alt="" fill sizes="44px" />
                  </span>
                ) : null}
                <span>
                  <span className={styles.projectCategory}>{project.category}</span>
                  <span className={styles.projectTitle}>{project.title}</span>
                </span>
              </span>

              <span className={styles.projectDescription}>
                {project.description}
              </span>
              <span
                className={styles.projectTags}
                aria-label="Project technologies"
              >
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </span>
              <span className={styles.projectLink}>
                View details <ArrowIcon />
              </span>
            </span>
          </button>
        ))}
      </div>

      <dialog
        className={styles.projectDialog}
        ref={dialogRef}
        aria-labelledby="project-dialog-title"
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
          <div className={styles.projectDialogInner}>
            <header className={styles.projectDialogHeader}>
              <div>
                <p>{activeProject.category}</p>
                <h2 id="project-dialog-title">{activeProject.title}</h2>
              </div>
              <button
                className={styles.dialogClose}
                type="button"
                onClick={closeDialog}
                autoFocus
              >
                <span>Close</span>
                <span aria-hidden="true">×</span>
              </button>
            </header>

            <div className={styles.projectDialogMedia}>
              <Image
                src={activeProject.image}
                alt={activeProject.imageAlt}
                fill
                sizes="(max-width: 720px) 94vw, 60vw"
              />
            </div>

            {activeProject.gallery.length ? (
              <div
                className={styles.projectDialogGallery}
                role="group"
                aria-label={`${activeProject.title} screenshots`}
              >
                {activeProject.gallery.map((image) => (
                  <div key={image.src}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 720px) 30vw, 180px"
                    />
                  </div>
                ))}
              </div>
            ) : null}

            <div className={styles.projectDialogContent}>
              <div className={styles.projectDialogIntro}>
                <p>{activeProject.description}</p>
                <ul aria-label="Project technologies">
                  {activeProject.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {activeProject.linkLabel} <ArrowIcon />
                </a>
              </div>

              <div className={styles.projectDetailGrid}>
                <section>
                  <h3>Key features</h3>
                  <ul>
                    {activeProject.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h3>Challenges</h3>
                  <ul>
                    {activeProject.challenges.map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h3>What I learned</h3>
                  <ul>
                    {activeProject.learnings.map((learning) => (
                      <li key={learning}>{learning}</li>
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
