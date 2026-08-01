import { useEffect, useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < bottom
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "header scrolled" : "header"}>

      <nav>

        <div className="logo">
          <span>KJ</span>
        </div>

        <ul>

          {navLinks.map((item) => (

            <li key={item}>

              <a
                href={`#${item.toLowerCase()}`}
                className={
                  activeSection === item.toLowerCase()
                    ? "active"
                    : ""
                }
              >
                {item}
              </a>

            </li>

          ))}

        </ul>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="resume-btn"
        >
          Resume
        </a>

      </nav>

    </header>
  );
}

export default Navbar;