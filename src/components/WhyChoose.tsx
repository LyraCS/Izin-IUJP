import React from "react"

const WhyChoose: React.FC = () => {
  const reasons = [
    { no: "01", title: "Berpengalaman", desc: "Puluhan tahun menangani perizinan jasa pertambangan." },
    { no: "02", title: "Tim Ahli & Legal", desc: "Konsultan berpengalaman di bidang regulasi ESDM." },
    { no: "03", title: "Transparan", desc: "Tahapan jelas, biaya terbuka, tanpa biaya tersembunyi." },
    { no: "04", title: "Komunikatif", desc: "Pendampingan responsif di setiap proses." },
  ]

  return (
    <section className="section-dark-alt sp-lg" id="kenapa-kami">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">04 · Keunggulan</div>
          <h2>Mengapa Memilih Kami</h2>
        </div>
        <div className="why-grid">
          {reasons.map((r) => (
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