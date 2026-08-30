import type { NavLink, Service, ProcessStep, Reason, Stat, FaqItem, ValuePoint, ContactInfo } from "./types"

export const NAV_LINKS: NavLink[] = [
  { label: "Layanan", href: "#layanan" },
  { label: "Proses", href: "#proses" },
  { label: "Tentang", href: "#tentang" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
]

export const TRUST_STATS: Stat[] = [
  { num: "50+", label: "Perusahaan Terbantu" },
  { num: "98%", label: "Tingkat Persetujuan" },
  { num: "10+", label: "Tahun Pengalaman" },
]

export const VALUE_POINTS: ValuePoint[] = [
  { label: "Legalitas Operasional", text: "Basis hukum untuk menjalankan jasa pertambangan." },
  { label: "Kepatuhan Regulasi ESDM", text: "Selaras dengan aturan Kementerian ESDM." },
  { label: "Kepercayaan Mitra & Klien", text: "Akses pasar dan kerja sama yang lebih luas." },
]

export const SERVICES: Service[] = [
  { title: "Konsultasi & Pengecekan Kelengkapan Dokumen IUJP", desc: "Verifikasi kelengkapan dokumen sebelum pengajuan permohonan." },
  { title: "Pengurusan Perizinan IUJP Baru", desc: "Penanganan lengkap dari konsultasi awal hingga izin diterbitkan." },
  { title: "Perpanjangan / Her-Registrasi IUJP", desc: "Pembaruan izin yang akan berakhir tanpa jeda operasional." },
  { title: "Pendampingan Audit & Kepatuhan Regulasi", desc: "Audit rutinitas dan kepatuhan terhadap regulasi ESDM." },
  { title: "Konsultasi Legal Pertambangan Lainnya", desc: "Advokasi dan strategi hukum untuk kebutuhan tambang Anda." },
]

export const PROCESS_STEPS: ProcessStep[] = [
  { no: "01", title: "Konsultasi Awal", desc: "Kami memahami kebutuhan dan kondisi perusahaan Anda.", time: "Hari 1" },
  { no: "02", title: "Persiapan Dokumen", desc: "Kami membantu melengkapi dan menyusun semua dokumen.", time: "Hari 2–7" },
  { no: "03", title: "Pengajuan Permohonan", desc: "Pengajuan resmi ke instansi berwenang melalui OSS.", time: "Hari 8–14" },
  { no: "04", title: "Verifikasi & Persetujuan", desc: "Koordinasi verifikasi hingga persetujuan diterbitkan.", time: "Hari 15–30" },
  { no: "05", title: "Izin Terbit", desc: "IUJP resmi terbit dan siap digunakan beroperasi.", time: "Hari 30+" },
]

export const REASONS: Reason[] = [
  { no: "01", title: "Berpengalaman", desc: "Puluhan tahun menangani perizinan jasa pertambangan." },
  { no: "02", title: "Tim Ahli & Legal", desc: "Konsultan berpengalaman di bidang regulasi ESDM." },
  { no: "03", title: "Transparan", desc: "Tahapan jelas, biaya terbuka, tanpa biaya tersembunyi." },
  { no: "04", title: "Komunikatif", desc: "Pendampingan responsif di setiap proses." },
]

export const STATS: Stat[] = [
  { num: "50+", label: "Perusahaan Terbantu" },
  { num: "98%", label: "Tingkat Persetujuan" },
  { num: "10+", label: "Tahun Pengalaman" },
  { num: "500+", label: "Dokumen Disetujui" },
]

export const FAQS: FaqItem[] = [
  { q: "Apa itu IUJP?", a: "Izin Usaha Jasa Pertambangan (IUJP) adalah izin yang wajib dimiliki perusahaan jasa penunjang kegiatan pertambangan sesuai regulasi Kementerian ESDM." },
  { q: "Berapa lama proses pengurusannya?", a: "Umumnya 1–3 bulan tergantung kelengkapan dokumen dan instansi penerbit. Kami memastikan proses seefisien mungkin." },
  { q: "Dokumen apa saja yang diperlukan?", a: "Akte perusahaan, NPWP, domisili, dan persyaratan teknis kegiatan. Tim kami akan membantu memeriksa dan melengkapi setiap dokumen." },
  { q: "Berapa biaya jasanya?", a: "Biaya bervariasi sesuai jenis dan kompleksitas layanan. Hubungi kami untuk konsultasi dan penawaran transparan." },
]

export const CONTACT: ContactInfo = {
  waLink: "https://wa.me/6281318415169",
  waDisplay: "+62 813-1841-5169",
  email: "cs@legalind.co.id",
  address: "Ruko 92 Avenix BSD CITY, Jl. Raya Cisauk No.7 Blk F, Sampora, Kec. Cisauk, Kabupaten Tangerang, Banten 15345",
  mapsLink: "https://maps.app.goo.gl/p3336gNvcZgnHV5FA",
}