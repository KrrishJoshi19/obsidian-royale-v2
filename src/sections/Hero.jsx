import Reveal from "../components/Reveal";

function Hero() {
    return (
        <section id="home" className="hero">

            <div className="hero-bg"></div>

            <Reveal>

            <div className="hero-left">
                <p className="hero-tag">
                    FULL STACK ENGINEER • CLOUD & SECURITY
                </p>

                <h1>

                    Crafting

                    <br />

                    <span>Premium</span>

                    <br />

                    Digital Experiences

                </h1>

                <p className="hero-description">

                    Building modern web applications
                    focused on performance,
                    cloud infrastructure and
                    premium user experiences.

                </p>

                <button className="primary-btn">
                    View Projects
                </button>

                <button className="secondary-btn">
                    Download Resume
                </button>
            </div>
            </Reveal>

            <Reveal delay={0.3}>

            <div className="hero-right">
                <div className="profile-card">

                    <div className="hero-photo">

                        <img
                            src="/images/profile.png"
                            alt="Krrish Joshi"
                        />

                    </div>

                    <h3>Krrish Joshi</h3>

                    <p className="role">
                        Full Stack Developer
                    </p>

                </div>
            </div>
            </Reveal>
            <div className="scroll-indicator">
                <span></span>
            </div>

        </section>
    );
}

export default Hero;


