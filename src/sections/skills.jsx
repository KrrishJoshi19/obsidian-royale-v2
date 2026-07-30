import "../styles/skills.css";

const skills = [
  {
    title: "React",
    subtitle: "Modern Frontend Development",
    emoji: "⚛️",
  },
  {
    title: "JavaScript",
    subtitle: "ES6+ Programming",
    emoji: "💛",
  },
  {
    title: "Python",
    subtitle: "Automation & Backend",
    emoji: "🐍",
  },
  {
    title: "Cloud",
    subtitle: "Cloud Technology",
    emoji: "☁️",
  },
  {
    title: "Networking",
    subtitle: "VPN • NAT",
    emoji: "🛡️",
  },
  {
    title: "UI Design",
    subtitle: "Modern Interfaces",
    emoji: "🎨",
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">

      <div className="container">

        <p className="section-tag">SKILLS</p>

        <h2 className="section-title">
          Technologies I Work With
        </h2>

        <p className="section-text">
          I enjoy building modern, scalable and secure
          applications using powerful technologies.
        </p>

        <div className="skills-grid">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="skill-card"
            >

              <div className="skill-emoji">
                {skill.emoji}
              </div>

              <h3>{skill.title}</h3>

              <p>{skill.subtitle}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;