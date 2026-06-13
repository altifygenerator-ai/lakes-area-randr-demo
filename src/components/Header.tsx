import { siteData } from "@/data/site";
import { FiPhone } from "react-icons/fi";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="/" className="logo-link" aria-label={siteData.shortName}>
          <img src={siteData.logo.src} alt={siteData.logo.alt} />
        </a>

        <nav className="nav" aria-label="Primary navigation">
          {siteData.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-phone" href={`tel:${siteData.phone}`}>
          <FiPhone />
          {siteData.phone}
        </a>
      </div>
    </header>
  );
}