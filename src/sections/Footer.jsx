import "../styles/footer.css";
import { Mail, Linkedin, Code2 } from "lucide-react";

function Footer() {
    return (
        <footer className="footer">

            <div className="container">

                <h2 className="footer-logo">
                    KJ
                </h2>

                <p className="footer-text">
                    Building modern web experiences with
                    React, Cloud & Security.
                </p>

                <div className="footer-links">

                    <a href="https://github.com/KrrishJoshi19" target="_blank">
                        <Code2 size={18} />
                        GitHub
                    </a>

                    <a href="https://linkedin.com/in/KrrishJoshi19" target="_blank">
                        <Linkedin size={18} />
                        LinkedIn
                    </a>

                    <a href="mailto:joshikrrish196@gmail.com">
                        <Mail size={18} />
                        Gmail
                    </a>

                </div>

                <p className="footer-copy">
                    © 2026 Krrish Joshi. All Rights Reserved.
                </p>

            </div>

        </footer>
    );
}

export default Footer;