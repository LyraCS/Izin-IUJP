import React from "react"

const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <div className="container hero-inner">
        <div className="eyebrow">Legal Consulting · Pertambangan</div>
        <h1>
          Mengurus IUJP Tanpa <span className="accent">Ribet Birokrasi</span>
        </h1>
        <p className="hero-sub">
          Konsultasi &amp; pengurusan izin usaha jasa pertambangan end-to-end.
          Kami menangani seluruh birokrasi agar Anda bisa fokus pada operasional tambang.
        </p>
        <div className="hero-actions">
          <a href="https://wa.me/6281318415169" className="btn btn--primary">Konsultasi Gratis</a>
          <a href="#layanan" className="btn btn--ghost">Lihat Layanan Kami</a>
        </div>
        <div className="hero-meta" />
      </div>
      <div className="scroll-hint">
        <span className="line" /> Scroll
      </div>
    </section>
  )
}

export default Hero