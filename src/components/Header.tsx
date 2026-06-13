// src/components/Header.tsx

"use client";

import { useState } from "react";
import { siteData } from "@/data/site";
import { FiMenu, FiPhone, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-bar">
        <a href="/" className="site-header-logo" aria-label={siteData.shortName}>
          <img src={siteData.logo.src} alt={siteData.logo.alt} />
        </a>

        <nav className="site-header-nav" aria-label="Main navigation">
          {siteData.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header-actions">
          <a className="site-header-phone" href={`tel:${siteData.phone}`}>
            <FiPhone />
            <span>{siteData.phone}</span>
          </a>

          <button
            className="site-header-menu-button"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <div className={`site-mobile-menu ${open ? "is-open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {siteData.nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}

          <a
            className="site-mobile-menu-cta"
            href={`tel:${siteData.phone}`}
            onClick={() => setOpen(false)}
          >
            Call {siteData.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}