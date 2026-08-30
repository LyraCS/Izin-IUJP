import React from "react"

export interface SectionIntroProps {
  eyebrow: string
  title: string
  description?: string
}

const SectionIntro: React.FC<SectionIntroProps> = ({ eyebrow, title, description }) => (
  <div className="section-head">
    <div className="eyebrow">{eyebrow}</div>
    <h2>{title}</h2>
    {description ? <p>{description}</p> : null}
  </div>
)

export default SectionIntro