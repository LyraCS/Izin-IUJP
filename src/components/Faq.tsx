import React from "react"
import SectionIntro from "./SectionIntro"
import { FAQS } from "../content"
import { useAccordion } from "../hooks"

const Faq: React.FC = () => {
  const [open, toggle] = useAccordion(0)

  return (
    <section className="section-dark sp-lg" id="faq">
      <div className="container">
        <SectionIntro eyebrow="05 · FAQ" title="Pertanyaan yang Sering Diajukan" />
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <div className={`faq-item${open === i ? " open" : ""}`} key={f.q}>
              <button className="faq-q" onClick={() => toggle(i)}>
                <span>{f.q}</span>
                <span className="icon">+</span>
              </button>
              <div className="faq-a">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq