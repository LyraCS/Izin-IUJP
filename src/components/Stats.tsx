import React from "react"

const Stats: React.FC = () => {
  const stats = [
    { num: "50+", label: "Perusahaan Terbantu" },
    { num: "98%", label: "Tingkat Persetujuan" },
    { num: "10+", label: "Tahun Pengalaman" },
    { num: "500+", label: "Dokumen Disetujui" },
  ]

  return (
    <section className="section-light stats" id="statistik">
      <div className="container">
        <div className="eyebrow eyebrow--center" style={{ justifyContent: "center", color: "var(--color-accent-muted)", width: "100%" }}>
          Hasil yang Terukur
        </div>
        <div className="stats-grid" style={{ marginTop: 36 }}>
          {stats.map((s) => (
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