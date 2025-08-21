"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("light");

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme toggle
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme === "light" ? "light" : "dark"
    );
  }, [theme]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled ? "backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-md" : "bg-white dark:bg-gray-900"}
      `}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold cursor-pointer text-gray-900 dark:text-white">
            TechNext
          </span>
        </Link>

        {/* Menu */}
        <ul className="flex items-center space-x-6 font-medium text-gray-900 dark:text-gray-200">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/category">Categories</Link></li>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/statistics">Statistics</Link></li>

          {/* Theme toggle button */}
          <li>
            <button
              className="btn btn-sm btn-square btn-primary"
              onClick={() =>
                setTheme(theme === "light" ? "dark" : "light")
              }
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
