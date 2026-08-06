import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <nav>
        <div className="logo">
          <span>KJ</span>
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={
                  active === item.toLowerCase()
                    ? "active-link"
                    : ""
                }
                onClick={closeMenu}
              >
                {item}
              </a>
            </li>
          ))}

          <li className="mobile-resume">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              Resume
            </a>
          </li>
        </ul>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="resume-btn desktop-resume"
        >
          Resume
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;