import React from "react"

const TrustStrip: React.FC = () => {
  return (
    <section className="trust section-dark-alt" id="kepercayaan">
      <div className="container trust-inner">
        <p>Dipercaya perusahaan jasa pertambangan di seluruh Indonesia</p>
        <div className="trust-stats">
          <div className="trust-stat">
            <strong>50+</strong>
            <span>Perusahaan Terbantu</span>
          </div>
          <div className="trust-stat">
            <strong>98%</strong>
            <span>Tingkat Persetujuan</span>
          </div>
          <div className="trust-stat">
            <strong>10+</strong>
            <span>Tahun Pengalaman</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustStrip