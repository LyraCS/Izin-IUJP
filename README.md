# Izin IUJP

Landing page untuk layanan konsultasi dan pengurusan **IUJP (Izin Usaha Jasa Pertambangan)** bagi perusahaan jasa penunjang operasi tambang di Indonesia.

Dibangun dengan React + Vite, mengikuti arahan desain **Industrial Editorial** dari PRD (dark base dengan aksen burnt orange, font Barlow Condensed + Barlow) sehingga terasa kredibel, institutional, dan otoritatif di ranah pertambangan.

![Preview](https://images.unsplash.com/photo-1523848309072-c199db53f137?q=80&w=1470&auto=format&fit=crop)

## Fitur

- Single-page scrolling dengan sticky navbar
- Hero section dengan foto tambang full-bleed
- Trust/credibility strip
- Section Tentang, Layanan, Proses, Keunggulan, Statistik, FAQ, dan CTA
- Accordion FAQ interaktif
- Mobile responsive dengan hamburger menu fullscreen
- Desain token-based (CSS custom properties) agar mudah di-sesuaikan

## Tech Stack

- React 19
- Vite
- TypeScript

## Cara Menjalankan

```bash
npm install
npm run dev
```

Build untuk produksi:

```bash
npm run build
npm run preview
```

## Struktur

- `PRD-Izin-IUJP.md` : dokumen kebutuhan produk
- `PRODUCT.md` : ringkasan produk dan keputusan desain
- `src/components/` : satu komponen per section (Header, Hero, Services, dll)
- `src/App.css` : design token dan seluruh styling

## Catatan Konten

Seluruh copy final, data statistik, testimoni, dan foto asli tambang masih placeholder dan menunggu materi dari klien. Tandai placeholder ini dengan komentar `TODO: konten dari klien`.

## Lisensi

ISC
