"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigationItems = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Stack", href: "/#technologies" },
  { label: "Contact", href: "/#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
      <nav className="site-nav" aria-label="Primary navigation">
        <Link className="wordmark" href="/" onClick={() => setIsMenuOpen(false)}>
          THISANGA SENITHU
        </Link>

        <div className="desktop-nav" role="navigation">
          {navigationItems.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="nav-link"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span>{isMenuOpen ? "Close" : "Menu"}</span>
          <i aria-hidden="true" />
        </button>
      </nav>

      <div
        className={`mobile-nav ${isMenuOpen ? "mobile-nav--open" : ""}`}
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-nav-inner">
          {navigationItems.map((item, index) => (
            <Link
              href={item.href}
              key={item.label}
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="mobile-nav-num">0{index + 1}</span>
              <span className="mobile-nav-text">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
