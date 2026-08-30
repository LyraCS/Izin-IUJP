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
              <div><strong>Telepon:</strong><br />+62 812-3456-7890</div>
              <div><strong>Email:</strong><br />halo@izin-iu.jp</div>
              <div><strong>Alamat:</strong><br />Jakarta, Indonesia</div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} IzinIUJP. Hak cipta dilindungi.</span>
          <span>Semua konten placeholder menunggu materi klien.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer