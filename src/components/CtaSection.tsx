import React from "react"
import { CONTACT } from "../content"

const CtaSection: React.FC = () => {
  return (
    <section className="cta-band" id="kontak">
      <div className="container">
        <h2>Siap Mengurus IUJP Perusahaan Anda?</h2>
        <p>Konsultasikan kebutuhan legalitas operasi tambang Anda. Gratis dan tanpa komitmen.</p>
        <div className="cta-actions">
          <a href={CONTACT.waLink} className="btn btn--primary">Konsultasi Gratis</a>
          <a href="#layanan" className="btn btn--ghost">Lihat Layanan</a>
        </div>
      </div>
    </section>
  )
}

export default CtaSection