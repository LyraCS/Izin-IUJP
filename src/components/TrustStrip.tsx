import React from "react"
import { TRUST_STATS } from "../content"

const TrustStrip: React.FC = () => {
  return (
    <section className="trust section-dark-alt" id="kepercayaan">
      <div className="container trust-inner">
        <p>Dipercaya perusahaan jasa pertambangan di seluruh Indonesia</p>
        <div className="trust-stats">
          {TRUST_STATS.map((s) => (
            <div className="trust-stat" key={s.label}>
              <strong>{s.num}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustStrip