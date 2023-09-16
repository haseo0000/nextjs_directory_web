import React from "react";

import "./toggle-styles.css";

function Toggle() {
  const handleToggleMode = () => {
    const body = document.querySelector("body");
    body?.classList.toggle("darkMode");
  };

  return (
    <>
      <input type="checkbox" id="btn" />
      <label htmlFor="btn" className="toggle_Btn" onClick={handleToggleMode}>
        <span></span>
      </label>
    </>
  );
}

export default Toggle;
