import { ArrowRight, Download, Sparkles, Code2, ShieldCheck, Cpu } from "lucide-react";
import Reveal from "../components/Reveal";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-bg-grid"></div>
        <div className="hero-bg-orb orb-1"></div>
        <div className="hero-bg-orb orb-2"></div>
        <div className="hero-bg-orb orb-3"></div>
      </div>

      <Reveal>
        <div className="hero-left">
          <div className="hero-tag">
            <span className="tag-dot"></span>
            <Sparkles className="tag-icon" size={14} />
            <span>FULL STACK ENGINEER • CLOUD & SECURITY</span>
          </div>

          <h1>
            Crafting
            <br />
            <span>Premium</span>
            <br />
            Digital Experiences
          </h1>

          <p className="hero-description">
            Building high-performance web applications focused on <span className="highlight">scalability</span>, <span className="highlight">cloud infrastructure</span>, and modern security.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              <span>View Projects</span>
              <ArrowRight size={18} className="btn-icon" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              <Download size={18} className="btn-icon" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="hero-right">
          <div className="profile-card">
            <div className="card-badge">
              <span className="badge-pulse"></span>
              <span>Available for Hire</span>
            </div>

            <div className="hero-photo">
              <img src="/images/profile.png" alt="Krrish Joshi" />
              <div className="photo-ring"></div>
            </div>

            <h3>Krrish Joshi</h3>

            <p className="role">Full Stack Developer</p>

            <div className="card-text">
              <span className="skill-chip"><Code2 size={13} /> React</span>
              <span className="skill-chip"><Cpu size={13} /> Cloud</span>
              <span className="skill-chip"><ShieldCheck size={13} /> Security</span>
            </div>
          </div>
        </div>
      </Reveal>

      <a href="#about" className="scroll-indicator" aria-label="Scroll down">
        <span></span>
        <span className="scroll-text">SCROLL</span>
      </a>
    </section>
  );
}

export default Hero;