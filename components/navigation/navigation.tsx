"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigationItems = [
  { label: "WORK", href: "/#work" },
  { label: "BUILD", href: "/#build" },
  { label: "ABOUT", href: "/#about" },
  { label: "STACK", href: "/#technologies" },
  { label: "CONTACT", href: "/#contact" },
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
          THISANGA<span aria-hidden="true">.</span>
        </Link>

        <div className="desktop-nav">
          {navigationItems.map((item) => (
            <Link href={item.href} key={item.label}>{item.label}</Link>
          ))}
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span>{isMenuOpen ? "CLOSE" : "MENU"}</span>
          <i aria-hidden="true" />
        </button>
      </nav>

      <div className={`mobile-nav ${isMenuOpen ? "mobile-nav--open" : ""}`} id="mobile-navigation">
        {navigationItems.map((item, index) => (
          <Link href={item.href} key={item.label} onClick={() => setIsMenuOpen(false)}>
            <span>0{index + 1}</span>{item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
