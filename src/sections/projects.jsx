import "../styles/projects.css";
import Reveal from "../components/Reveal";
import { Code2, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Responsive portfolio showcasing my projects, skills and modern UI development using React and Vite.",
    tech: [ React ]   [ Vite ]   [ CSS ],
    image: "/images/project1.jpg",
    github: "https://github.com/KrrishJoshi19/portfolio",
    live: "https://krrishjoshi19.github.io/Portfolio/"
  },
  {
    title: "Network Security using VPN & NAT",
    description:
      "Secure network simulation built in Cisco Packet Tracer implementing VPN tunneling and NAT for protected communication.",
    tech: ["Cisco", "VPN", "NAT"],
    image: "/images/project2.jpg",
    github: "#",
    live: "#",
  },
  {
    title: "MediLab",
    description:
      "Full-stack laboratory management system with responsive dashboard, patient records and appointment management.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/images/project3.jpg",
    github: "#",
    live: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">

        <p className="section-tag">PROJECTS</p>

        <h2 className="section-title">
          Featured Projects
        </h2>

        <p className="section-text">
          A collection of projects showcasing my
          development, networking and UI skills.
        </p>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <Reveal
              key={index}
              delay={index * 0.15}
            >

              <div className="project-card" key={index}>

                <div className="project-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                </div>

                <div className="project-content">

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
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="secondary-btn"
                    >
                      <Code2 size={18} />
                      <span>GitHub</span>
                    </a>

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

export default Projects;