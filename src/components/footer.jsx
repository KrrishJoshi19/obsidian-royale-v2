import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <h2>
          Ready to Build Something Amazing?
        </h2>

        <p>
          Let's connect and create something meaningful together.
        </p>

        <a
          href="#contact"
          className="primary-btn"
        >
          Let's Connect
        </a>

        <div className="footer-bottom">

          <p>
            © 2026 Krrish Joshi. All Rights Reserved.
          </p>

          <span>
            Designed & Developed with ❤️ using React
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;