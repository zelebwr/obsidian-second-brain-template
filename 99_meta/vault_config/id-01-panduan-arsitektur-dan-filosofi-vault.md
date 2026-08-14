---
date_created: 2026-08-06T15:00
date_modified: 2026-08-14T15:38
---

# 🏗️ Panduan Arsitektur & Filosofi Vault

Vault ini dikonfigurasi untuk beroperasi layaknya sebuah **basis data relasional**, memanfaatkan penggabungan ketat antara metode **Zettelkasten** (pemrosesan pengetahuan abadi) dan **PARA** (eksekusi proyek dan tanggung jawab).

---

## 1. Filosofi Utama: Pemisahan _Capture_ dan _Synthesis_

Aturan terpenting dalam vault ini adalah **jangan pernah mencoba merapikan, mengelompokkan, atau memformat catatan saat kamu sedang aktif menyerap informasi**. Beban kognitif dibagi menjadi dua fase yang terpisah:

| **Fase**                       | **Sebutan Catatan** | **Aksi**                                                                                                                                                | **Lokasi Output** |
| :----------------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------- |
| **1. Capture** _(Penangkapan)_ | **Fleeting Notes**  | Pencatatan _real-time_ tanpa gesekan (_zero-friction_) saat kuliah, rapat, atau mendengarkan khotbah. Abaikan format, tata bahasa, dan struktur folder. | `05_fleeting`     |
| **2. Synthesis** _(Sintesis)_  | **Permanent Notes** | Ekstraksi fakta atomik secara terencana dan terstruktur dari _fleeting notes_, ditulis ulang sepenuhnya menggunakan bahasamu sendiri.                   | `04_permanent`    |

---

## 2. Blueprint Arsitektur Folder Numerik

Vault ini mengandalkan pemisahan yang tegas antara **eksekusi aktif**, **penyimpanan mentah**, dan **pengetahuan abadi**. Penomoran prefix (`00` hingga `99`) digunakan agar urutan folder di sidebar tidak teracak secara alfabetis.

```text
.
├── 00_maps_of_content
│   └── Dashboard.md                 <-- Pusat kendali utama: Eisenhower Matrix & Navigasi.
├── 01_projects
│   └── a_renewal_agent_8            <-- Folder untuk proyek kompleks/CTF berbatas waktu.
│       ├── _ara8_hub.md             <-- Dashboard proyek (menggunakan Project Hub Template).
│       ├── meetings                 <-- Log rapat khusus proyek ini.
│       └── api_architecture.md      <-- Catatan kerja standar tanpa template.
├── 02_areas
│   ├── committee_work               <-- Folder tanggung jawab jangka panjang/organisasi.
│   │   └── bemf_web
│   │       ├── _bemf_hub.md         <-- Dashboard area.
│   │       └── meetings             <-- Log rapat divisi/panitia.
│   └── university_its
│       └── semester_4               <-- Struktur folder fisik untuk mempermudah pengarsipan.
│           └── database_system
│               ├── _db_sys_hub.md
│               └── evaluation_rubric.md
├── 03_resources
│   └── Containers vs. Virtual Machines - Ian Buchanan.md <-- Rangkuman referensi eksternal.
├── 04_permanent
│   ├── _cybersec_hub.md             <-- Indeks Konsep/MoC yang menghubungkan konsep atomik.
│   ├── Model OSI Layer 7 menangani protokol pengguna.md  <-- DIREKTORI FLAT (Tanpa subfolder).
│   └── Disassembly mengubah kode mesin menjadi assembly.md <-- Catatan konsep atomik mandiri.
├── 05_fleeting
│   └── 2026-03-22 - Catatan Kuliah Jarkom.md             <-- Format penangkapan cepat: YYYY-MM-DD - Topic.
├── 06_daily
│   ├── 2026-03-22 Sunday.md         <-- Jurnal harian / tempat mencatat habit & tugas hari berjalan.
│   └── Daily Habit Tracker.md       <-- File master habit (opsional).
├── 07_archives
│   ├── 01_projects_done             <-- Cold storage untuk proyek yang selesai.
│   ├── 02_areas_retired             <-- Cold storage untuk semester/kepanitiaan lalu.
│   ├── 05_fleeting_logs             <-- Log fleeting yang sudah selesai disintesis.
│   └── Completed Tasks.md           <-- Log arsip tugas yang selesai via hotkey.
└── 99_meta
    ├── assets                       <-- Gambar, PDF, dan lampiran lokal.
	│   └── a_renewal_agent_8        <-- Folder lampiran gambar pada lomba/proyek ARA 
    ├── templates                    <-- File skrip otomatisasi Templater.
    └── vault_config                 <-- Dokumentasi teknis dan konfigurasi sistem vault.
````

# 3. Rincian Fungsi & Kebijakan Folder

1. **`00_maps_of_content` (Dashboard & Indeks Utama):**
    Pintu gerbang vault. Berisi `Dashboard.md` yang memuat Eisenhower Matrix Task Management, grafik kontribusi habit, dan navigasi utama.

2. **`01_projects` (Proyek Aktif):**
    Tempat pengerjaan proyek berbatas waktu dengan _deadline_ dan hasil akhir yang jelas. Setiap proyek memiliki folder sendiri yang dipimpin oleh dashboard `_hub.md`.

3. **`02_areas` (Area Tanggung Jawab):**
    Standar hidup, peran berkelanjutan, dan komitmen jangka panjang (Perkuliahan ITS, Organisasi, Kepanitiaan, Administrasi). Struktur sub-folder diperbolehkan di sini untuk memisahkan antar-semester atau divisi.

4. **`03_resources` (Referensi Eksternal):**
    Tempat merangkum pengetahuan yang bersumber dari luar: buku, dokumentasi resmi, artikel, video YouTube, atau slide kuliah. Format penamaan: `[Judul] - [Penulis/Sumber].md`.

5. **`04_permanent` (Jaringan Konsep Zettelkasten):**
    **Inti dari Second Brain.** Berisi pengetahuan atomik, mandiri, dan berlaku abadi (_evergreen_).

    > ⚠️ **Aturan Ketat:** Folder `04_permanent` **WAJIB bersifat FLAT (tanpa subfolder)**. Pengelompokan dilakukan menggunakan _Concept Hub_ (`_hub.md`) serta relasi metadata `up` (induk) dan `related` (lateral).

6. **`05_fleeting` (Inbox Universal):**
    Pintu masuk semua informasi mentah. Tempat corat-coret cepat tanpa memikirkan struktur, format, atau nama file yang sempurna. Menggunakan format stempel tanggal: `YYYY-MM-DD - Topic.md`.

7. **`06_daily` (Jurnal Harian):**
    Log aktivitas harian, _scratchpad_, dan pemantau tugas harian. Tugas dengan tag `#habit` yang dicentang di sini akan otomatis terdata di grafik Dashboard.

8. **`07_archives` (Cold Storage):**
    Tempat pemindahan folder proyek yang sudah tuntas, area/semester yang telah lewat, atau catatan fleeting yang sudah selesai disintesis.

9. **`99_meta` (Ruang Mesin Vault):**
    Berisi seluruh konfigurasi teknis, aset media (gambar/diagram), skrip Templater, dan pustaka dokumentasi sistem vault.

# 4. Mekanisme Relasional Zettelkasten (`04_permanent`)

Untuk menjaga agar catatan permanen saling terhubung dan mudah ditelusuri tanpa struktur folder hierarki, vault menggunakan 3 jenis relasi:

```text
               ┌───────────────────────┐
               │    _cybersec_hub      │  <── Concept Hub (MOC)
               └───────────▲───────────┘
                           │ (up)
               ┌───────────┴───────────┐
               │  SQL Injection ...    │  <── Atomic Permanent Note
               └───────────▲───────────┘
                           │ (up)
      ┌────────────────────┴────────────────────┐
      │            <-- (related) -->            │
┌─────▼────────────────┐             ┌──────────▼───────────┐
│ Cross-Site Scripting │             │ Blind SQL Injection  │ (Child Concept)
└──────────────────────┘             └──────────────────────┘
```

1. **`up` (Hierarki Induk / Hub):** Menghubungkan konsep ke MOC Domain (misal: `[[_cybersec_hub]]`) atau konsep induk yang lebih luas. Catatan ini otomatis terdaftar di tabel _Dependent Concepts_ milik induknya.
2. **`related` (Hubungan Lateral):** Menghubungkan ke konsep lain yang setara atau relevan di domain yang sama/berbeda.
3. **Implicit Links (Deteksi Otomatis):** Query Dataview secara otomatis menampilkan semua catatan yang menyebutkan nama konsep ini di dalam teks isi, tanpa terjadi duplikasi dengan relasi `up` atau `related`.

# 5. Matriks Penentuan Lokasi Catatan

Gunakan tabel ini sebagai acuan cepat ketika kamu ingin membuat catatan baru:

| **Jika informasi yang ingin dicatat adalah...**         | **Maka tempatnya di...** | **Template / Aksi yang Digunakan**                        | **Format Nama File**                 |
| ------------------------------------------------------- | ------------------------ | --------------------------------------------------------- | ------------------------------------ |
| Pengerjaan software / persiapan lomba CTF / Hackathon   | `01_projects`            | Gunakan **Project Hub** untuk foldernya.                  | Folder Proyek + `_hub.md`            |
| Mata kuliah semester aktif / tugas kepanitiaan          | `02_areas`               | Gunakan **Area Hub** untuk foldernya.                     | Folder Area + `_hub.md`              |
| Rangkuman buku, dokumentasi teknis, artikel, video      | `03_resources`           | Gunakan **Resource Note**.                                | `[Judul] - [Penulis/Sumber]`         |
| Fakta teknis / konsep ilmu yang berdiri sendiri & abadi | `04_permanent`           | Gunakan **Concept Note** (Simpan di root `04_permanent`). | `[Kalimat Pernyataan Konsep Atomik]` |
| Catatan langsung saat kuliah, rapat, atau khotbah       | `05_fleeting`            | Gunakan **Universal Capture** atau **Sermon Capture**.    | `YYYY-MM-DD - [Topik]`               |
| Perencanaan agenda, refleksi harian, habit tracking     | `06_daily`               | Gunakan **Daily Journal**.                                | `YYYY-MM-DD [Hari]`                  |