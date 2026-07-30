import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";

function About() {
  return (
    <section id="about" className="about">

      <SectionTitle
        title="About"
        subtitle="More Than Just Code"
      />

      <div className="about-container">
        <Reveal>

        <div className="about-left">

          <h3>
            Building modern digital experiences with clean design and powerful code.
          </h3>

          <p>
            I'm Krrish Joshi, a Computer Science student specializing in
            Cloud Technology & Information Security.

            My focus is creating websites that are fast,
            beautiful and user friendly.
          </p>

        </div>
        </Reveal>

        <Reveal delay={0.2}>

        <div className="about-right">

          <div className="stat-card">

            <h2>2+</h2>

            <p>Years Learning</p>

          </div>

          <div className="stat-card">

            <h2>10+</h2>

            <p>Projects</p>

          </div>

          <div className="stat-card">

            <h2>Cloud</h2>

            <p>Specialization</p>

          </div>

          <div className="stat-card">

            <h2>CSE</h2>

            <p>B.Tech</p>

          </div>

        </div>
        </Reveal>

      </div>

    </section>
  );
}

export default About;