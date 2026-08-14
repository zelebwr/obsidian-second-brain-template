---
date_created: 2026-07-25T15:16
date_modified: 2026-08-14T16:29
---

# 🧠 Second Brain Vault: Panduan Penggunaan

Vault ini merupakan template **Second Brain** siap pakai yang menggabungkan paradigma **PARA**, **Zettelkasten**, dan **Eisenhower Matrix Task Management**. Dokumen ini berfungsi sebagai panduan cepat untuk memahami alur kerja dan konfigurasi sistem vault.

---

## 🚀 1. Persiapan Pertama Kali

1. **Matikan Restricted Mode:**
   Buka **Settings (Ctrl + ,) → Community Plugins → Turn off Restricted Mode** → Pastikan semua plugin yang terpasang berada dalam status aktif (ON).
2. **Buka [[00_maps_of_content/Dashboard|Dashboard]] atau [Dashboard](./00_maps_of_content/Dashboard):**
   Tekan `Ctrl + Shift + E` untuk membuka File Explorer, lalu buka `00_maps_of_content/Dashboard.md`.
3. **Uji Coba Shortcut Template:**
   Tekan `Alt + N` di mana saja untuk memicu menu pembuatan catatan otomatis (Templater).

---

## 📂 2. Arsitektur Folder Vault

Vault ini menggunakan penomoran prefix numerik agar hierarki folder di sidebar tetap rapi dan tidak teracak secara alfabetis:

| Folder | Nama | Fungsi / Kegunaan |
| :--- | :--- | :--- |
| **`00_maps_of_content`** | Dashboard & MOC | Peta navigasi utama, indeks, serta pusat pemantau tugas dan jadwal harian (`Dashboard.md`). |
| **`01_projects`** | Proyek Aktif | Catatan proyek **berbatas waktu** yang memiliki _deadline_ dan hasil akhir spesifik. |
| **`02_areas`** | Area Tanggung Jawab | **Komitmen jangka panjang** (Perkuliahan ITS, Organisasi, Kepanitiaan, Skill IT, Administrasi). |
| **`03_resources`** | Referensi Eksternal | **Rangkuman / wawasan dari sumber luar** (buku, artikel, dokumentasi teknis, slide dosen). |
| **`04_permanent`** | Konsep Zettelkasten | **Catatan konsep atomik** mandiri yang saling terhubung menggunakan metadata dan link relasional. |
| **`05_fleeting`** | Tangkapan Cepat (Inbox) | Tempat corat-coret cepat tanpa memikirkan format saat kuliah, rapat, atau khotbah. |
| **`06_daily`** | Jurnal Harian | Log aktivitas harian, tempat mencatat _habit_, dan pemantau tugas jatuh tempo. |
| **`07_archives`** | Arsip Selesai | Penyimpanan dingin untuk proyek yang selesai, catatan lampau, dan tugas yang diarsip. |
| **`99_meta`** | Konfigurasi Sistem | Script Templater, aset media, kelas CSS, dan pustaka dokumentasi vault. |

### 📁 Contoh Struktur Direktori

```text
.
├── 00_maps_of_content
│   └── Dashboard.md
├── 01_projects
│   ├── ai_innovation_challenge_compfest_18
│   ├── ctf_hackthebox_cyber_apocalypse
│   └── web_pengmas_bemf
├── 02_areas
│   ├── artificial_intelligence_usage
│   ├── committee_work
│   ├── university_its
│   └── vim_usage
├── 03_resources
│   ├── Containers vs. Virtual Machines - Ian Buchanan.md
│   ├── Docker Compose_TKA Modul 2 - Lab KCKS.md
│   └── Materi gRPC Part 1 - Gagatsatya Adiatmaja.md
├── 04_permanent
│   ├── _cybersec_hub.md
│   ├── SQL Injection mengandalkan input yang tidak disanitasi.md
│   └── Disassembly mengubah kode mesin menjadi assembly.md
├── 05_fleeting
│   ├── 2026-04-06 - AI Lecture.md
│   ├── 2026-04-09 - Cloud Computing Lecture 4.md
│   └── 2026-08-05 - Pertemuan Tim Lomba.md
├── 06_daily
│   ├── 2026-08-06 Thursday.md
│   └── Daily Habit Tracker.md
├── 07_archives
│   ├── 01_projects_done
│   ├── 02_areas_retired
│   └── Completed Tasks.md
└── 99_meta
    ├── assets
    ├── templates
    └── vault_config
````

---

## ⌨️ 3. Cheat Sheet Shortcut / Hotkey Utama

| **Shortcut**           | **Aksi**                      | **Fungsi**                                                                        |
| ---------------------- | ----------------------------- | --------------------------------------------------------------------------------- |
| **`Alt + N`**          | **Buat Catatan via Template** | Membuka menu Templater untuk membuat catatan terstruktur secara otomatis.         |
| **`Ctrl + Alt + S`**   | **Pencarian Omnisearch**      | Pencarian mendalam pada seluruh teks markdown dan file PDF yang disematkan.       |
| **`Ctrl + L`**         | **Toggle List / Checkbox**    | Mengubah baris menjadi daftar poin, _checkbox_, atau menandai tugas selesai.      |
| **`Ctrl + S`**         | **Simpan & Auto-Lint**        | Menyimpan catatan sekaligus merapikan format markdown secara otomatis.            |
| **`F2`**               | **Ubah Nama File**            | Mengubah nama catatan dan memperbarui semua _backlink_ terkait.                   |
| **`Shift + Delete`**   | **Hapus File**                | Menghapus catatan yang sedang dibuka secara permanen.                             |
| **`Ctrl + Shift + K`** | **Hapus Baris**               | Menghapus satu baris penuh di tempat kursor berada.                               |
| **`Ctrl + Shift + E`** | **File Explorer**             | Membuka/menutup navigasi folder di sidebar kiri.                                  |
| **`Ctrl + Shift + O`** | **Outline Dokumen**           | Membuka daftar isi (daftar _heading_) di sidebar kanan.                           |
| **`Ctrl + Shift + A`** | **Arsip Tugas Selesai**       | Memindahkan semua tugas yang sudah dicentang ke `07_archives/Completed Tasks.md`. |
| **`Ctrl + ;`**         | **Tambah Properti YAML**      | Menambahkan metadata/properti di bagian atas file.                                |
| **`Alt + ↑ / ↓`**      | **Pindah Baris**              | Memindahkan baris aktif ke atas atau ke bawah dengan mulus.                       |
| **`Alt + ← / →`**      | **Toggle Sidebar**            | Menyembunyikan atau memunculkan sidebar kiri dan kanan.                           |
| **`Alt + E`**          | **Toggle Excalidraw**         | Mengubah/membuka tampilan catatan antara mode teks dan mode kanvas visual.        |
| **`Ctrl + Alt + B`**   | **Toggle Callout / Quote**    | Mengubah baris aktif menjadi format _blockquote_ atau kutipan.                    |

---

## 🔄 4. Alur Kerja Harian & Script Templater

Cukup tekan **`Alt + N`** untuk menjalankan salah satu alur kerja otomatis berikut:

### 1. 📥 Tangkapan Cepat (`script_universal_capture` & `script_sermon_capture`)

- **Kapan digunakan:** Saat kuliah, rapat, khotbah, atau ketika ide muncul mendadak.
- **Cara kerja:** Meminta judul topik, menambahkan stempel tanggal `YYYY-MM-DD`, memberi tag `#inbox`, dan menyimpan file langsung ke `05_fleeting` dengan format nama `YYYY-MM-DD - Topic`.

### 2. 📅 Jurnal Harian (`script_daily_journal`)

- **Kapan digunakan:** Setiap pagi/hari berjalan untuk mencatat agenda, _habit_, refleksi harian, atau _scratchpad_.
- **Cara kerja:** Membuat jurnal hari ini di folder `06_daily/` yang dilengkapi _checklist_ harian serta query otomatis tugas yang jatuh tempo/terlambat.

### 3. 🧠 Catatan Konsep Atomik (`script_permanent_note`)

- **Kapan digunakan:** Saat menyintesis materi IT atau konsep ilmu komputer menjadi pemahaman mandiri.
- **Cara kerja:** Meminta nama konsep, memilih Domain Hub induk (`up`), dan secara otomatis menyuntikkan query Dataview untuk relasi anak (_Dependent_) dan lateral (_Related_).

### 4. 📚 Catatan Referensi (`script_resource_note`)

- **Kapan digunakan:** Saat membaca buku, dokumentasi resmi, slide kuliah, atau artikel teknis.
- **Cara kerja:** Meminta judul, penulis, URL, status membaca, dan tipe sumber, lalu menyimpannya ke `03_resources` beserta ringkasan konsep yang diekstrak.

### 5. 🎯 Hub Proyek & Area (`script_project_hub` & `script_area_hub`)

- **Kapan digunakan:** Saat memulai proyek baru atau fokus area tanggung jawab baru.
- **Cara kerja:** Membuat folder khusus beserta dashboard `_hub.md`, lengkap dengan tabel dokumen kerja dan filter tugas khusus folder tersebut.

### 6. 🎨 Pembuat Diagram Visual (`script_excalidraw_generator`)

- **Kapan digunakan:** Saat membuat diagram arsitektur sistem, alur kerja (_flowchart_), atau _mindmap_.
- **Cara kerja:** Meminta konteks catatan, membuat file Excalidraw terstruktur, dan mengarahkannya ke folder target.

---

## 📊 5. Manajemen Tugas & Habit Tracker (`Dashboard.md`)

### 🔄 Daily Habit Tracker (Global Task Engine)

Pelacakan kebiasaan berjalan secara **otomatis di seluruh vault**:

- Tuliskan tugas rutin di catatan mana saja (misalnya di Daily Journal) dengan tag `#habit`:

    Markdown

    ```
    - [ ] Olahraga pagi #habit
    ```

- Saat tugas dicentang selesai (`- [x]`), sistem secara otomatis menyematkan tanggal penyelesaian (`completion date`), dan grafik **Daily Habit Tracker** di Dashboard akan langsung terisi.

### ⚖️ Eisenhower Matrix (Sorting Tugas Otomatis)

Tuliskan tugas dengan _checkbox_ markdown standar dan tag `#important`:

Markdown

```
- [ ] Selesaikan laporan praktikum Big Data #important 📅 2026-08-10
```

#### Pembagian Otomatis di Dashboard:

1. **🔥 Q1: Mendesak & Penting (Kerjakan Segera):** Tugas berlabel `#important` yang jatuh tempo sebelum 4 hari ke depan.
2. **📜 Q2: Tidak Mendesak & Penting (Jadwalkan):** Tugas berlabel `#important` tanpa batas waktu atau jatuh tempo lebih dari 3 hari.
3. **📞 Q3: Mendesak & Tidak Penting (Delegasikan / Cepat):** Tugas standar tanpa `#important` yang jatuh tempo sebelum 4 hari ke depan.
4. **🗑️ Q4: Tidak Mendesak & Tidak Penting (Arsip / Santai):** Tugas umum tanpa tanggal tenggat atau label penting.

---

## 🧠 6. Alur Pengetahuan Zettelkasten

Untuk membangun _Second Brain_ yang kuat dan terhubung, ikuti siklus pemrosesan informasi berikut:

```text
[Catatan Sekilas / Corat-Coret] ──► [Rangkuman Sumber] ──► [Konsep Permanen Atomik]
         (05_fleeting)                 (03_resources)             (04_permanent)
```

1. **Tangkap ide mentah** dengan cepat di `05_fleeting` (`Alt + N` → `Universal Capture`).
2. **Rangkum materi sumber** di `03_resources` (`Alt + N` → `Resource Note`).
3. **Ekstraksi menjadi konsep atomik mandiri** di `04_permanent` (`Alt + N` → `Permanent Note`). Hubungkan catatan ke konsep induk (`up`) atau Domain Hub (`_hub`).
4. **Kelola eksekusi proyek** di `01_projects` atau `02_areas` (`Alt + N` → `Project Hub` / `Area Hub`).

---

## 📚 7. Indeks Panduan Teknis Lengkap

Untuk mempelajari detail arsitektur, konvensi penamaan, dan standar penulisan tingkat lanjut, silakan buka modul panduan berikut:

1. [[99_meta/vault_config/id-01-panduan-arsitektur-dan-filosofi-vault|🏗️ Panduan Arsitektur & Filosofi Vault]]
2. [[99_meta/vault_config/id-02-konvensi-nama-tag-dan-metadata|🏷️ Konvensi Nama, Tag, & Metadata]]
3. [[99_meta/vault_config/id-03-alur-kerja-siklus-catatan|🔄 Siklus & Alur Kerja Catatan]]

