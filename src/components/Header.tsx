import React, { useState, useEffect } from "react"

const Icons = {
  menu: ({ onClick }: { onClick?: () => void }) => (
    <button className="nav-toggle" onClick={onClick} aria-label="Buka menu">
      ☰
    </button>
  ),
}

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { label: "Layanan", href: "#layanan" },
    { label: "Proses", href: "#proses" },
    { label: "Tentang", href: "#tentang" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontak", href: "#kontak" },
  ]

  return (
    <>
      <header className={`header${scrolled ? " scrolled" : ""}`}>
        <div className="container header-inner">
          <a href="#" className="brand">
            Izin<em>IUJP</em>
          </a>
          <nav className="nav" aria-label="Navigasi utama">
            {links.map((l) => (
              <a key={l.label} href={l.href}>{l.label}</a>
            ))}
            <a href="#kontak" className="header-cta">Konsultasi Gratis</a>
          </nav>
          <Icons.menu onClick={() => setMenuOpen(true)} />
        </div>
      </header>

      <nav className={`mobile-menu${menuOpen ? " open" : ""}`} aria-label="Menu seluler">
        <Icons.menu onClick={() => setMenuOpen(false)} />
        {links.map((l, i) => (
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