"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar" role="navigation" aria-label="Main navigation">
      <Link href="/" className="nav-logo" aria-label="Zameer Mahfooz Khan — Home">
        zameer<span className="dot">.</span>
      </Link>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`} id="navLinks">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <Link href="/contact" className="btn-hire">Start a Project →</Link>
      </div>

      <button
        className="hamburger"
        id="hamburger"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
