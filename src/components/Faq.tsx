import React, { useState } from "react"

const Faq: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0)

  const faqs = [
    { q: "Apa itu IUJP?", a: "Izin Usaha Jasa Pertambangan (IUJP) adalah izin yang wajib dimiliki perusahaan jasa penunjang kegiatan pertambangan sesuai regulasi Kementerian ESDM." },
    { q: "Berapa lama proses pengurusannya?", a: "Umumnya 1–3 bulan tergantung kelengkapan dokumen dan instansi penerbit. Kami memastikan proses seefisien mungkin." },
    { q: "Dokumen apa saja yang diperlukan?", a: "Akte perusahaan, NPWP, domisili, dan persyaratan teknis kegiatan. Tim kami akan membantu memeriksa dan melengkapi setiap dokumen." },
    { q: "Berapa biaya jasanya?", a: "Biaya bervariasi sesuai jenis dan kompleksitas layanan. Hubungi kami untuk konsultasi dan penawaran transparan." },
  ]

  return (
    <section className="section-dark sp-lg" id="faq">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">05 · FAQ</div>
          <h2>Pertanyaan yang Sering Diajukan</h2>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div className={`faq-item${open === i ? " open" : ""}`} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
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