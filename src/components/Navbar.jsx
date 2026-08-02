import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

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

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
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
                  active === item.toLowerCase()
                    ? "active-link"
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