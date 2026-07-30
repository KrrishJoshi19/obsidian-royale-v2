import "../styles/whyme.css";
import Reveal from "../components/Reveal";

const features = [
    {
        number: "01",
        title: "Clean Code",
        description:
            "I build well-structured, maintainable and scalable applications using modern development practices.",
    },
    {
        number: "02",
        title: "Performance",
        description:
            "Focused on responsive UI, smooth interactions and optimized user experience.",
    },
    {
        number: "03",
        title: "Cloud & Security",
        description:
            "Knowledge of Cloud Technology, VPN, NAT and Networking fundamentals.",
    },
];

function WhyMe() {
    return (
        <section id="whyme" className="whyme section">

            <div className="container">

                <p className="section-tag">
                    WHY ME
                </p>

                <h2 className="section-title">
                    What Makes Me Different
                </h2>

                <p className="section-text">
                    I focus on writing quality code, creating premium
                    user experiences and continuously learning modern
                    technologies.
                </p>

                <div className="why-grid">

                    {features.map((item, index) => (


                        <div
                            className="why-card"
                            key={index}
                        >

                            <span className="why-number">
                                {item.number}
                            </span>

                            <h3>{item.title}</h3>

                            <p>{item.description}</p>

                        </div>


                    ))}

                </div>

            </div>

        </section>
    );
}

export default WhyMe;