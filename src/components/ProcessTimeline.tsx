import React from "react"
import SectionIntro from "./SectionIntro"
import { PROCESS_STEPS } from "../content"

const ProcessTimeline: React.FC = () => {
  return (
    <section className="section-dark sp-lg" id="proses">
      <div className="container">
        <SectionIntro
          eyebrow="03 · Proses"
          title="Alur Kerja yang Jelas & Terukur"
          description="Kami memandu Anda pada setiap tahap, transparan dari awal hingga izin terbit."
        />
        <div className="process-steps">
          {PROCESS_STEPS.map((s) => (
            <div className="process-step" key={s.no}>
              <span className="step-no">{s.no}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="time">{s.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessTimeline