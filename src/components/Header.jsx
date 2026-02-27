import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="header">
      <h1>SubSphere</h1>
      <button className="theme-btn" onClick={toggleTheme}>
  {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
</button>
    </div>
  );
}