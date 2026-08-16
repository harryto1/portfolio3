import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";
import EducationSection from "./components/education-section";
import ExperienceSection from "./components/experience-section";
import HeroSection from "./components/hero-section";
import ProjectsSection from "./components/projects-section";
import SkillsSection from "./components/skills-section";
import Navigation from "./components/navigation";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://harryruiz.com/#person",
      name: "Harry Ruiz",
      url: "https://harryruiz.com",
      image: "https://harryruiz.com/harry.jpg",
      description:
        "Third-year Software Engineering student building full-stack and mobile applications while working toward AI research and engineering.",
      jobTitle: "Software Engineering Student",
      sameAs: ["https://github.com/harryto1"],
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: "University of Puerto Rico at Mayagüez",
        url: "https://www.uprm.edu",
      },
      knowsAbout: [
        "Software engineering",
        "Full-stack development",
        "Mobile development",
        "Artificial intelligence",
        "React",
        "TypeScript",
        "Flutter",
        "Flask",
        "PostgreSQL",
        "Firebase",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mayagüez",
        addressRegion: "Puerto Rico",
        addressCountry: "US",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://harryruiz.com/#website",
      url: "https://harryruiz.com",
      name: "Harry Ruiz Portfolio",
      description:
        "The personal portfolio and interactive résumé of software engineering student Harry Ruiz.",
      inLanguage: "en",
      publisher: { "@id": "https://harryruiz.com/#person" },
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas">
      <a
        className="fixed top-3 left-3 z-[100] -translate-y-[180%] rounded-[0.35rem] bg-ink px-[0.9rem] py-[0.7rem] text-[0.8rem] text-white transition-transform [transition-duration:160ms] focus:translate-y-0"
        href="#main-content"
      >
        Skip to main content
      </a>

      <Navigation />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
