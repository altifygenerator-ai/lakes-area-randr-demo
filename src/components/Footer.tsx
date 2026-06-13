// src/components/Footer.tsx

import { siteData } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img
            className="footer-logo"
            src={siteData.logo.src}
            alt={siteData.logo.alt}
          />
          <p>{siteData.facebookBio}</p>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <a href={`tel:${siteData.phone}`}>{siteData.phone}</a>
          <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
          <span>{siteData.address}</span>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          {siteData.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="container footer-bottom">
        <span>{siteData.businessName}</span>
        <span>{siteData.website}</span>
      </div>
    </footer>
  );
}