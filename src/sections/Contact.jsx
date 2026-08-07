import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";
import Reveal from "../components/Reveal";

const contactInfo = [
  {
    title: "Email",
    value: "joshikrrish196@gmail.com",
  },
  {
    title: "GitHub",
    value: "https://github.com/KrrishJoshi19",
  },
  {
    title: "LinkedIn",
    value: "https://linkedin.com/in/KrrishJoshi",
  },
  {
    title: "Location",
    value: "Yamuna Nagar, Haryana",
  },
];

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");

        form.current.reset();

        setLoading(false);

        setTimeout(() => {
          setStatus("");
        }, 3000);
      })
      .catch((error) => {
        console.error(error);

        setStatus("error");

        setLoading(false);

        setTimeout(() => {
          setStatus("");
        }, 3000);
      });
  };
  return (
    <section id="contact" className="contact section">
      <div className="container">
        {status === "success" && (
          <div className="toast success">
            ✅ Message sent successfully!
          </div>
        )}

        {status === "error" && (
          <div className="toast error">
            ❌ Failed to send message.
          </div>
        )}

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

            <form
              ref={form}
              onSubmit={sendEmail}
              className="contact-form"
            >

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
                  name="from_name"
                  placeholder="Enter your name"
                  required
                />

              </div>

              <div className="form-group">

                <label>
                  Email
                </label>

                <input
                  type="email"
                  name="from_email"
                  placeholder="Enter your email"
                  required
                />

              </div>

              <div className="form-group">

                <label>
                  Message
                </label>

                <textarea
                  rows="6"
                  name="message"
                  placeholder="Write your message..."
                  required
                ></textarea>

              </div>

              <button
                type="submit"
                className="primary-btn contact-submit"
              >

                {loading ? "Sending..." : "Send Message"}

              </button>

            </form>

          </Reveal>

        </div>

      </div>
    </section>
  );
}

export default Contact;