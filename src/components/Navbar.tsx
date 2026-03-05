"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/Navbar.module.css";

const links = [
  { id: "expect", label: "What to Expect" },
  { id: "food", label: "Food + Drink" },
  { id: "travel", label: "Travel + Accommodation" },
  { id: "dress", label: "Dress Code + Gifts" },
  { id: "rsvp", label: "RSVP" },
  { id: "info", label: "Further Info" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className={styles.navbar}>
      {/* Desktop links */}
      <ul className={styles.navLinks}>
        {links.map((link) => {
          // If we're on the homepage, use an anchor so it scrolls smoothly.
          // If we're not on the homepage, go to "/#section" which brings you home and then to the section.
          const href = isHome ? `#${link.id}` : `/#${link.id}`;

          return (
            <li key={link.id}>
              {isHome ? (
                <a href={href}>{link.label}</a>
              ) : (
                <Link href={href}>{link.label}</Link>
              )}
            </li>
          );
        })}
      </ul>

      {/* Hamburger button for mobile */}
      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className={styles.mobileMenu}>
          <li className={styles.mobileLogo}>Jimmy & Lizzy</li>

          {links.map((link) => {
            const href = isHome ? `#${link.id}` : `/#${link.id}`;

            return (
              <li key={link.id}>
                {isHome ? (
                  <a href={href} onClick={closeMenu}>
                    {link.label}
                  </a>
                ) : (
                  <Link href={href} onClick={closeMenu}>
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
