import React from "react"

const About: React.FC = () => {
  return (
    <section className="section-dark sp-lg" id="tentang">
      <div className="container">
        <div className="split">
          <div className="body-copy">
            <div className="eyebrow">01 · Tentang IUJP</div>
            <div className="section-head section-head--tight">
              <h2>Mengapa Izin Usaha Jasa Pertambangan Wajib Dimiliki</h2>
            </div>
            <p>
              Izin Usaha Jasa Pertambangan (IUJP) adalah izin legal yang wajib
              dimiliki perusahaan jasa penunjang operasi tambang untuk beroperasi
              secara legal di Indonesia, mulai dari jasa peledakan, hauling,
              drilling, hingga layanan pendukung tambang lainnya.
            </p>
            <p>
              Perusahaan tanpa IUJP menghadapi sanksi administratif, penghentian
              operasi, dan kerugian finansial yang signifikan karena operasi tidak
              terlegitimasi.
            </p>
            <div className="value-points">
              <div className="value-point">
                <strong>01</strong>
                <div>
                  <div className="vp-label">Legalitas Operasional</div>
                  <div className="vp-text">Basis hukum untuk menjalankan jasa pertambangan.</div>
                </div>
              </div>
              <div className="value-point">
                <strong>02</strong>
                <div>
                  <div className="vp-label">Kepatuhan Regulasi ESDM</div>
                  <div className="vp-text">Selaras dengan aturan Kementerian ESDM.</div>
                </div>
              </div>
              <div className="value-point">
                <strong>03</strong>
                <div>
                  <div className="vp-label">Kepercayaan Mitra &amp; Klien</div>
                  <div className="vp-text">Akses pasar dan kerja sama yang lebih luas.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="visual visual--aerial" />
        </div>
      </div>
    </section>
  )
}

export default About