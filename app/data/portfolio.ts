export type PortfolioImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  title: string;
  category: string;
  description: string;
  tags: readonly string[];
  image: PortfolioImage;
  logo: PortfolioImage | null;
  gallery: readonly PortfolioImage[];
  link: string;
  linkLabel: string;
  features: readonly string[];
  challenges: readonly string[];
  learnings: readonly string[];
};

export const experiences = [
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

export const education = [
  {
    period: "2024 — Expected 2029",
    degree: "Bachelor of Science in Software Engineering",
    school: "University of Puerto Rico — Mayagüez",
    schoolUrl: "https://www.uprm.edu",
    note: "3rd year student · 3.27 GPA · Introduction to Software Engineering, Analysis and Design of Algorithms, Data Structures",
  },
] as const;

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "Next.js",
      "TailwindCSS",
      "React",
      "TypeScript",
      "HTML / CSS",
      "JavaScript",
    ],
  },
  {
    title: "Backend",
    items: [
      "Spring Boot",
      "Flask",
      "PostgreSQL",
      "REST APIs",
      "RabbitMQ",
      "WebSockets",
      "Redis",
      "JWT",
    ],
  },
  {
    title: "Mobile",
    items: ["Flutter", "Dart", "Bloc", "Firebase"],
  },
  {
    title: "Tools",
    items: ["Git", "Firebase", "VS Code", "Docker", "Postman"],
  },
] as const;

export const projects: readonly Project[] = [
  {
    title: "Fórmula al Éxito v2",
    category: "Full-stack · 2026",
    description:
      "An updated version of the Fórmula al Éxito platform with improved features, an horizontally scalable design, and enhanced security measures.",
    tags: [
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "Spring Boot",
      "RabbitMQ",
      "Redis",
      "JWT",
      "Kotlin",
      "PostgreSQL",
    ],
    image: {
      src: "/faev2-banner.png",
      alt: "Fórmula al Éxito tutoring platform homepage",
      width: 1920,
      height: 1080,
    },
    logo: {
      src: "/thumbnail_Logo_sin_FAE_sin_diseños_PNG.png",
      alt: "",
      width: 695,
      height: 681,
    },
    gallery: [
      {
        src: "/faev2-img_1.png",
        alt: "Container Diagram",
        width: 1080,
        height: 720,
      },
      {
        src: "/faev2-img_2.png",
        alt: "Chat Feature",
        width: 1080,
        height: 720,
      },
    ],
    link: "https://www.formulaalexito.com",
    linkLabel: "Visit live site",
    features: [
      "Rewritten in Kotlin using Spring Boot for backend services, and Next.js with TypeScript for the frontend",
      "Student/tutor authentication with JWT access tokens, refresh tokens, email verification, password reset, and role-based authorization.",
      "Tutor scheduling workflow with availablity slots, session requests, acceptance/rejection, and chat access after an accepted session.",
      "Real-time chat with WebSockets/STOMP, RabbitMQ broker relay, unread counts, message delivery status, media attachments, and direct-to-R2 uploads.",
      "Collaborative whiteboard using tldraw with realtime drawing, erasing, laser pointer sync, durable event replay, snapshots, media upload, and cleanup logic.",
      "Recording pupeline using Daily webhooks and Mux for processing, signed playback, signed downloads, thumbnails, descriptions, publishing, and deletion.",
      "Tutor resource library, admin dashboard, containerized deployment with Docker, and video meeting using Daily with secure room access tied to tutoring sessions.",
    ],
    challenges: [
      "Learning and implementing a new tech stack (Kotlin, Spring Boot, Next.js, etc...)",
      "Making the whiteboard truly reliable during fast drawing, large erases, refreshes, reconnects, and pending snapshots.",
      "Preventing WebSocket/STOMP overload caused by large realtime whiteboard events.",
      "Handling lifecycle cleanup for deleted or replaced whiteboard images, chat attachments, tutor profile images, and recordings.",
      "Building a scalable recording workflow across Daily, backend webhooks, Mux processing, signed playback, and email notifications.",
      "Hardening the application with rate limits, audit logs, private storage access, signed media URLs, etc.",
      "Debugging real-world deployment issues such as SSL configuration, WebSocket proxying, R2 CORS, and production container networking.",
    ],
    learnings: [
      "Designing a strong authentication and authorization system with JWT, refresh tokens, email verification, password reset, and role-based access control.",
      "Designing realtime systems with durable persistence, replay, batching, and reconnect recovery.",
      "How external brokers like RabbitMQ help make WebSocket messaging more scalable.",
      "How Redis can support distributed rate limiting, locks and coordination in a horizontally scalable backend architecture.",
      "How to document software architecture using C4 diagrams and runtime flows.",
      "Token bucket rate limiting for spam prevention.",
      "Securing video playback and downloads with signed URLs.",
      "Using the Catmull-Rom spline algorithm for smooth laser pointing animations",
    ],
  },
  {
    title: "Fórmula al Éxito",
    category: "Full-stack · 2025",
    description:
      "A tutoring platform with booking, live chat, video calls, whiteboards, recordings, learning resources, and admin tools.",
    tags: ["Flask", "PostgreSQL", "Socket.IO", "JavaScript"],
    image: {
      src: "/faeBanner.png",
      alt: "Fórmula al Éxito tutoring platform homepage",
      width: 1920,
      height: 1080,
    },
    logo: {
      src: "/thumbnail_Logo_sin_FAE_sin_diseños_PNG.png",
      alt: "",
      width: 695,
      height: 681,
    },
    gallery: [],
    link: "https://www.formulaalexito.com",
    linkLabel:
      "Sorry, I can't share the source code for this project right now :(",
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
    image: {
      src: "/atabei_banner.png",
      alt: "Atabei social app timeline",
      width: 1080,
      height: 533,
    },
    logo: null,
    gallery: [
      {
        src: "/atabei_img_1.png",
        alt: "Atabei profile screen",
        width: 1080,
        height: 1787,
      },
      {
        src: "/atabei_img_2.png",
        alt: "Atabei search screen",
        width: 1080,
        height: 1076,
      },
      {
        src: "/atabei_img_3.png",
        alt: "Atabei feed screen",
        width: 1080,
        height: 1294,
      },
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
];
