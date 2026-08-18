import Reveal from "../components/Reveal";
import { GraduationCap, ShieldCheck, Code, Award } from "lucide-react";
import { sounds } from "../utils/audio";
import "../styles/timeline.css";

const milestones = [
  {
    year: "2024 - Present",
    title: "B.Tech in Computer Science Engineering",
    subtitle: "Specialization in Cloud Technology & Information Security",
    icon: GraduationCap,
    desc: "Focusing on Cloud Architecture, Distributed Systems, Network Protocols (VPN, NAT), and Web Security standards.",
    highlights: ["Cloud Infrastructure", "Network Security", "Data Structures"],
  },
  {
    year: "2025",
    title: "Network Security & VPN/NAT Simulation Project",
    subtitle: "Cisco Packet Tracer Architecture",
    icon: ShieldCheck,
    desc: "Designed secure multi-branch network topology with IPSec VPN tunnels and NAT address translation for enterprise isolation.",
    highlights: ["Cisco Packet Tracer", "VPN Tunnels", "NAT"],
  },
  {
    year: "2025 - 2026",
    title: "MediLab Pathology & Healthcare Platform",
    subtitle: "Full Stack Web Development",
    icon: Code,
    desc: "Engineered full-stack digital laboratory booking system with responsive medical reports management and cloud backend integration.",
    highlights: ["React", "Node.js", "MongoDB"],
  },
  {
    year: "2026 - Present",
    title: "Personal Portfolio",
    subtitle: "Modern Creative Web Engineering",
    icon: Award,
    desc: "Designed and developed ultra-creative glassmorphic web applications with dynamic audio feedback, command palette CLI, and 60fps animations.",
    highlights: ["Vite", "Web Audio API", "Framer Motion"],
  },
];

function Timeline() {
  return (
    <section id="timeline" className="timeline section">
      <div className="container">
        <Reveal>
          <div className="section-header-center">
            <p className="section-tag">JOURNEY & MILESTONES</p>
            <h2 className="section-title">Education & Experience</h2>
            <p className="section-text">
              My academic timeline, cybersecurity projects, and full-stack software development journey.
            </p>
          </div>
        </Reveal>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          {milestones.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.12}>
                <div
                  className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                  onMouseEnter={() => sounds.playHover()}
                >
                  <div className="timeline-node">
                    <IconComponent size={16} />
                  </div>

                  <div className="timeline-card">
                    <span className="timeline-year">{item.year}</span>
                    <h3>{item.title}</h3>
                    <h4 className="timeline-subtitle">{item.subtitle}</h4>
                    <p>{item.desc}</p>

                    <div className="timeline-chips">
                      {item.highlights.map((h) => (
                        <span key={h} className="timeline-chip">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
