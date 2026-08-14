---
date_created: 2026-08-14T15:24
date_modified: 2026-08-14T15:29
---

# 🔄 Siklus Hidup & Alur Kerja Pengelolaan Catatan

Vault ini dibangun dengan prinsip bahwa **catatan bukanlah dokumen statis, melainkan entitas dinamis yang berevolusi**. Dokumen ini menjelaskan alur lengkap bagaimana informasi masuk pertama kali ke dalam vault, disaring, disintesis menjadi konsep permanen, digunakan dalam eksekusi proyek, hingga akhirnya diarsipkan.

---

## 🧭 1. Diagram Alur Siklus Catatan (The 4-Stage Pipeline)

Secara umum, setiap potongan informasi bergerak melalui tahapan-tahapan berikut:

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. CAPTURE (Penangkapan Cepat)                                              │
│    Ide mentah, perkuliahan, rapat, khotbah ──► [ 05_fleeting ]              │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ 2. DISTILLATION (Penyaringan Sumber)                                        │
│    Rangkuman buku, artikel, dokumentasi resmi ──► [ 03_resources ]          │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ 3. SYNTHESIS (Sintesis Zettelkasten)                                        │
│    Konsep atomik mandiri & MOC Domain ──► [ 04_permanent ] (Direktori Flat) │
│    (Menghubungkan relasi 'up', 'related', dan 'implicit links')             │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
                    ┌──────────────────┴──────────────────┐
                    ▼                                     ▼
┌──────────────────────────────────────┐ ┌─────────────────────────────────────┐
│ 4. EXECUTION (Pengerjaan Nyata)      │ │ 5. ARCHIVE (Penyimpanan Dingin)     │
│    - Proyek Aktif ──► [ 01_projects ]│ │    - Proyek Selesai                 │
│    - Area Fokus  ──► [ 02_areas ]    │ │    - Fleeting Tuntas ──► [07_arch.] │
└──────────────────────────────────────┘ └─────────────────────────────────────┘
````

## ⚡ 2. Tahap 1: Penangkapan Cepat (_Capture Phase_)

Tujuan dari tahap ini adalah **menghilangkan gesekan kognitif (_zero-friction_) saat mencatat**. Jangan memikirkan kerapian format atau penataan folder saat kamu sedang aktif mendengarkan dosen atau rapat.

### Alur Eksekusi:

1. Tekan **`Alt + N`**.
2. Pilih salah satu template penangkapan:

    - **`Universal Capture`:** Untuk kuliah, ide mendadak, atau catatan teknis cepat.
    - **`Sermon Capture`:** Untuk ibadah, khotbah, atau refleksi rohani.

3. Masukkan topik utama saat diminta oleh _prompt_.
4. Skrip otomatis memberi tag `#inbox`, menambahkan stempel tanggal `YYYY-MM-DD`, dan menyimpannya di folder **`05_fleeting/`**.
5. Tuliskan seluruh isi pikiranmu secara bebas.

> [!tip] Prinsip Fleeting Notes
> 
> Folder `05_fleeting` adalah _scratchpad_ sementara. Jangan biarkan catatan di sini menumpuk selamanya tanpa pernah ditinjau ulang.

## 📚 3. Tahap 2: Penyaringan Sumber (_Distillation Phase_)

Ketika kamu mempelajari sumber eksternal (buku pemrograman, dokumentasi API, slide perkuliahan, atau artikel web), rangkum wawasan tersebut di dalam folder **`03_resources/`**.

### Alur Eksekusi:

1. Tekan **`Alt + N` → `Resource Note`**.
2. Isi informasi yang diminta:

    - **Judul Sumber** (misal: _Black Hat Python_).
    - **Penulis / Kreator** (pisahkan dengan titik koma `;` jika lebih dari satu).
    - **URL / Tautan** (opsional).
    - **Status Membaca** (`to-read`, `readfinisheding`, ``).
    - **Tipe Sumber** (`book`, `article`, `documentation`, `course`, `video`).

3. File akan disimpan di `03_resources/[Judul] - [Penulis].md`.
4. Tuliskan ringkasan wawasan utama di bagian `## Summary & Key Takeaways`.

> [!note] Peran Resource Note
> 
> Resource note mencatat **apa kata pembuat materi** (perspektif luar). Bagian bawah template ini memuat query Dataview otomatis yang akan menampilkan konsep-konsep atomik yang nantinya kamu ekstrak dari sumber ini.

## 🧠 4. Tahap 3: Sintesis Pengetahuan Abadi (_Zettelkasten Phase_)

Ini adalah **tahap paling krusial dalam membangun _Second Brain_**. Di tahap ini, kamu mengekstrak pemahamanmu dari catatan mentah (_fleeting_) atau rangkuman sumber (_resources_) menjadi **catatan konsep mandiri**.

### Tiga Aturan Emas Catatan Permanen (_Permanent Notes_):

1. **Pengetahuan Atomik (_Atomic Knowledge_):** Satu catatan hanya membahas satu ide tunggal. Jika ada dua ide berbeda, pecah menjadi dua file terpisah.
2. **Mandiri Konteks (_Context-Independent_):** Ditulis ulang sepenuhnya menggunakan kata-katamu sendiri agar dapat dipahami bertahun-tahun kemudian tanpa harus membuka kembali catatan kuliah aslinya.
3. **Penautan Relasional (_Relational Linking_):** Selalu hubungkan konsep baru ke konsep yang sudah ada.

### Alur Eksekusi Pembuatan Konsep:

1. Tekan **`Alt + N` → `Concept Note`**.
2. **Masukkan Nama Konsep:** Gunakan kalimat pernyataan/klaim utuh (misal: `Disassembly mengubah kode mesin menjadi assembly`).
3. **Pilih Domain:** Pilih tag domain yang relevan (misal: `cybersec`, `networking`).
4. **Pilih Tautan Induk (`up`):** Pilih MoC domain (misal: `[[_cybersec_hub]]`) atau konsep induk yang lebih luas.
5. Skrip otomatis memindahkan file ke direktori _flat_ **`04_permanent/`**.

### Membangun Jaringan Relasi di Catatan Permanen:

Di dalam catatan permanen, kamu mengelola 3 jenis keterkaitan:

```text
               ┌───────────────────────┐
               │    _cybersec_hub      │  <── Concept Hub (MOC)
               └───────────▲───────────┘
                           │ (up)
               ┌───────────┴───────────┐
               │  SQL Injection ...    │  <── Konsep Aktif
               └───────────▲───────────┘
                           │ (up)
      ┌────────────────────┴────────────────────┐
      │            === (related) ===            │
┌─────▼────────────────┐             ┌──────────▼───────────┐
│ Cross-Site Scripting │             │ Blind SQL Injection  │ (Dependent Child)
└──────────────────────┘             └──────────────────────┘
```

1. **`up` (Hierarki Induk):** Tautan ke atas menuju Concept Hub atau konsep yang lebih makro.
2. **`related` (Hubungan Lateral):** Tautan di frontmatter ke konsep yang berada pada level hierarki yang sama.
3. **`Dependent Concepts (Children)`:** Query Dataview otomatis yang mendata semua catatan yang menunjuk catatan ini sebagai `up`.
4. **`Implicit Links`:** Query Dataview yang secara otomatis mendeteksi setiap catatan di vault yang menyebutkan nama file ini di dalam teks paragraf, tanpa menduplikasi link `up` atau `related`.

## 🎯 5. Tahap 4: Eksekusi Proyek & Area (_Execution Phase_)

Untuk pengerjaan tugas kuliah berbatas waktu, lomba/hackathon, atau tanggung jawab organisasi, gunakan folder **`01_projects`** dan **`02_areas`**:

```text
Langkah 1: Inisialisasi Hub (Alt + N)
   ├── Jalankan template "Project Hub" atau "Area Hub".
   └── Script otomatis membuatkan folder khusus dan file dashboard "_hub.md".

Langkah 2: Pembuatan Catatan Kerja Bebas (Ctrl + N)
   ├── Buka folder proyek/area yang baru terbentuk.
   ├── Tekan "Ctrl + N" untuk membuat catatan kosong polos tanpa template.
   └── Beri nama file secara bebas sesuai kebutuhan kerja.
   └── File baru ini akan otomatis muncul pada tabel "Working Documents" di file "_hub.md"!
```

## 📦 6. Tahap 5: Pengarsipan (_Archiving Phase_)

Agar ruang kerja vault tetap bersih dan fokus pada hal-hal yang sedang aktif:

1. **Pengarsipan Tugas Selesai:**

    - Tekan shortcut **`Ctrl + Shift + A`** di catatan mana saja.
    - Plugin Task Archiver akan otomatis memindahkan seluruh tugas yang sudah dicentang selesai (`- [x]`) ke dalam file **`07_archives/Completed Tasks.md`**.

2. **Pengarsipan Proyek yang Tuntas:**

    - Pindahkan folder proyek dari `01_projects/` ke dalam subfolder **`07_archives/01_projects_done/`**.
    - Ubah status di YAML frontmatter `_hub.md` menjadi `status: Completed`.

3. **Pengarsipan Semester / Kepanitiaan Lampau:**

    - Pindahkan folder mata kuliah atau divisi yang telah selesai dari `02_areas/` ke dalam **`07_archives/02_areas_retired/`**.

4. **Pengarsipan Log Fleeting yang Selesai Disintesis:**

    - Catatan kuliah mentah di `05_fleeting/` yang seluruh faktanya sudah diekstrak ke `04_permanent/` dapat dipindahkan ke **`07_archives/05_fleeting_logs/`** atau dihapus jika tidak lagi diperlukan.

## 🛠️ 7. Otomatisasi Pemeliharaan & Format

- **Simpan & Auto-Lint (`Ctrl + S`):** Selalu simpan catatan dengan `Ctrl + S`. Plugin Linter akan otomatis merapikan format spasi markdown dan memperbarui properti `date_modified` secara _real-time_.
- **Tambah Properti YAML (`Ctrl + ;`):** Gunakan untuk menyisipkan atribut metadata baru tanpa harus mengetik manual.
- **Ubah Nama File (`F2`):** Selalu ubah nama file melalui Obsidian (`F2`) agar semua tautan _backlink_ di seluruh vault diperbarui secara otomatis tanpa merusak query Dataview.

