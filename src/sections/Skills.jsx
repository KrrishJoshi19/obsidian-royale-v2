import { useState } from "react";
import Reveal from "../components/Reveal";
import { sounds } from "../utils/audio";
import "../styles/skills.css";

const skillCategories = ["All", "Frontend", "Cloud & Security", "Backend & Tools"];

const skillsData = [
  {
    name: "React 19 & Vite",
    category: "Frontend",
    level: 90,
    emoji: "⚛️",
    desc: "Component architecture, hooks, state management & Vite tooling",
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    level: 92,
    emoji: "💛",
    desc: "Asynchronous JS, Promises, ES modules & DOM optimization",
  },
  {
    name: "VPN & NAT Protocols",
    category: "Cloud & Security",
    level: 88,
    emoji: "🛡️",
    desc: "IPSec/IKEv2 tunneling, Cisco Packet Tracer topology & NAT translation",
  },
  {
    name: "Cloud Infrastructure",
    category: "Cloud & Security",
    level: 84,
    emoji: "☁️",
    desc: "B.Tech specialization in Cloud Architecture & Virtualization",
  },
  {
    name: "Python",
    category: "Backend & Tools",
    level: 80,
    emoji: "🐍",
    desc: "Automation scripting, backend API logic & network utilities",
  },
  {
    name: "Node.js & Express",
    category: "Backend & Tools",
    level: 82,
    emoji: "🟢",
    desc: "RESTful API microservices & backend server workflows",
  },
  {
    name: "MongoDB",
    category: "Backend & Tools",
    level: 78,
    emoji: "🍃",
    desc: "NoSQL document schema design & CRUD operations",
  },
  {
    name: "UI/UX & CSS Architecture",
    category: "Frontend",
    level: 94,
    emoji: "🎨",
    desc: "Glassmorphism, custom CSS variables, keyframe animations & Lenis smooth scroll",
  },
];

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <Reveal>
          <div className="section-header-center">
            <p className="section-tag">SKILLS MATRIX</p>
            <h2 className="section-title">Technical Expertise</h2>
            <p className="section-text">
              Specialized tools and technologies I leverage to architect secure, scalable digital solutions.
            </p>

            {/* Category Filter Tabs */}
            <div className="skills-tabs">
              {skillCategories.map((cat) => (
                <button
                  key={cat}
                  className={`skill-tab-btn ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => {
                    sounds.playClick();
                    setActiveCategory(cat);
                  }}
                  onMouseEnter={() => sounds.playHover()}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="skills-matrix-grid">
          {filteredSkills.map((skill, index) => (
            <Reveal key={skill.name} delay={index * 0.08}>
              <div
                className="skill-matrix-card"
                onMouseEnter={() => sounds.playHover()}
              >
                <div className="skill-card-top">
                  <span className="skill-emoji-badge">{skill.emoji}</span>
                  <span className="skill-cat-pill">{skill.category}</span>
                </div>

                <h3>{skill.name}</h3>
                <p className="skill-desc">{skill.desc}</p>

                <div className="skill-progress-wrap">
                  <div className="skill-progress-header">
                    <span>Proficiency</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-progress-track">
                    <div
                      className="skill-progress-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;