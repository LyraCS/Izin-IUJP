import React from "react"

const ProcessTimeline: React.FC = () => {
  const steps = [
    { no: "01", title: "Konsultasi Awal", desc: "Kami memahami kebutuhan dan kondisi perusahaan Anda.", time: "Hari 1" },
    { no: "02", title: "Persiapan Dokumen", desc: "Kami membantu melengkapi dan menyusun semua dokumen.", time: "Hari 2–7" },
    { no: "03", title: "Pengajuan Permohonan", desc: "Pengajuan resmi ke instansi berwenang melalui OSS.", time: "Hari 8–14" },
    { no: "04", title: "Verifikasi & Persetujuan", desc: "Koordinasi verifikasi hingga persetujuan diterbitkan.", time: "Hari 15–30" },
    { no: "05", title: "Izin Terbit", desc: "IUJP resmi terbit dan siap digunakan beroperasi.", time: "Hari 30+" },
  ]

  return (
    <section className="section-dark sp-lg" id="proses">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">03 · Proses</div>
          <h2>Alur Kerja yang Jelas &amp; Terukur</h2>
          <p>Kami memandu Anda pada setiap tahap, transparan dari awal hingga izin terbit.</p>
        </div>
        <div className="process-steps">
          {steps.map((s) => (
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