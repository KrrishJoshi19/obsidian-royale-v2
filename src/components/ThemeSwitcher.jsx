import { useState, useEffect } from "react";
import { Palette, Check, X } from "lucide-react";
import { sounds } from "../utils/audio";
import "../styles/themeSwitcher.css";

const themes = [
  { id: "gold", name: "Obsidian Gold", color: "#D4AF37" },
  { id: "cyan", name: "Cyber Cyan", color: "#00F2FE" },
  { id: "purple", name: "Electric Violet", color: "#A855F7" },
  { id: "emerald", name: "Matrix Emerald", color: "#10B981" },
  { id: "sunset", name: "Solar Sunset", color: "#FF6347" },
];

function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState("gold");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_theme") || "gold";
    setCurrentTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const changeTheme = (themeId) => {
    sounds.playClick();
    setCurrentTheme(themeId);
    document.documentElement.setAttribute("data-theme", themeId);
    localStorage.setItem("portfolio_theme", themeId);
  };

  return (
    <div className="theme-switcher-container">
      <button
        className="theme-toggle-btn"
        onClick={() => {
          sounds.playOpen();
          setIsOpen(!isOpen);
        }}
        onMouseEnter={() => sounds.playHover()}
        aria-label="Toggle Theme Menu"
        title="Customize Color Theme"
      >
        <Palette size={18} />
        <span className="theme-btn-dot" style={{ background: themes.find(t => t.id === currentTheme)?.color }}></span>
      </button>

      {isOpen && (
        <div className="theme-popover">
          <div className="theme-popover-header">
            <span>Color Aesthetics</span>
            <button
              className="theme-close-btn"
              onClick={() => {
                sounds.playClick();
                setIsOpen(false);
              }}
            >
              <X size={14} />
            </button>
          </div>

          <div className="theme-options-list">
            {themes.map((theme) => (
              <button
                key={theme.id}
                className={`theme-option-item ${currentTheme === theme.id ? "active" : ""}`}
                onClick={() => changeTheme(theme.id)}
                onMouseEnter={() => sounds.playHover()}
              >
                <span className="theme-swatch" style={{ background: theme.color }}></span>
                <span className="theme-name">{theme.name}</span>
                {currentTheme === theme.id && <Check size={14} className="theme-check" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ThemeSwitcher;
