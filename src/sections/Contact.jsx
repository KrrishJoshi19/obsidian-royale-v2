import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Copy, Check, Send } from "lucide-react";
import Reveal from "../components/Reveal";
import { sounds } from "../utils/audio";
import "../styles/contact.css";

function GithubIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const contactCards = [
  {
    title: "Email",
    value: "joshikrrish196@gmail.com",
    icon: Mail,
    copyable: true,
  },
  {
    title: "GitHub",
    value: "https://github.com/KrrishJoshi19",
    display: "@KrrishJoshi19",
    icon: GithubIcon,
    link: "https://github.com/KrrishJoshi19",
  },
  {
    title: "LinkedIn",
    value: "https://linkedin.com/in/KrrishJoshi",
    display: "Krrish Joshi",
    icon: LinkedinIcon,
    link: "https://linkedin.com/in/KrrishJoshi",
  },
  {
    title: "Location",
    value: "Yamuna Nagar, Haryana, India",
    icon: MapPin,
  },
];

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [copiedItem, setCopiedItem] = useState(null);

  const handleCopy = (text, title) => {
    sounds.playSuccess();
    navigator.clipboard.writeText(text);
    setCopiedItem(title);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    sounds.playClick();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        sounds.playSuccess();
        setStatus("success");
        form.current.reset();
        setLoading(false);
        setTimeout(() => setStatus(""), 4000);
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
        setLoading(false);
        setTimeout(() => setStatus(""), 4000);
      });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        {status === "success" && (
          <div className="toast success">
            ✅ Message sent successfully! I'll get back to you soon.
          </div>
        )}

        {status === "error" && (
          <div className="toast error">
            ❌ Failed to send message. Please email joshikrrish196@gmail.com directly.
          </div>
        )}

        <Reveal>
          <div className="section-header-center">
            <p className="section-tag">LET'S CONNECT</p>
            <h2 className="section-title">Start a Conversation</h2>
            <p className="section-text">
              Have an opportunity, security project, or technical inquiry? Feel free to reach out anytime.
            </p>
          </div>
        </Reveal>

        <div className="contact-wrapper">
          <Reveal>
            <div className="contact-info">
              <div className="contact-intro">
                <h3>Contact Touchpoints</h3>
                <p>
                  Click any card to copy contact details or open direct channel links.
                </p>
              </div>

              {contactCards.map((item) => {
                const IconComponent = item.icon;
                const isCopied = copiedItem === item.title;

                return (
                  <div
                    className="info-card interactive"
                    key={item.title}
                    onClick={() => {
                      if (item.copyable) handleCopy(item.value, item.title);
                      else if (item.link) window.open(item.link, "_blank");
                    }}
                    onMouseEnter={() => sounds.playHover()}
                  >
                    <div className="info-icon">
                      <IconComponent size={20} />
                    </div>

                    <div className="info-content">
                      <h3>{item.title}</h3>
                      <p>{item.display || item.value}</p>
                    </div>

                    {item.copyable && (
                      <button className="info-copy-btn" aria-label="Copy to clipboard">
                        {isCopied ? <Check size={16} className="copied" /> : <Copy size={16} />}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-heading">
                <h3>Send Direct Message</h3>
                <p>Fill out your details and I'll respond within 24 hours.</p>
              </div>

              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="e.g. Alex Morgan"
                  required
                />
              </div>

              <div className="form-group">
                <label>Your Email Address</label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="e.g. alex@company.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Your Message</label>
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Tell me about your project, timeline, or inquiry..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="primary-btn contact-submit">
                <Send size={16} />
                <span>{loading ? "Sending Message..." : "Send Message"}</span>
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;