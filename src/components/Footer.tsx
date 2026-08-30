import React from "react"

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
              <li><a href="#layanan">Layanan</a></li>
              <li><a href="#proses">Proses</a></li>
              <li><a href="#tentang">Tentang</a></li>
              <li><a href="#faq">FAQ</a></li>
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
                <a href="https://wa.me/6281318415169">+62 813-1841-5169</a>
              </div>
              <div>
                <strong>Email:</strong><br />
                <a href="mailto:cs@legalind.co.id">cs@legalind.co.id</a>
              </div>
              <div>
                <strong>Alamat:</strong><br />
                <a href="https://maps.app.goo.gl/p3336gNvcZgnHV5FA" target="_blank" rel="noopener noreferrer">
                  Ruko 92 Avenix BSD CITY, Jl. Raya Cisauk No.7 Blk F, Sampora, Kec. Cisauk, Kabupaten Tangerang, Banten 15345
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