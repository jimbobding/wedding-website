"use client";

import { useState } from "react";
import styles from "../styles/Navbar.module.css";

const links = [
  { href: "#expect", label: "What to Expect" },
  { href: "#food", label: "Food + Drink" },
  { href: "#travel", label: "Travel + Accommodation" },
  { href: "#dress", label: "Dress Code + Gifts" },
  { href: "#rsvp", label: "RSVP" },
  { href: "#info", label: "Further Info" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Desktop links */}
      <ul className={styles.navLinks}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      {/* Hamburger button for mobile */}
      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className={styles.mobileMenu}>
          {/* Logo inside mobile menu */}
          <li className={styles.mobileLogo}>Jimmy & Lizzy</li>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
