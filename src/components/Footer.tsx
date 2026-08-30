import React from "react"
import { CONTACT, NAV_LINKS } from "../content"

const Footer: React.FC = () => {
  return (
    <footer className="footer section-dark" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="f-brand">
            <a href="#" className="brand">Izin<em>IUJP</em></a>
            <p className="f-tagline">Konsultan perizinan usaha jasa pertambangan terpercaya di Indonesia.</p>
          </div>
          <div>
            <h4>Navigasi</h4>
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Layanan</h4>
            <ul>
              <li><a href="#layanan">IUJP Baru</a></li>
              <li><a href="#layanan">Perpanjangan</a></li>
              <li><a href="#layanan">Audit Kepatuhan</a></li>
              <li><a href="#layanan">Konsultasi Legal</a></li>
            </ul>
          </div>
          <div>
            <h4>Kontak</h4>
            <div className="f-contact">
              <div>
                <strong>Telepon/WhatsApp:</strong><br />
                <a href={CONTACT.waLink}>{CONTACT.waDisplay}</a>
              </div>
              <div>
                <strong>Email:</strong><br />
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
              <div>
                <strong>Alamat:</strong><br />
                <a href={CONTACT.mapsLink} target="_blank" rel="noopener noreferrer">
                  {CONTACT.address}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} IzinIUJP. Hak cipta dilindungi.</span>
          <span>Terdaftar di Kabupaten Tangerang, Banten.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer