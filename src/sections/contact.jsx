import "../styles/contact.css";
import Reveal from "../components/Reveal";

const contactInfo = [
  {
    title: "Email",
    value: "yourmail@gmail.com",
  },
  {
    title: "GitHub",
    value: "github.com/KrrishJoshi19",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
  },
  {
    title: "Location",
    value: "Yamuna Nagar, Haryana",
  },
];

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">

        <Reveal>
          <div className="contact-heading">

            <p className="section-tag">
              CONTACT
            </p>

            <h2 className="section-title">
              Let's Work Together
            </h2>

            <p className="section-text">
              Have a project or an opportunity?
              I'd love to hear from you.
            </p>

          </div>
        </Reveal>

        <div className="contact-wrapper">

          <Reveal>

            <div className="contact-info">

              <div className="contact-intro">

                <h3>
                  Get In Touch
                </h3>

                <p>
                  Whether it's a project, internship or collaboration,
                  feel free to contact me anytime.
                </p>

              </div>

              {contactInfo.map((item) => (

                <div
                  className="info-card"
                  key={item.title}
                >

                  <div className="info-icon">
                    {item.title.charAt(0)}
                  </div>

                  <div className="info-content">

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.value}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </Reveal>

          <Reveal delay={0.2}>

            <form className="contact-form">

              <div className="form-heading">

                <h3>
                  Send Message
                </h3>

                <p>
                  Fill out the form below and I'll reply soon.
                </p>

              </div>

              <div className="form-group">

                <label>
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                />

              </div>

              <div className="form-group">

                <label>
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                />

              </div>

              <div className="form-group">

                <label>
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                ></textarea>

              </div>

              <button
                className="primary-btn contact-submit"
                type="submit"
              >
                Send Message
              </button>

            </form>

          </Reveal>

        </div>

      </div>
    </section>
  );
}

export default Contact;