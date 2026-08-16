import { ShieldCheck, Zap, Cpu, Code2, ArrowUpRight, Lock } from "lucide-react";
import Reveal from "../components/Reveal";
import { sounds } from "../utils/audio";
import "../styles/whyme.css";

function WhyMe({ onOpenNetModal }) {
  return (
    <section id="whyme" className="whyme section">
      <div className="container">
        <Reveal>
          <div className="section-header-center">
            <p className="section-tag">WHY WORK WITH ME</p>
            <h2 className="section-title">Core Value Propositions</h2>
            <p className="section-text">
              Combining modern frontend craftsmanship with rigorous cloud engineering and cybersecurity principles.
            </p>
          </div>
        </Reveal>

        <div className="bento-grid">
          {/* Bento Card 1: Large Featured - Security & Cloud */}
          <Reveal delay={0.1}>
            <div className="bento-card bento-large security-card">
              <div className="bento-badge">
                <ShieldCheck size={14} />
                <span>Specialization</span>
              </div>
              <div className="bento-icon-glow">
                <Lock size={32} />
              </div>
              <h3>Cloud Technology & Network Security</h3>
              <p>
                Engineered with deep focus on VPN tunneling, NAT routing protocols, and secure network infrastructure. Computer Science background specialized in defense-in-depth web architectures.
              </p>

              <div className="bento-action-row">
                <button
                  className="bento-launch-btn"
                  onClick={() => {
                    sounds.playOpen();
                    onOpenNetModal();
                  }}
                  onMouseEnter={() => sounds.playHover()}
                >
                  <Cpu size={15} />
                  <span>Launch Interactive Topology Simulator</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </Reveal>

          {/* Bento Card 2: Full Stack Engineering */}
          <Reveal delay={0.2}>
            <div className="bento-card">
              <div className="bento-icon-wrap">
                <Code2 size={24} />
              </div>
              <h3>Scalable Full-Stack Engineering</h3>
              <p>
                Building maintainable, high-throughput React applications backed by robust Node.js and MongoDB REST APIs.
              </p>
              <div className="bento-tags">
                <span className="mini-tag">React 19</span>
                <span className="mini-tag">Vite</span>
                <span className="mini-tag">Node.js</span>
              </div>
            </div>
          </Reveal>

          {/* Bento Card 3: Performance & UX */}
          <Reveal delay={0.3}>
            <div className="bento-card">
              <div className="bento-icon-wrap">
                <Zap size={24} />
              </div>
              <h3>60FPS Ultra Performance & Micro UX</h3>
              <p>
                Smooth Lenis scrolling, Framer Motion transitions, responsive typography, and crisp zero-lag interaction state feedback.
              </p>
              <div className="bento-metric">
                <span className="metric-val">100</span>
                <span className="metric-lbl">Lighthouse Score Focus</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default WhyMe;