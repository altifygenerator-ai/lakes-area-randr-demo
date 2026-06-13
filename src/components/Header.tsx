"use client";

import { useState } from "react";
import { siteData } from "@/data/site";
import { FiMenu, FiPhone, FiX } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <a href="/" className="logo-link" aria-label={siteData.shortName}>
          <img src={siteData.logo.src} alt={siteData.logo.alt} />
        </a>

        <nav className="nav desktop-nav" aria-label="Primary navigation">
          {siteData.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={`tel:${siteData.phone}`}>
            <FiPhone />
            <span>{siteData.phone}</span>
          </a>

          <button
            className="mobile-menu-button"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {siteData.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <a
            href="/contact"
            className="mobile-menu-cta"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}