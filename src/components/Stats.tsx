import React from "react"
import { STATS } from "../content"

const Stats: React.FC = () => {
  return (
    <section className="section-light stats" id="statistik">
      <div className="container">
        <div className="eyebrow eyebrow--center" style={{ justifyContent: "center", color: "var(--color-accent-muted)", width: "100%" }}>
          Hasil yang Terukur
        </div>
        <div className="stats-grid" style={{ marginTop: 36 }}>
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats