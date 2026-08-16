import { useState } from "react";
import { Code2, ExternalLink, ShieldCheck, Eye, X, Layers, Cpu } from "lucide-react";
import Reveal from "../components/Reveal";
import { sounds } from "../utils/audio";
import "../styles/projects.css";

const projectCategories = ["All", "Full-Stack Web", "Cloud & Security"];

const projects = [
  {
    title: "MediLab Pathology Platform",
    category: "Full-Stack Web",
    description:
      "Modern healthcare laboratory booking & report management platform. Designed to simplify test scheduling, digital medical report management, and workflow automation with responsive UI.",
    tech: ["React 19", "Node.js", "MongoDB", "Express", "REST API"],
    image: "/images/project3.jpg",
    github: "https://github.com/KrrishJoshi19",
    live: "https://medilab-jw45.onrender.com/",
    features: [
      "Digital report storage & instant PDF export",
      "Interactive test booking calendar & cart system",
      "Admin workflow management panel",
    ],
  },
  {
    title: "Network Security via VPN & NAT",
    category: "Cloud & Security",
    description:
      "Enterprise network simulation built in Cisco Packet Tracer. Features IPSec VPN tunneling, NAT routing translation, and perimeter firewall security rules for protected communication.",
    tech: ["Cisco Packet Tracer", "IPSec VPN", "NAT Routing", "Firewall Rules"],
    image: "/images/project2.jpg",
    github: "https://github.com/KrrishJoshi19",
    live: "#",
    isNetworkProject: true,
    features: [
      "IPSec & IKEv2 encrypted site-to-site VPN tunnel",
      "Dynamic NAT address translation gateway",
      "Perimeter firewall ACL security inspection",
    ],
  },
  {
    title: "Obsidian Royale Portfolio v2",
    category: "Full-Stack Web",
    description:
      "Ultra-creative developer portfolio featuring dynamic color theme customizer, Cyber CLI Command Palette (Ctrl+K), Web Audio API sound synthesis, and Lenis smooth scrolling.",
    tech: ["React 19", "Vite", "Web Audio API", "Framer Motion", "Lenis"],
    image: "/images/project1.jpg",
    github: "https://github.com/KrrishJoshi19/portfolio",
    live: "https://krrishjoshi19-kappa.vercel.app/",
    features: [
      "Cyber CLI command palette (Ctrl + K)",
      "Web Audio synthesizer UI sound feedback",
      "Dynamic HSL theme customizer (Gold, Cyan, Violet, Emerald, Sunset)",
    ],
  },
];

function Projects({ onOpenNetModal }) {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <Reveal>
          <div className="section-header-center">
            <p className="section-tag">PORTFOLIO</p>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-text">
              A curated selection of software, cloud infrastructure, and cybersecurity architectures.
            </p>

            <div className="project-tabs">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  className={`project-tab-btn ${activeTab === cat ? "active" : ""}`}
                  onClick={() => {
                    sounds.playClick();
                    setActiveTab(cat);
                  }}
                  onMouseEnter={() => sounds.playHover()}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.15}>
              <div className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-image-overlay">
                    <button
                      className="project-inspect-btn"
                      onClick={() => {
                        sounds.playOpen();
                        setSelectedProject(project);
                      }}
                      onMouseEnter={() => sounds.playHover()}
                    >
                      <Eye size={16} />
                      <span>Inspect Details</span>
                    </button>
                    {project.isNetworkProject && (
                      <button
                        className="project-sim-btn"
                        onClick={() => {
                          sounds.playOpen();
                          onOpenNetModal();
                        }}
                      >
                        <Cpu size={14} />
                        <span>Launch Simulation</span>
                      </button>
                    )}
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-top-row">
                    <span className="project-cat-badge">{project.category}</span>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tech.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-buttons">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="primary-btn"
                      onClick={() => sounds.playClick()}
                      onMouseEnter={() => sounds.playHover()}
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="secondary-btn"
                      onClick={() => sounds.playClick()}
                      onMouseEnter={() => sounds.playHover()}
                    >
                      <Code2 size={16} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="proj-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="proj-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="proj-modal-header">
              <h3>{selectedProject.title}</h3>
              <button
                className="proj-close-btn"
                onClick={() => {
                  sounds.playClick();
                  setSelectedProject(null);
                }}
              >
                <X size={18} />
              </button>
            </div>

            <div className="proj-modal-body">
              <div className="proj-modal-img">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>

              <div className="proj-modal-info">
                <h4>Project Breakdown</h4>
                <p>{selectedProject.description}</p>

                <h4>Key Technical Features</h4>
                <ul className="proj-feature-list">
                  {selectedProject.features.map((feat, i) => (
                    <li key={i}>
                      <Layers size={14} className="feature-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <h4>Technologies Used</h4>
                <div className="project-tags">
                  {selectedProject.tech.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="proj-modal-actions">
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="primary-btn"
                    onClick={() => sounds.playClick()}
                  >
                    <ExternalLink size={16} />
                    <span>Open Application</span>
                  </a>
                  {selectedProject.isNetworkProject && (
                    <button
                      className="secondary-btn"
                      onClick={() => {
                        setSelectedProject(null);
                        onOpenNetModal();
                      }}
                    >
                      <ShieldCheck size={16} />
                      <span>Launch Cisco Simulator</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;