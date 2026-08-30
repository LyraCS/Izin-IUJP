import React from "react"
import SectionIntro from "./SectionIntro"
import { SERVICES } from "../content"

const Services: React.FC = () => {
  return (
    <section className="section-dark-alt sp-lg" id="layanan">
      <div className="container">
        <SectionIntro
          eyebrow="02 · Layanan"
          title="Jasa yang Kami Tangani"
          description="Semua kebutuhan perizinan usaha jasa pertambangan dalam satu layanan terintegrasi."
        />
        <div className="services-list">
          {SERVICES.map((s, i) => (
            <article className="service-item" key={s.title}>
              <span className="num">0{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <span className="arrow">→</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services