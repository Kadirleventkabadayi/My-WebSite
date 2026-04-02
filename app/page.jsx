"use client";

import { useEffect, useRef, useState } from "react";

/* ── Scroll reveal hook ─────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ── Among Us Cursor Follower ───────────────────────── */
/*
  Z-index layering:
    body bg          → base
    body::after glow → z-index: 1
    AmongUs          → z-index: 2   ← above glow, below grid
    body::before grid→ z-index: 3
    <main> content   → z-index: 4
  AmongUs is rendered OUTSIDE <main> so it's NOT inside the
  main stacking context, allowing the z-index to work correctly.
*/
function AmongUs() {
  const targetRef = useRef({ x: -120, y: -120 });
  const smoothRef = useRef({ x: -120, y: -120 });
  const rafRef = useRef(null);
  const [pos, setPos] = useState({ x: -120, y: -120 });
  const [facingRight, setFacingRight] = useState(true);
  const lastXRef = useRef(-120);

  useEffect(() => {
    const onMove = (e) => {
      // Determine facing direction
      lastXRef.current = e.clientX;
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", onMove);

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      smoothRef.current.x = lerp(
        smoothRef.current.x,
        targetRef.current.x,
        0.09,
      );
      smoothRef.current.y = lerp(
        smoothRef.current.y,
        targetRef.current.y,
        0.09,
      );
      setPos({ x: smoothRef.current.x, y: smoothRef.current.y });
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="among-us-cursor"
      style={{
        left: pos.x - 28,
        top: pos.y - 52,
      }}
    >
      <img
        src="/among-us.gif"
        alt="among us"
        style={{
          width: "36px",
          height: "auto",
        }}
      />
    </div>
  );
}

/* ── SVG Icons ──────────────────────────────────────── */
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="social-icon">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="social-icon">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width="18"
    height="18"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width="18"
    height="18"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ExternalIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width="14"
    height="14"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

/* ── Navbar ─────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "about" },
    { href: "#skills", label: "skills" },
    { href: "#experience", label: "experience" },
    { href: "#projects", label: "projects" },
    { href: "#contact", label: "contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <a href="#hero" className="nav-logo">
          klk<span>.</span>
        </a>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:kadirleventkabadayi@gmail.com"
              className="nav-cta"
              onClick={() => setMenuOpen(false)}
            >
              hire me
            </a>
          </li>
        </ul>
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}

/* ── Hero ───────────────────────────────────────────── */
function Hero() {
  const [typed, setTyped] = useState("");
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTyped(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 65);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-inner">
          <div>
            <div className="hero-tag">
              <div className="hero-tag-dot" />
              Available for opportunities
            </div>

            <h1 className="hero-name">
              Kadir Levent
              <br />
              <span className="hero-name-accent">Kabadayı</span>
            </h1>

            <p className="hero-role">
              <span>{typed}</span>
              <span className="hero-cursor" />
            </p>

            <p className="hero-desc">
              Building sleek web interfaces and robust APIs. Graduated 3rd in
              class from Erciyes University Computer Engineering. Working as a
              Freelance Software Developer at Omreon.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                View Projects →
              </a>
              <a href="#contact" className="btn-secondary">
                Get in Touch
              </a>
            </div>

            <div className="hero-social">
              <a
                href="https://github.com/Kadirleventkabadayi"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <GithubIcon />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/kadir-levent-kabadayi/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <LinkedinIcon />
                LinkedIn
              </a>
              <a
                href="mailto:kadirleventkabadayi@gmail.com"
                className="social-link"
              >
                <MailIcon />
                Email
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="dot dot-red" />
                <div className="dot dot-yellow" />
                <div className="dot dot-green" />
              </div>
              <div className="hero-card-code">
                <div>
                  <span className="code-comment">// developer.json</span>
                </div>
                <div>&nbsp;</div>
                <div>
                  <span className="code-key">name</span>:{" "}
                  <span className="code-string">"Levent"</span>,
                </div>
                <div>
                  <span className="code-key">role</span>:{" "}
                  <span className="code-string">"Full Stack Dev"</span>,
                </div>
                <div>
                  <span className="code-key">gpa</span>:{" "}
                  <span className="code-num">3.41</span>,
                </div>
                <div>
                  <span className="code-key">rank</span>:{" "}
                  <span className="code-string">"3rd in dept"</span>,
                </div>
                <div>
                  <span className="code-key">open</span>:{" "}
                  <span className="code-num">true</span>,
                </div>
                <div>
                  <span className="code-key">stack</span>: [
                </div>
                <div>
                  &nbsp;&nbsp;<span className="code-string">"React"</span>,
                </div>
                <div>
                  &nbsp;&nbsp;<span className="code-string">"Next.js"</span>,
                </div>
                <div>
                  &nbsp;&nbsp;<span className="code-string">"Node.js"</span>,
                </div>
                <div>
                  &nbsp;&nbsp;<span className="code-string">"Spring"</span>
                </div>
                <div>]</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="scroll-text">scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

/* ── About ──────────────────────────────────────────── */
function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-inner">
          <div className="reveal-left">
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Focused on building scalable, real-world applications
            </h2>
          </div>

          <div className="about-text reveal-right">
            <p>
              Hey, I'm <strong>Levent</strong> — a full-stack developer with
              roots in game development and a genuine love for crafting clean,
              performant web experiences. I graduated with a{" "}
              <span className="highlight">3.41 GPA</span>, ranking{" "}
              <span className="highlight">3rd in my department</span> at Erciyes
              University Computer Engineering.
            </p>
            <p>
              I had the opportunity to intern at{" "}
              <strong>TÜBİTAK BİLGEM YTE</strong>, Turkey's leading R&D
              institution, where I contributed to the{" "}
              <strong>Personnel Information Management System</strong> — working
              with React, Next.js, Java Spring, and MUI across a real-world
              enterprise environment.
            </p>
            <p>
              Most recently, I worked as a{" "}
              <strong>
                Freelance Software Engineer at Omreon Bilişim Teknolojileri
              </strong>
              , building production-grade web applications end-to-end — from
              responsive frontends to scalable backend services.
            </p>

            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-num">3.41</div>
                <div className="stat-label">GPA / 4.00</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">3rd</div>
                <div className="stat-label">Dept. Rank</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">6+</div>
                <div className="stat-label">Projects Shipped</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">75</div>
                <div className="stat-label">YDS English</div>
              </div>
            </div>

            <div className="about-info">
              <div className="info-row">
                <span className="info-label">LOCATION</span>
                <span className="info-val">Balıkesir, Turkey</span>
              </div>
              <div className="info-row">
                <span className="info-label">EMAIL</span>
                <span className="info-val">
                  <a
                    href="mailto:kadirleventkabadayi@gmail.com"
                    style={{
                      color: "var(--accent)",
                      transition: "opacity 0.2s",
                    }}
                  >
                    kadirleventkabadayi@gmail.com
                  </a>
                </span>
              </div>
              <div className="info-row">
                <span className="info-label">EDU</span>
                <span className="info-val">Erciyes University, CS Eng.</span>
              </div>
              <div className="info-row">
                <span className="info-label">LANGUAGE</span>
                <span className="info-val">
                  Turkish (native) · English (upper-intermediate)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Skills ─────────────────────────────────────────── */
const skillCategories = [
  {
    icon: "⚛️",
    name: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML & CSS",
      "Redux",
      "Jotai",
      "Context API",
      "Axios",
    ],
  },
  {
    icon: "🎨",
    name: "UI & Styling",
    skills: ["Tailwind CSS", "Material UI", "Ant Design", "Bootstrap"],
  },
  {
    icon: "🖥️",
    name: "Backend",
    skills: ["Node.js", "Express.js", "Java", "Spring Boot", "REST APIs"],
  },
  {
    icon: "🗄️",
    name: "Database & Cloud",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    icon: "🛠️",
    name: "Tools & Other",
    skills: ["Git", "GitHub", "i18n", "Responsive Design", "Game Development"],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div
          className="reveal"
          style={{ textAlign: "center", marginBottom: 0 }}
        >
          <span className="section-label">Skills</span>
          <h2 className="section-title">Technologies I work with</h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            A versatile stack spanning frontend, backend, and everything in
            between.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.name}
              className={`skill-category reveal delay-${Math.min(i + 1, 6)}`}
            >
              <span className="skill-cat-icon">{cat.icon}</span>
              <div className="skill-cat-name">{cat.name}</div>
              <div className="skill-tags">
                {cat.skills.map((s) => (
                  <span key={s} className="skill-tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Experience ─────────────────────────────────────── */
const experiences = [
  {
    emoji: "💼",
    company: "Omreon Bilişim Teknolojileri",
    role: "Freelance Software Engineer",
    date: "Jan 2026 — Apr 2026",
    desc: "Built production-grade web applications as a freelance engineer. Delivered complete solutions independently, working across the full stack with modern tooling.",
    tags: ["React", "Next.js", "TypeScript", "Node.js"],
  },
  {
    emoji: "🔬",
    company: "TÜBİTAK BİLGEM YTE",
    role: "Software Engineering Intern",
    date: "Jul 2024 — Sep 2024",
    desc: "Contributed to the Personnel Information Management System at Turkey's premier scientific research institution. Worked on dynamic routing, state management with Jotai, and secure API development with Java Spring.",
    tags: ["React", "Next.js", "Java Spring", "MUI", "Jotai", "Axios"],
  },
  {
    emoji: "🚀",
    company: "Girişimcilik ve Savunma Sanayi Topluluğu",
    role: "Founding Member",
    date: "Mar 2024 — Jul 2025",
    desc: "Co-founded an entrepreneurship and defense industry community. Organized events, mentored peers, and fostered collaboration between students and industry professionals.",
    tags: ["Entrepreneurship", "Community Building"],
  },
];

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Where I've worked</h2>
          <p className="section-desc">
            From internships at research institutions to freelance production
            work.
          </p>
        </div>

        <div className="experience-grid">
          {experiences.map((exp, i) => (
            <div key={exp.company} className={`exp-item reveal delay-${i + 1}`}>
              <div className="exp-dot">{exp.emoji}</div>
              <div className="exp-content">
                <div className="exp-meta">
                  <div className="exp-company">{exp.company}</div>
                  <div className="exp-date">{exp.date}</div>
                </div>
                <div className="exp-role">{exp.role}</div>
                <p className="exp-desc">{exp.desc}</p>
                <div className="exp-tags">
                  {exp.tags.map((t) => (
                    <span key={t} className="exp-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Projects ───────────────────────────────────────── */
const projects = [
  {
    icon: "🏍️",
    name: "Riders Club – Admin Dashboard",
    desc: "Fully responsive admin dashboard for the Riders Club social media platform. Supports i18n (EN/TR/AR), data visualization, analytics, and social media management. Built end-to-end independently.",
    tech: ["Next.js", "TypeScript", "MUI", "Jotai", "Axios", "i18n"],
    github: null,
    live: null,
  },
  {
    icon: "🏛️",
    name: "TÜBİTAK Personnel System",
    desc: "Enterprise-grade personnel information management system with dynamic page routing, secure authentication, and efficient state management — built during internship at TÜBİTAK BİLGEM.",
    tech: ["React", "Next.js", "Java Spring", "MUI", "Jotai", "Axios"],
    github: null,
    live: null,
  },
  {
    icon: "🤖",
    name: "AI Content Creator",
    desc: "AI-powered social media automation tool. Automatically generates and schedules posts based on user-defined criteria, posting to relevant platforms.",
    tech: ["TypeScript", "Next.js", "MUI"],
    github: "https://github.com/Kadirleventkabadayi/Erciyes-AI-Content-Creator",
    live: null,
  },
  {
    icon: "📚",
    name: "Library App",
    desc: "Feature-rich library management app with React Router navigation, Redux + Context API state management, and Firebase real-time database for authentication and live updates.",
    tech: ["React", "Redux", "Context API", "Firebase", "React Router"],
    github: "https://github.com/Kadirleventkabadayi/my-library",
    live: null,
  },
  {
    icon: "🍔",
    name: "Food Order App",
    desc: "Seamless food ordering web application with cart management and order placement, powered by React and Firebase for real-time data syncing.",
    tech: ["React", "Firebase"],
    github: "https://github.com/Kadirleventkabadayi/food-with-firebase",
    live: null,
  },
  {
    icon: "📊",
    name: "Admin Dashboard",
    desc: "Responsive admin dashboard with interactive data visualization charts, data tables, and a full product management page — built with React and Bootstrap.",
    tech: ["React", "Bootstrap", "Charts"],
    github: "https://github.com/Kadirleventkabadayi/admin-dashboard",
    live: null,
  },
  {
    icon: "✅",
    name: "Task Management App",
    desc: "Real-time task management system with separate admin and user interfaces. Users complete tasks, admins review and approve — with inline comments and status workflows.",
    tech: ["React", "Node.js", "Express"],
    github: "https://github.com/Kadirleventkabadayi/Task-Management-Project",
    live: null,
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="reveal" style={{ textAlign: "center" }}>
          <span className="section-label">Projects</span>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            From enterprise dashboards to AI-powered tools — a selection of my
            recent work.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className={`project-card reveal delay-${(i % 3) + 1}`}
            >
              <div className="project-header">
                <span className="project-icon">{p.icon}</span>
                <div className="project-links">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      title="GitHub"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      title="Live"
                    >
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>

              <div className="project-name">{p.name}</div>
              <p className="project-desc">{p.desc}</p>

              <div className="project-tech">
                {p.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Contact ────────────────────────────────────────── */
function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const mailto = `mailto:kadirleventkabadayi@gmail.com?subject=${encodeURIComponent(data.get("subject") || "Portfolio Contact")}&body=${encodeURIComponent(`From: ${data.get("name")}\n\n${data.get("message")}`)}`;
    window.location.href = mailto;
    setStatus("Redirecting to your mail client...");
    form.reset();
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="reveal" style={{ marginBottom: 56 }}>
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's build something great</h2>
          <p className="section-desc">
            Open to full-time opportunities, freelance projects, and interesting
            collaborations.
          </p>
        </div>

        <div className="contact-inner">
          <form className="contact-form reveal-left" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">NAME</label>
              <input
                name="name"
                className="form-input"
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">EMAIL</label>
              <input
                name="email"
                type="email"
                className="form-input"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">SUBJECT</label>
              <input
                name="subject"
                className="form-input"
                placeholder="What's this about?"
              />
            </div>
            <div className="form-group">
              <label className="form-label">MESSAGE</label>
              <textarea
                name="message"
                className="form-textarea"
                placeholder="Tell me about your project or opportunity..."
                required
              />
            </div>
            <button
              type="submit"
              className="btn-primary"
              style={{ alignSelf: "flex-start" }}
            >
              Send Message →
            </button>
            {status && (
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  color: "var(--accent)",
                }}
              >
                {status}
              </p>
            )}
          </form>

          <div className="contact-info reveal-right">
            <div className="contact-info-title">Get in touch directly</div>
            <p className="contact-info-text">
              Whether you have a project in mind, want to discuss a role, or
              just want to say hi — my inbox is always open.
            </p>

            <div className="contact-links">
              <a
                href="mailto:kadirleventkabadayi@gmail.com"
                className="contact-link-item"
              >
                <MailIcon />
                kadirleventkabadayi@gmail.com
              </a>
              <a href="tel:+905435817989" className="contact-link-item">
                <PhoneIcon />
                +90 543 581 7989
              </a>
              <a
                href="https://github.com/Kadirleventkabadayi"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
              >
                <GithubIcon />
                github.com/Kadirleventkabadayi
              </a>
              <a
                href="https://www.linkedin.com/in/kadir-levent-kabadayi/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
              >
                <LinkedinIcon />
                linkedin.com/in/KadirLeventKabadayı
              </a>
            </div>

            <div
              className="stat-card"
              style={{ marginTop: 24, borderColor: "rgba(0,229,200,0.2)" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--accent)",
                  marginBottom: 8,
                  letterSpacing: "0.08em",
                }}
              >
                🏆 AWARD
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "var(--text)",
                  fontWeight: 500,
                  marginBottom: 4,
                }}
              >
                Certificate of High Honor
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--text-muted)",
                  marginBottom: 12,
                }}
              >
                Erciyes University, Faculty of Engineering
                <br />
                Fall Semester 2025
              </div>

              {/* Doğrulama Alanı */}
              <div
                style={{
                  paddingTop: 12,
                  borderTop: "1px solid var(--border-subtle)",
                  fontSize: 12,
                }}
              >
                <div style={{ marginBottom: 8 }}>
                  <a
                    href="https://bd.erciyes.edu.tr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--accent)",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    Verification Service ↗
                  </a>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "12px",
                    color: "var(--text-muted)",
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: 10,
                        display: "block",
                        color: "var(--text-dim)",
                        textTransform: "uppercase",
                      }}
                    >
                      Verification Code
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--text)",
                      }}
                    >
                      786F38B3
                    </span>
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: 10,
                        display: "block",
                        color: "var(--text-dim)",
                        textTransform: "uppercase",
                      }}
                    >
                      Pin Code
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--text)",
                      }}
                    >
                      8229
                    </span>
                  </div>
                </div>

                <div style={{ marginTop: 8 }}>
                  <span
                    style={{
                      fontSize: 10,
                      color: "var(--text-dim)",
                      textTransform: "uppercase",
                      display: "block",
                    }}
                  >
                    Student ID
                  </span>
                  <span style={{ color: "var(--text)" }}>1030510123</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ─────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-left">
            Built with <span>Next.js</span> · Designed by{" "}
            <span>Kadir Levent Kabadayı</span>
          </div>
          <div className="footer-right">
            © {new Date().getFullYear()} · All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── Page ───────────────────────────────────────────── */
export default function Page() {
  useReveal();

  return (
    <>
      {/*
        AmongUs is rendered OUTSIDE <main>.
        This is critical — <main> has z-index: 4 which creates a
        stacking context that would trap AmongUs above all content.
        Being a sibling of <main>, AmongUs can use z-index: 2
        to sit between the glow (z:1) and grid (z:3) — behind everything.
      */}
      <AmongUs />
      <main>
        <Navbar />
        <Hero />
        <div className="gradient-divider" />
        <About />
        <div className="gradient-divider" />
        <Skills />
        <div className="gradient-divider" />
        <Experience />
        <div className="gradient-divider" />
        <Projects />
        <div className="gradient-divider" />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
