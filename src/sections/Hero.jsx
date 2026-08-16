import { useState, useEffect } from "react";
import { ArrowRight, Download, Sparkles, Code2, ShieldCheck, Cpu, Terminal, Clock, Shield } from "lucide-react";
import Reveal from "../components/Reveal";
import { sounds } from "../utils/audio";
import "../styles/hero.css";

function Hero() {
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true };
      setTimeString(now.toLocaleTimeString("en-US", options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setCardTilt({ x: -(y / 15), y: x / 15 });
  };

  const handleMouseLeave = () => {
    setCardTilt({ x: 0, y: 0 });
  };

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
          <div className="hero-tag-row">
            <div className="hero-tag">
              <span className="tag-dot"></span>
              <Sparkles className="tag-icon" size={14} />
              <span>FULL STACK ENGINEER • CLOUD & SECURITY</span>
            </div>

            <div className="hero-clock-badge">
              <Clock size={13} className="clock-icon" />
              <span>{timeString || "IST (UTC+5:30)"}</span>
            </div>
          </div>

          <h1>
            Crafting
            <br />
            <span>Architectural</span>
            <br />
            Digital Security & Web
          </h1>

          <p className="hero-description">
            Building high-performance web applications focused on <span className="highlight">scalability</span>, <span className="highlight">cloud infrastructure</span>, and modern <span className="highlight">network security</span>.
          </p>

          <div className="hero-terminal-marquee">
            <Terminal size={14} className="term-icon" />
            <span className="term-prompt">$ npx krrish-joshi</span>
            <span className="term-args">--specialization="Cloud Tech & Security"</span>
          </div>

          <div className="hero-buttons">
            <a
              href="#projects"
              className="primary-btn"
              onClick={() => sounds.playClick()}
              onMouseEnter={() => sounds.playHover()}
            >
              <span>Explore Projects</span>
              <ArrowRight size={18} className="btn-icon" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
              onClick={() => sounds.playClick()}
              onMouseEnter={() => sounds.playHover()}
            >
              <Download size={18} className="btn-icon" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.25}>
        <div className="hero-right">
          <div
            className="profile-card 3d-tilt"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg)`,
            }}
          >
            <div className="card-badge">
              <span className="badge-pulse"></span>
              <span>Available for Hire</span>
            </div>

            <div className="hero-photo">
              <img src="/images/profile.png" alt="Krrish Joshi" />
              <div className="photo-ring"></div>
            </div>

            <h3>Krrish Joshi</h3>
            <p className="role">B.Tech CSE • Cloud & Security Specialist</p>

            <div className="card-text">
              <span className="skill-chip" onMouseEnter={() => sounds.playHover()}>
                <Code2 size={13} /> React / Node
              </span>
              <span className="skill-chip" onMouseEnter={() => sounds.playHover()}>
                <Cpu size={13} /> Cloud Infra
              </span>
              <span className="skill-chip" onMouseEnter={() => sounds.playHover()}>
                <ShieldCheck size={13} /> VPN & NAT
              </span>
            </div>
          </div>
        </div>
      </Reveal>

      <a
        href="#whyme"
        className="scroll-indicator"
        aria-label="Scroll down"
        onClick={() => sounds.playClick()}
      >
        <span></span>
        <span className="scroll-text">EXPLORE</span>
      </a>
    </section>
  );
}

export default Hero;