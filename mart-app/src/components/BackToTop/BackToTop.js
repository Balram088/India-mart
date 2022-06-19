import React, { useState } from "react";

import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";

import "./BackToTop.css";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div style={{ display: visible ? "inline" : "none" }} className="backToTop">
      <button onClick={scrollToTop} aria-label="Back to top">
        <KeyboardControlKeyIcon />
      </button>
    </div>
  );
}

export default BackToTop;
