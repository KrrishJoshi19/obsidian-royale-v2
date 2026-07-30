import { useEffect, useState } from "react";
function Navbar() {
  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <header>
      <nav>
        <div className="logo">
          <span>KJ</span>
        </div>

        <ul>
          {navLinks.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        <button className="resume-btn">
          Resume
        </button>
      </nav>
    </header>
  );
}

export default Navbar;