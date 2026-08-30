import React from "react"
import { VALUE_POINTS } from "../content"

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
              {VALUE_POINTS.map((v, i) => (
                <div className="value-point" key={v.label}>
                  <strong>0{i + 1}</strong>
                  <div>
                    <div className="vp-label">{v.label}</div>
                    <div className="vp-text">{v.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="visual visual--aerial" />
        </div>
      </div>
    </section>
  )
}

export default About