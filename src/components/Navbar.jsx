import { useEffect, useState } from "react";
import { Menu, X, Terminal, Volume2, VolumeX, Sparkles } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";
import { sounds } from "../utils/audio";

function Navbar({ onOpenCmd }) {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(sounds.isMuted());

  const navLinks = ["Home", "Why Me", "About", "Skills", "Timeline", "Projects", "Contact"];

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

  const toggleSound = () => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
    if (!muted) sounds.playClick();
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <nav>
        <div className="logo" onClick={() => sounds.playClick()}>
          <span className="logo-badge"><Sparkles size={14} /></span>
          <span>KJ</span>
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                className={
                  active === item.toLowerCase().replace(/\s+/g, "")
                    ? "active-link"
                    : ""
                }
                onClick={() => {
                  sounds.playClick();
                  closeMenu();
                }}
                onMouseEnter={() => sounds.playHover()}
              >
                {item}
              </a>
            </li>
          ))}

          <li className="mobile-only">
            <button
              className="nav-cmd-btn"
              onClick={() => {
                sounds.playOpen();
                onOpenCmd();
                closeMenu();
              }}
            >
              <Terminal size={14} />
              <span>Cyber CLI (Ctrl+K)</span>
            </button>
          </li>
        </ul>

        <div className="nav-actions">
          <button
            className="nav-cmd-trigger"
            onClick={() => {
              sounds.playOpen();
              onOpenCmd();
            }}
            onMouseEnter={() => sounds.playHover()}
            title="Open Cyber CLI Command Palette (Ctrl + K)"
          >
            <Terminal size={15} />
            <span className="cmd-text">CLI</span>
            <kbd className="cmd-kbd">⌘K</kbd>
          </button>

          <button
            className="nav-audio-btn"
            onClick={toggleSound}
            onMouseEnter={() => sounds.playHover()}
            title={isMuted ? "Unmute UI Sounds" : "Mute UI Sounds"}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>

          <ThemeSwitcher />

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-btn desktop-resume"
            onClick={() => sounds.playClick()}
          >
            Resume
          </a>

          <button
            className="menu-btn"
            onClick={() => {
              sounds.playClick();
              setMenuOpen(!menuOpen);
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;