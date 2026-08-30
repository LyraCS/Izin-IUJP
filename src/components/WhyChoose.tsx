import React from "react"
import SectionIntro from "./SectionIntro"
import { REASONS } from "../content"

const WhyChoose: React.FC = () => {
  return (
    <section className="section-dark-alt sp-lg" id="kenapa-kami">
      <div className="container">
        <SectionIntro eyebrow="04 · Keunggulan" title="Mengapa Memilih Kami" />
        <div className="why-grid">
          {REASONS.map((r) => (
            <article className="why-card" key={r.no}>
              <span className="why-no">{r.no}</span>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose