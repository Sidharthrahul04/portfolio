import React, { useState } from 'react';

const ProfileComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState('');

  const skills = {
    programming: ['C', 'Python', 'PHP', 'Java'],
    web: ['HTML', 'CSS'],
    databases: ['SQL', 'PL/SQL', 'MongoDB'],
    tools: ['Git', 'VS Code', 'Linux & Bash'],
  };

  const projects = [
    {
      title: 'ProjMate: AI-Powered Student Skill–Project Matching',
      timeframe: 'Academic Project',
      description:
        'Platform where students upload resumes and institutions post projects. Uses NLP to extract skills, perform sentiment analysis, and match students to relevant projects.',
      tech: ['PHP', 'MySQL', 'Python', 'TextBlob', 'JavaScript'],
    },
    {
      title: 'Real-Time Cigarette Smoking Detection System',
      timeframe: 'Mini Project',
      description:
        'Deep-learning based system that detects cigarette smoking in real-time video streams and triggers automated alerts.',
      tech: ['Python', 'TensorFlow Lite', 'OpenCV', 'Deep Learning'],
    },
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields before sending.');
      return;
    }

    setStatus('Thanks for reaching out! I’ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(false);
  };

  const hasError = (field) => submitted && !formData[field];

  return (
    <div className="portfolio">
      {/* ===== NAVBAR ===== */}
      <header className="navbar">
        <div className="nav-left">
          <span className="brand-mark">SR</span>
          <span className="nav-title">
            Sidharth<span>Rahul</span>
          </span>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-text">
          <p className="hero-kicker">MCA Student • Developer</p>
          <h1>
            Building <span>practical</span> projects that actually ship.
          </h1>
          <p className="hero-subtitle">
            I’m an MCA student from Kerala who enjoys turning ideas into working
            systems from AI-based matching platforms to computer-vision
            projects. just real, usable work.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <a href="#contact" className="btn ghost">
              Let&apos;s Collaborate
            </a>
          </div>

          <div className="hero-meta">
            <div>
              <span className="meta-label">Location</span>
              <span>Palakkad, Kerala, India</span>
            </div>
            <div>
              <span className="meta-label">Focus</span>
              <span>Backend, Databases & Automation</span>
            </div>
            <div>
              <span className="meta-label">Currently</span>
              <span>MCA @ RIT Kottayam</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="avatar-circle">
            <img
              src="/myself.jpg"
              alt="Sidharth Rahul"
              className="avatar-photo"
            />
          </div>
          <p className="hero-role">Aspiring Software / Database Engineer</p>
          <p className="hero-tagline">
            Strong with databases and backend logic, comfortable with scripting,
            and obsessed with clean, maintainable code.
          </p>
          <div className="hero-contact">
            <a href="tel:+918138823167" className="chip">
              📞 +91 81388 23167
            </a>
            <a href="mailto:sidharthrahul1@gmail.com" className="chip">
              ✉️ sidharthrahul1@gmail.com
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="chip"
            >
              🔗 LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="section about-section">
        <div className="about-layout">
          <div className="about-text-block">
            <h2>POROFILE</h2>
            <p className="section-intro">
              I like projects that feel real where something moves, detects,
              predicts, or automates. I’m currently sharpening my skills in
              backend development, databases, and scripting so I can contribute
              to systems that are fast, reliable, and don’t fall apart in
              production.
            </p>
            <p className="section-intro about-extra">
              Outside of code, I enjoy exploring new tools, tweaking side
              projects, and learning how real products are designed, launched,
              and scaled.
            </p>
          </div>

          <div className="about-photo-shell">
            <div className="about-photo-ring">
              <img
                src="/me.jpg"
                alt="Sidharth Rahul"
                className="about-photo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS (ONLY TECH) ===== */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="grid two">
          <div className="card">
            <h3>Tech Stack I Use</h3>
            <div className="tag-group">
              <p className="tag-label">Programming</p>
              <div className="tag-row">
                {skills.programming.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>

              <p className="tag-label">Web</p>
              <div className="tag-row">
                {skills.web.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>

              <p className="tag-label">Databases</p>
              <div className="tag-row">
                {skills.databases.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>

              <p className="tag-label">Tools & Scripting</p>
              <div className="tag-row">
                {skills.tools.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="card">
            <h3>What I&apos;m Focusing On</h3>
            <ul className="bullet-list">
              <li>Designing database schemas that are actually scalable.</li>
              <li>Writing backend logic that is readable and easy to extend.</li>
              <li>Automating boring tasks using scripts and simple tools.</li>
              <li>
                Learning best practices from real-world systems, not just theory.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <p className="section-intro">
          A few things I&apos;ve built or contributed to. I prefer projects that
          mix data, automation, and real-world use cases.
        </p>
        <div className="grid two">
          {projects.map((project) => (
            <article key={project.title} className="card project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="pill">{project.timeframe}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="tag-row">
                {project.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== CONTACT / FOOTER ===== */}
      <section id="contact" className="section contact-section">
        <h2>Contact</h2>
        <p className="section-intro">
          Have an internship, project, or idea you want help with? Drop a
          message — I usually reply faster than most code compiles.
        </p>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className={`input-field ${hasError('name') ? 'error' : ''}`}
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className={`input-field ${hasError('email') ? 'error' : ''}`}
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className={`textarea-field ${
                hasError('message') ? 'error' : ''
              }`}
              rows="4"
              placeholder="Tell me a bit about what you’re looking for…"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn primary full">
            Send Message
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>

        {/* ICONS CENTERED */}
        <div className="social-row">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              className="social-icon"
            />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="social-icon"
            />
          </a>
        </div>

        <p className="footer">
          © {new Date().getFullYear()} Built with patience, coffee, and a lot of
          console.logs by <strong>Sidharth Rahul</strong>.
        </p>
      </section>
    </div>
  );
};

export default ProfileComponent;