import React, { useState } from "react"
import { NAV_LINKS } from "../content"
import { useScrolled } from "../hooks"

interface ToggleProps {
  onClick: () => void
}

const NavToggle: React.FC<ToggleProps> = ({ onClick, ...rest }) => (
  <button className="nav-toggle" onClick={onClick} aria-label="Buka menu" {...rest}>☰</button>
)

const Header: React.FC = () => {
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className={`header${scrolled ? " scrolled" : ""}${menuOpen ? " menu-open" : ""}`}>
        <div className="container header-inner">
          <a href="#" className="brand">
            Izin<em>IUJP</em>
          </a>
          <nav className="nav" aria-label="Navigasi utama">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href}>{l.label}</a>
            ))}
            <a href="#kontak" className="header-cta">Konsultasi Gratis</a>
          </nav>
          <NavToggle onClick={() => setMenuOpen(true)} />
        </div>
      </header>

      <nav className={`mobile-menu${menuOpen ? " open" : ""}`} aria-label="Menu seluler">
        <button className="nav-toggle" onClick={() => setMenuOpen(false)} aria-label="Tutup menu">×</button>
        {NAV_LINKS.map((l, i) => (
          <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>
            <span className="n">0{i + 1}</span>
            {l.label}
          </a>
        ))}
        <a href="#kontak" className="header-cta" onClick={() => setMenuOpen(false)}>Konsultasi Gratis</a>
      </nav>
    </>
  )
}

export default Header