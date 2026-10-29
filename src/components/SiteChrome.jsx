"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { Icon } from "./Icons";

const navigation = [
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const menuButton = useRef(null);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;

    try {
      window.localStorage.setItem("saifur-theme", nextTheme);
    } catch {}
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  const themeAction = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <header className="site-header" id="top">
      <div className="nav-wrap">
        <Link href="/" className="brand" aria-label={`${profile.name} — home`} onClick={closeMenu}>
          <img
            src="/assets/saifur-webcraft-logo.png"
            alt="Saifur Web Craft"
            width="210"
            height="63"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="icon-button theme-toggle"
            onClick={toggleTheme}
            aria-label={themeAction}
            title={themeAction}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} />
          </button>
          <Link href="/#contact" className="nav-contact" onClick={closeMenu}>
            Contact <Icon name="arrow-up-right" size={17} />
          </Link>
          <button
            ref={menuButton}
            type="button"
            className="icon-button menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <Icon name={menuOpen ? "close" : "menu"} size={23} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenu}>{item.label}</Link>
          ))}
          <Link href="/#contact" onClick={closeMenu}>Contact</Link>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  const socialLinks = [
    { label: "GitHub", icon: "github", href: profile.github },
    { label: "LinkedIn", icon: "linkedin", href: profile.linkedin },
    { label: "Instagram", icon: "instagram", href: profile.instagram },
  ].filter((link) => link.href);

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <Link href="/" className="footer-name">{profile.name}</Link>
          <p>{profile.title}</p>
          <p className="footer-location"><Icon name="pin" size={15} /> {profile.location}</p>
        </div>
        <nav className="footer-links" aria-label="Social profiles">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
              <Icon name={link.icon} size={18} />
              {link.label}
              <Icon name="arrow-up-right" size={14} />
            </a>
          ))}
        </nav>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <Link href="#top" className="back-to-top">
          Back to top <Icon name="chevron-up" size={18} />
        </Link>
      </div>
    </footer>
  );
}
