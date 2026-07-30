import "../styles/contact.css";
import Reveal from "../components/Reveal";

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">

        <Reveal>

          <p className="section-tag">CONTACT</p>

          <h2 className="section-title">
            Let's Work Together
          </h2>

          <p className="section-text">
            Have a project or an opportunity?
            I'd love to hear from you.
          </p>

        </Reveal>

        <Reveal delay={0.2}>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button
              className="primary-btn"
            >
              Send Message
            </button>

          </form>

        </Reveal>

      </div>
    </section>
  );
}

export default Contact;