import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING...");

  useEffect(() => {
    // Lock scroll during loading
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            document.body.style.overflow = "unset";
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 12) + 5;
        const current = next > 100 ? 100 : next;

        if (current > 75) {
          setStatusText("READY");
        } else if (current > 40) {
          setStatusText("LOADING ASSETS...");
        }

        return current;
      });
    }, 90);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "unset";
    };
  }, [onComplete]);

  return (
    <motion.div
      className="loader-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="loader-bg-glow"></div>

      <motion.div
        className="loader-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="loader-logo-ring">
          <span className="loader-logo-text">KJ</span>
          <div className="loader-ring-spinner"></div>
        </div>

        <div className="loader-progress-container">
          <div className="loader-bar-track">
            <div
              className="loader-bar-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="loader-info">
          <span className="loader-status">{statusText}</span>
          <span className="loader-counter">{progress}%</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Loader;
