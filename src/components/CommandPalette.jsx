import { useState, useEffect, useRef } from "react";
import { Terminal, X, ArrowRight, Sparkles, Command } from "lucide-react";
import { sounds } from "../utils/audio";
import "../styles/commandPalette.css";

const COMMANDS = [
  { cmd: "help", desc: "List all available interactive CLI commands" },
  { cmd: "skills", desc: "Jump to Skills Matrix & Technologies section" },
  { cmd: "projects", desc: "View Featured Full Stack & Security Projects" },
  { cmd: "about", desc: "Learn about Krrish Joshi's background" },
  { cmd: "contact", desc: "Get in touch for opportunities / projects" },
  { cmd: "theme cyan", desc: "Switch theme to Cyber Cyan" },
  { cmd: "theme gold", desc: "Switch theme to Obsidian Gold" },
  { cmd: "theme purple", desc: "Switch theme to Electric Violet" },
  { cmd: "theme emerald", desc: "Switch theme to Matrix Emerald" },
  { cmd: "theme sunset", desc: "Switch theme to Solar Sunset" },
  { cmd: "whoami", desc: "Display current user session & Developer profile" },
  { cmd: "sudo hire", desc: "Send direct priority inquiry email to Krrish" },
  { cmd: "clear", desc: "Clear terminal command history log" },
];

function CommandPalette({ isOpen, onClose }) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { text: "Welcome to KrrishOS Cyber CLI v2.0", type: "system" },
    { text: "Type 'help' or click a command below to navigate.", type: "system" },
  ]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        sounds.playOpen();
        if (isOpen) {
          onClose();
        } else {
          // Open trigger handled outside or via prop callback
          document.dispatchEvent(new CustomEvent("open-command-palette"));
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  if (!isOpen) return null;

  const handleCommandRun = (cmdString) => {
    sounds.playClick();
    const cleanCmd = cmdString.trim().toLowerCase();

    setHistory((prev) => [...prev, { text: `$ ${cmdString}`, type: "user" }]);

    if (cleanCmd === "help") {
      setHistory((prev) => [
        ...prev,
        { text: "Available commands:", type: "output" },
        ...COMMANDS.map((c) => ({
          text: `  • ${c.cmd.padEnd(14)} - ${c.desc}`,
          type: "output",
        })),
      ]);
    } else if (cleanCmd === "clear") {
      setHistory([]);
    } else if (cleanCmd === "whoami") {
      setHistory((prev) => [
        ...prev,
        {
          text: "Krrish Joshi • Computer Science Undergrad (Cloud Technology & Info Security)",
          type: "output",
        },
        { text: "Status: Open to Full-Stack & Security Internships / Freelance", type: "output" },
      ]);
    } else if (cleanCmd === "sudo hire") {
      sounds.playSuccess();
      setHistory((prev) => [
        ...prev,
        { text: "[SUCCESS] Redirecting to contact section with high priority...", type: "success" },
      ]);
      setTimeout(() => {
        onClose();
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 700);
    } else if (cleanCmd.startsWith("theme ")) {
      const theme = cleanCmd.split(" ")[1];
      const validThemes = ["gold", "cyan", "purple", "emerald", "sunset"];
      if (validThemes.includes(theme)) {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("portfolio_theme", theme);
        sounds.playSuccess();
        setHistory((prev) => [
          ...prev,
          { text: `[THEME UPDATED] Color palette set to '${theme.toUpperCase()}'`, type: "success" },
        ]);
      } else {
        setHistory((prev) => [
          ...prev,
          { text: `Unknown theme: ${theme}. Options: gold, cyan, purple, emerald, sunset`, type: "error" },
        ]);
      }
    } else if (["skills", "projects", "about", "contact", "home"].includes(cleanCmd)) {
      onClose();
      document.getElementById(cleanCmd)?.scrollIntoView({ behavior: "smooth" });
    } else {
      setHistory((prev) => [
        ...prev,
        { text: `Command not recognized: '${cleanCmd}'. Type 'help' for options.`, type: "error" },
      ]);
    }

    setInput("");
  };

  const filteredCommands = COMMANDS.filter((c) =>
    c.cmd.toLowerCase().includes(input.toLowerCase()) ||
    c.desc.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="cmd-modal-overlay" onClick={onClose}>
      <div className="cmd-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="cmd-modal-header">
          <div className="cmd-header-title">
            <Terminal size={18} className="cmd-header-icon" />
            <span>KrrishOS Cyber CLI</span>
            <span className="cmd-badge">v2.0</span>
          </div>

          <div className="cmd-header-actions">
            <span className="cmd-kbd-hint"><Command size={11} /> + K</span>
            <button className="cmd-close-btn" onClick={onClose}>
              <X size={16} />
            </button>
          </div>
        </div>

        <div className="cmd-terminal-body">
          {history.map((item, idx) => (
            <div key={idx} className={`cmd-log-line ${item.type}`}>
              {item.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="cmd-input-wrapper">
          <span className="cmd-prompt-symbol">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            className="cmd-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && input) {
                handleCommandRun(input);
              }
            }}
            placeholder="Type a command or search (e.g. 'skills', 'theme cyan')..."
          />
          {input && (
            <button
              className="cmd-run-btn"
              onClick={() => handleCommandRun(input)}
            >
              <ArrowRight size={14} />
            </button>
          )}
        </div>

        <div className="cmd-quick-suggestions">
          <div className="cmd-suggestions-title">Quick Actions:</div>
          <div className="cmd-chips-list">
            {filteredCommands.slice(0, 6).map((item) => (
              <button
                key={item.cmd}
                className="cmd-chip"
                onClick={() => handleCommandRun(item.cmd)}
                onMouseEnter={() => sounds.playHover()}
              >
                <span>{item.cmd}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommandPalette;
