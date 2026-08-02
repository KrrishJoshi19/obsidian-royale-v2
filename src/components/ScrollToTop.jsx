import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import "../styles/scrollToTop.css";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 350);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-top ${visible ? "show" : ""}`}
      onClick={scrollTop}
    >
      <ArrowUp size={22} />
    </button>
  );
}

export default ScrollToTop;