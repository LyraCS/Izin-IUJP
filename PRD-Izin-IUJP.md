# PRD — Website "Izin IUJP"
**Jasa Konsultasi & Pengurusan Izin Usaha Jasa Pertambangan (IUJP)**

Versi: 1.0
Untuk: Development via OpenCode (skill: `uipro`, `impeccable`)

---

## 1. Overview & Konteks Bisnis

**Nama Brand:** Izin IUJP
**Industri Klien:** Konsultan legal/perizinan yang fokus mengurus **IUJP (Izin Usaha Jasa Pertambangan)** untuk perusahaan jasa penunjang tambang.
**Target Audience:** Pemilik/manajemen perusahaan jasa pertambangan (kontraktor tambang, jasa peledakan, hauling, drilling, dll) yang butuh legalitas IUJP tapi tidak familiar/tidak punya waktu mengurus birokrasi sendiri.

**Positioning:** Bukan startup, bukan template law-firm generik. Brand harus terasa **kredibel, institutional, dan otoritatif** di ranah pertambangan & regulasi — tapi disajikan dengan pendekatan **semi-editorial** (seperti majalah bisnis/industri) supaya tetap modern dan tidak kaku.

**Tone brand:** Tegas, profesional, solutif, sedikit "bold industrial", tidak playful, tidak childish, tidak techy/SaaS-vibe.

---

## 2. Design Direction

### 2.1 Konsep Besar: "Industrial Editorial"
Kombinasi antara:
- **Editorial/majalah bisnis** (McKinsey Insights, Mining Weekly, Business of Fashion) → eyebrow text, nomor section, tipografi besar, whitespace terkontrol, pull-quote style.
- **Industri tambang** → foto/dokumentasi lapangan tambang, warna earth-tone/industrial, elemen grid/garis tegas.
- **Jasa legal/konsultasi** → struktur konten yang menjual (CTA jelas, proof/kredibilitas, proses kerja transparan).

**Yang HARUS dihindari:**
- Vibe startup SaaS (gradient ungu-biru, ilustrasi 3D blob, rounded-everything)
- Vibe kantor notaris jadul (Times New Roman, layout kaku simetris, warna biru-putih flat tanpa karakter)
- Stock photo tambang yang murahan tanpa treatment (foto polos tanpa overlay/duotone)

### 2.2 Color System
Base gelap dominan + satu warna aksen. **Jangan multi-color.**

Pilihan default (gunakan ini kecuali ada arahan lain dari klien):

| Token | Hex | Penggunaan |
|---|---|---|
| `--color-bg-primary` | `#15130F` (near-black, warm charcoal) | Background utama, hero |
| `--color-bg-secondary` | `#1F1C17` | Section alternate background |
| `--color-surface` | `#FAF8F4` (off-white warm) | Section terang, card |
| `--color-text-primary` | `#F5F1EA` | Teks di atas background gelap |
| `--color-text-body-dark` | `#211E19` | Teks di atas background terang |
| `--color-accent` | `#C9622A` (burnt orange/earth) | CTA, highlight, angka, garis aksen |
| `--color-accent-muted` | `#8C5A3A` | Hover state, border aksen |
| `--color-line` | `rgba(245,241,234,0.15)` | Divider/garis tipis di atas dark bg |

> Catatan: siapkan sebagai CSS variable/design token supaya mudah di-swap jika klien punya preferensi warna brand sendiri nantinya.

### 2.3 Typography

- **Headline / Display font:** Serif editorial dengan karakter kuat.
  Pilihan: `Fraunces` (Google Fonts, gratis, sangat direkomendasikan) — fallback `Georgia, serif`.
- **Body / UI font:** Sans-serif netral, readable.
  Pilihan: `Inter` atau `General Sans` — fallback `-apple-system, sans-serif`.
- **Aksen/eyebrow/label:** Sans-serif yang sama dengan body, tapi pakai letter-spacing lebar + uppercase + ukuran kecil (mis. 12–13px, tracking 0.1em–0.15em).

**Type scale (rekomendasi, sesuaikan via clamp() untuk responsive):**
- H1 Hero: 56–96px, serif, line-height 1.05, tracking sedikit negatif
- H2 Section: 36–56px, serif
- H3 Subsection: 22–28px, serif atau sans medium
- Body: 16–18px, sans, line-height 1.6
- Eyebrow/label: 12–13px, sans, uppercase, tracking lebar
- Pull-quote/statistik besar: 48–80px, serif atau sans bold

### 2.4 Layout & Grid Principles
- Grid 12 kolom, max-width container ±1280–1440px, padding side generous (min 24px mobile, 80–120px desktop).
- Gunakan **garis horizontal tipis** sebagai divider antar section (bukan cuma spacing/shadow) — ini ciri khas editorial.
- Nomor section (`01`, `02`, `03`) di kiri atas tiap section besar, kecil, warna aksen/muted.
- Asymmetric layout dipersilakan (foto besar di satu sisi, teks di sisi lain) — hindari semua section center-aligned simetris.
- Whitespace vertikal antar section besar (min 96–160px desktop) supaya kerasa "bernapas" seperti majalah, bukan padat seperti landing page SaaS.

### 2.5 Imagery Treatment
- Semua foto tambang **wajib** dapat treatment: duotone (base dark + accent) ATAU overlay gradient gelap (dari bawah ke atas atau dari salah satu sisi) supaya teks tetap terbaca dan look-nya konsisten dengan color system.
- Prioritas jenis foto: aerial shot tambang, alat berat (excavator/haul truck), aktivitas lapangan pekerja tambang dengan APD, dokumen/legal (untuk section proses/legalitas).
- Untuk keperluan development awal (sebelum ada foto asli dari klien), gunakan placeholder image dari Unsplash/Pexels dengan query seperti "open pit mine aerial", "mining heavy equipment", "mining site worker" — tandai jelas di code sebagai placeholder yang perlu diganti foto asli klien.

### 2.6 Micro-interactions & Motion
- Fade-up + subtle stagger saat scroll masuk section baru (gunakan Intersection Observer / Framer Motion jika stack React).
- Underline/garis aksen yang "grow" saat section number muncul.
- Hover pada card/list layanan: garis aksen kiri muncul + sedikit shift posisi (translateX kecil), bukan shadow-pop generik.
- Jangan pakai animasi berlebihan (parallax berat, particle effect) — tetap serius & profesional.

---

## 3. Struktur Halaman (Sitemap)

Untuk v1, single-page scrolling website dengan sticky nav, section-section berikut secara berurutan:

1. **Header/Navbar** (sticky)
2. **Hero Section**
3. **Trust/Credibility Strip** (logo klien/asosiasi/angka kredibilitas)
4. **Tentang / Kenapa IUJP Penting** (problem framing)
5. **Layanan** (services list)
6. **Proses Pengurusan** (step-by-step timeline)
7. **Kenapa Pilih Kami** (value proposition / diferensiasi)
8. **Statistik / Angka Pencapaian** (pull-quote number style)
9. **Testimoni Klien**
10. **FAQ**
11. **CTA / Kontak Section**
12. **Footer**

Detail tiap section ada di bagian 4.

---

## 4. Spesifikasi Detail Per Section

### 4.1 Header / Navbar
- Sticky, transparan di atas hero, berubah jadi solid background saat scroll (background `--color-bg-primary` dengan sedikit blur/backdrop-filter).
- Kiri: Logo/wordmark "Izin IUJP".
- Tengah/kanan: Nav links — Layanan, Proses, Tentang, FAQ, Kontak.
- Kanan jauh: CTA button kecil "Konsultasi Gratis" (accent color, filled).
- Mobile: hamburger menu, fullscreen overlay menu dengan style editorial (list menu besar, serif font, nomor di samping tiap item).

### 4.2 Hero Section
**Tujuan:** Kombinasi statement otoritatif + jual jasa, dengan visual mining yang kuat.

**Layout:**
- Full-bleed background image (foto tambang dengan overlay gradient gelap dari bawah/kiri) mengisi 100vh atau minimal 90vh.
- Konten di-align kiri-bawah atau kiri-tengah (bukan center-center generik).

**Konten:**
- Eyebrow text kecil: `LEGAL CONSULTING — PERTAMBANGAN` atau `IUJP · IZIN USAHA JASA PERTAMBANGAN`
- Garis horizontal tipis pendek di bawah eyebrow (± 40px width, warna accent)
- H1 besar (serif): headline outcome-driven, contoh: **"Mengurus IUJP Tanpa Ribet Birokrasi"** (copy final menunggu approval klien, tapi struktur & sizing harus sudah sesuai ini)
- Subheadline (sans, 1–2 kalimat): penjelasan singkat jasa — konsultasi & pengurusan izin usaha jasa pertambangan end-to-end.
- 2 CTA button:
  - Primary (filled, accent color): "Konsultasi Gratis" → scroll ke section kontak / buka WhatsApp
  - Secondary (outline/ghost): "Lihat Layanan Kami" → scroll ke section layanan
- Scroll indicator kecil di bawah (garis vertikal animasi atau chevron kecil + teks "Scroll")

### 4.3 Trust/Credibility Strip
- Section tipis (padding kecil), background `--color-bg-secondary`.
- Isi: baris kecil seperti "Dipercaya oleh perusahaan jasa pertambangan di seluruh Indonesia" + row logo (placeholder logo grayscale jika belum ada data asli) ATAU angka singkat (mis. "50+ Perusahaan Terbantu · 98% Tingkat Persetujuan · Berpengalaman sejak 20XX").
- Layout horizontal, scrollable/marquee opsional jika logo banyak.

### 4.4 Tentang / Kenapa IUJP Penting
**Tujuan:** Edukasi singkat kenapa IUJP krusial (problem framing) sebelum masuk ke jualan jasa.

**Layout:** Asymmetric 2 kolom — kiri teks, kanan foto (atau sebaliknya), dengan nomor section `01` di pojok atas kiri konten teks.

**Konten:**
- Eyebrow: `01 — TENTANG IUJP`
- H2 (serif): "Mengapa Izin Usaha Jasa Pertambangan Wajib Dimiliki"
- 2–3 paragraf body menjelaskan: apa itu IUJP, siapa yang wajib punya, risiko tidak punya izin (sanksi, operasional terhambat, dsb) — copy final by klien, tapi sediakan struktur paragraf.
- List singkat 3 poin (bukan bullet biasa, gunakan angka besar tipis + label) contoh: "Legalitas Operasional", "Kepatuhan Regulasi ESDM", "Kepercayaan Mitra & Klien"

### 4.5 Layanan (Services)
**Tujuan:** List jasa yang dijual, gaya editorial (bukan card grid generik SaaS).

**Layout:** Vertical list, tiap item full-width row dengan border-bottom tipis (divider line), bukan card kotak dengan shadow.

**Per item layanan berisi:**
- Nomor urut besar di kiri (`01`, `02`, `03`...) — serif/mono, warna muted/accent
- Judul layanan (serif, medium-large)
- Deskripsi singkat 1–2 baris (sans)
- Icon kecil atau tanda panah di kanan (untuk indikasi expand/klik jika mau dibuat accordion)
- Hover state: background section item berubah sedikit + garis aksen kiri muncul + panah bergerak/translate

**Contoh daftar layanan (placeholder, sesuaikan dengan klien):**
1. Konsultasi & Pengecekan Kelengkapan Dokumen IUJP
2. Pengurusan Perizinan IUJP Baru
3. Perpanjangan / Her-registrasi IUJP
4. Pendampingan Audit & Kepatuhan Regulasi
5. Konsultasi Legal Pertambangan Lainnya

Opsional: klik item → expand accordion menampilkan detail lebih lanjut (requirement dokumen, estimasi waktu proses).

### 4.6 Proses Pengurusan (Timeline/Steps)
**Tujuan:** Transparansi proses kerja → bangun trust bahwa proses jelas & terstruktur.

**Layout:** Horizontal timeline (desktop) yang jadi vertical stacked (mobile), dengan garis penghubung antar step, style seperti infografis majalah — bukan stepper generik dengan icon bulat template.

**Per step:**
- Nomor step besar (serif, outline/muted)
- Judul step singkat
- Deskripsi 1 kalimat
- Estimasi waktu (opsional, misal "3–5 hari kerja")

**Contoh alur (placeholder):**
1. Konsultasi Awal & Assessment Kebutuhan
2. Pengumpulan & Verifikasi Dokumen
3. Pengajuan Permohonan ke Instansi Terkait
4. Monitoring & Follow-up Proses
5. Penerbitan Izin & Serah Terima

### 4.7 Kenapa Pilih Kami (Value Proposition)
**Layout:** Grid 2–3 kolom, tiap item pakai format seperti "editorial callout" — bukan card dengan icon generik ditengah-tengah, tapi lebih ke teks besar + deskripsi.

**Contoh poin (placeholder):**
- Pengalaman & tim ahli regulasi pertambangan
- Proses transparan dengan update berkala
- Tingkat keberhasilan tinggi
- Pendampingan penuh sampai izin terbit

### 4.8 Statistik / Angka Pencapaian
**Layout:** Full-width band, background beda (misal `--color-surface` terang untuk kontras dari section gelap sekitarnya, atau tetap gelap dengan angka besar warna accent).

**Konten:** 3–4 angka besar (serif/sans-bold, 60–80px) dengan label kecil di bawahnya. Contoh: "150+ Izin Diterbitkan", "98% Tingkat Persetujuan", "10+ Tahun Pengalaman", "24/7 Konsultasi Responsif". (Angka final dari klien, ini placeholder struktur.)

### 4.9 Testimoni Klien
**Layout:** Pull-quote style — satu testimoni besar ditampilkan dominan (font besar, italic, serif), dengan nama & posisi klien kecil di bawahnya. Jika ada beberapa testimoni, buat carousel/slider sederhana (bukan grid card testimonial generik).

### 4.10 FAQ
**Layout:** Accordion list, style konsisten dengan section Layanan (list dengan divider line, bukan card). Pertanyaan seputar: berapa lama proses, dokumen apa saja dibutuhkan, biaya konsultasi, area layanan, dll (copy final by klien).

### 4.11 CTA / Kontak Section
**Layout:** Section penutup sebelum footer, background gelap dominan dengan sedikit foto tambang samar sebagai texture (opacity rendah + overlay).

**Konten:**
- H2 besar (serif): ajakan kuat, misal "Siap Mengurus Legalitas Usaha Anda?"
- Subtext singkat
- CTA button besar: "Hubungi Kami Sekarang" → WhatsApp link / form kontak
- Opsional: form kontak singkat (Nama, Perusahaan, No. HP/Email, Pesan) di samping/bawah CTA.

### 4.12 Footer
- Background paling gelap (`--color-bg-primary` atau lebih gelap sedikit).
- Kolom: Logo + tagline singkat | Nav links | Kontak (alamat, email, telepon, WhatsApp) | Social media (jika ada).
- Copyright line kecil di paling bawah.

---

## 5. Responsive Behavior

- **Breakpoints:** Mobile (<640px), Tablet (640–1024px), Desktop (>1024px).
- Hero: headline size turun signifikan di mobile (clamp() based), pastikan tetap 2 baris max, CTA stack vertical full-width.
- Section 2-kolom (Tentang, Value Prop) → jadi 1 kolom stacked di mobile, foto di atas atau bawah teks (bukan di tengah/interupsi).
- Timeline proses: horizontal di desktop → vertical stacked dengan garis vertikal penghubung di mobile.
- Navbar → hamburger menu fullscreen di mobile dengan style editorial (bukan dropdown kecil generik).
- Pastikan tap target minimal 44x44px untuk semua elemen interaktif di mobile.

---

## 6. Technical Notes untuk OpenCode

- Gunakan **CSS custom properties (variables)** untuk seluruh color token & font family di root, supaya mudah di-adjust tanpa hunting hardcoded value.
- Struktur komponen per section (modular), bukan satu file monolitik — tiap section (`Hero`, `Services`, `ProcessTimeline`, `Testimonials`, `FAQ`, `CTA`, `Footer`, dll) jadi komponen terpisah.
- Gunakan semantic HTML (`<section>`, `<nav>`, `<article>` untuk tiap item layanan/testimoni) untuk accessibility & SEO.
- Font loading: gunakan `font-display: swap`, load via Google Fonts atau self-host untuk performance.
- Image: gunakan lazy loading (`loading="lazy"`) untuk semua gambar non-hero, dan `priority`/eager load khusus untuk hero image.
- Animasi scroll-reveal: implementasikan dengan library ringan (Intersection Observer native atau Framer Motion jika project React) — jangan library berat yang bloat bundle.
- Pastikan skill `uipro` dipakai untuk konsistensi komponen UI (button, nav, accordion), dan skill `impeccable` dipakai untuk quality-check spacing/alignment/typography sebelum dianggap selesai per section.
- SEO basics: title tag, meta description, OG image (pakai salah satu hero shot dengan overlay brand), struktur heading H1→H2→H3 yang benar (jangan skip level).
- Accessibility: kontras warna teks-di-atas-gelap wajib lolos WCAG AA minimum, semua CTA button punya focus-state jelas (outline accent color), alt text di semua image.

---

## 7. Konten yang Masih Perlu Diisi Klien (Placeholder saat ini)

Tandai jelas di code/comment sebagai `TODO: konten dari klien`:
- Copy final headline hero & semua headline section
- Daftar layanan final beserta detail (dokumen, durasi, harga jika ada)
- Data statistik/pencapaian riil (jumlah izin terbit, tahun pengalaman, dll)
- Testimoni klien asli
- FAQ final
- Foto-foto asli tambang/kantor/tim (bukan stock)
- Logo brand "Izin IUJP" (jika belum ada, sediakan wordmark sementara pakai font Fraunces)
- Info kontak: alamat, nomor WhatsApp, email

---

## 8. Out of Scope (v1)

- Multi-language (ID only untuk v1)
- Dashboard klien / login area
- Blog/artikel (kemungkinan fase 2)
- Payment gateway (jasa masih via konsultasi manual/kontak langsung)

---

## 9. Definition of Done

- Semua section di atas ter-implementasi sesuai struktur & style guide (color, font, layout principle).
- Responsive tervalidasi di 3 breakpoint (mobile/tablet/desktop).
- Placeholder konten & image ditandai jelas dengan komentar `TODO`.
- Lighthouse score minimal: Performance 85+, Accessibility 90+, SEO 90+ (baseline sebelum optimisasi lanjutan).
- Tidak ada elemen visual yang menyerupai template SaaS generik (gradient blob, rounded card shadow generik, icon set generic tanpa treatment).
