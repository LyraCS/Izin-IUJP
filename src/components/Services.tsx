import React from "react"

const Services: React.FC = () => {
  const services = [
    { title: "Konsultasi & Pengecekan Kelengkapan Dokumen IUJP", desc: "Verifikasi kelengkapan dokumen sebelum pengajuan permohonan." },
    { title: "Pengurusan Perizinan IUJP Baru", desc: "Penanganan lengkap dari konsultasi awal hingga izin diterbitkan." },
    { title: "Perpanjangan / Her-Registrasi IUJP", desc: "Pembaruan izin yang akan berakhir tanpa jeda operasional." },
    { title: "Pendampingan Audit & Kepatuhan Regulasi", desc: "Audit rutinitas dan kepatuhan terhadap regulasi ESDM." },
    { title: "Konsultasi Legal Pertambangan Lainnya", desc: "Advokasi dan strategi hukum untuk kebutuhan tambang Anda." },
  ]

  return (
    <section className="section-dark-alt sp-lg" id="layanan">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">02 · Layanan</div>
          <h2>Jasa yang Kami Tangani</h2>
          <p>Semua kebutuhan perizinan usaha jasa pertambangan dalam satu layanan terintegrasi.</p>
        </div>
        <div className="services-list">
          {services.map((s, i) => (
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