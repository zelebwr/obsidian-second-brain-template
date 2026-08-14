---
date_created: 2026-08-14T13:19
date_modified: 2026-08-14T14:56
---

# 🏷️ Konvensi Penamaan File, Tag, & Metadata (YAML)

Agar sistem _Second Brain_ dapat beroperasi layaknya basis data relasional yang andal, seluruh catatan di dalam vault wajib mematuhi **standar sintaksis mekanis** yang seragam. Kepatuhan terhadap standar ini memastikan bahwa query otomatis (_Dataview_, _Obsidian Tasks_, dan _Contribution Graph_) dapat memfilter, mengagregasi, dan menghubungkan catatan secara presisi tanpa ada data yang terlewat.

---

## 1. Aturan & Konvensi Penamaan File (_File Naming Conventions_)

Setiap direktori memiliki aturan penamaan yang disesuaikan dengan fungsinya masing-masing:

| Kategori Direktori | Format Nama File | Contoh File Nyata | Penjelasan / Aturan Khusus |
| :--- | :--- | :--- | :--- |
| **`01_projects`** _(Hub)_ | `_[singkatan]_hub.md` | `_ai_inn_hub.md` | Dibuat via **`Alt + N` → Project Hub**. Otomatis membuat folder proyek dan file dashboard `_hub.md`. |
| **`01_projects`** _(Catatan Kerja)_ | **Bebas (Sesuai Kebutuhan)** | `API Architecture.md`<br>`Catatan Fitur Auth.md` | Dibuat menggunakan **`Ctrl + N`** (catatan kosong baru tanpa template) langsung di dalam folder proyek. Penamaan bebas sesuai preferensi. |
| **`02_areas`** _(Hub)_ | `_[singkatan]_hub.md` | `_db_sys_hub.md` | Dibuat via **`Alt + N` → Area Hub**. Otomatis membuat folder area dan file dashboard `_hub.md`. |
| **`02_areas`** _(Catatan Kerja)_ | **Bebas (Sesuai Kebutuhan)** | `Rubrik Penilaian SBD.md`<br>`Jadwal Piket Divisi.md` | Dibuat menggunakan **`Ctrl + N`** (catatan kosong baru tanpa template) langsung di dalam folder area. Penamaan bebas sesuai kebutuhan. |
| **`03_resources`** | `[Judul] - [Penulis/Sumber].md` | `Containers vs. Virtual Machines - Ian Buchanan.md` | Dibuat via **`Alt + N` → Resource Note**. Menyimpan rangkuman dari buku, artikel, atau dokumentasi luar. |
| **`04_permanent`** _(Hub)_ | `_[domain]_hub.md` | `_cybersec_hub.md` | Dibuat via **`Alt + N` → Concept Hub**. Peta konsep / MoC domain utama yang disimpan langsung di root `04_permanent`. |
| **`04_permanent`** _(Konsep)_ | `[Kalimat Pernyataan Atomik].md` | `Disassembly mengubah kode mesin menjadi assembly.md` | Dibuat via **`Alt + N` → Concept Note**. **Wajib berupa kalimat pernyataan/fakta utuh** (bukan sekadar kata benda) dan disimpan di root `04_permanent` (flat/tanpa subfolder). |
| **`05_fleeting`** _(Universal)_ | `YYYY-MM-DD - [Topik].md` | `2026-04-06 - AI Lecture.md` | Dibuat via **`Alt + N` → Universal Capture**. Untuk coret-coret cepat dengan stempel tanggal ISO. |
| **`05_fleeting`** _(Khotbah)_ | `YYYY-MM-DD - [Topik Khotbah].md` | `2026-04-12 - Saat Iman Mengusir Ketakutan.md` | Dibuat via **`Alt + N` → Sermon Capture**. Khusus catatan khotbah / refleksi ibadah. |
| **`06_daily`** _(Jurnal)_ | `YYYY-MM-DD [Hari].md` | `2026-08-06 Thursday.md` | Dibuat via **`Alt + N` → Daily Journal**. Untuk _scratchpad_ harian dan melihat tugas jatuh tempo. |
| **`06_daily`** _(Master Habit)_| `Daily Habit Tracker.md` | `Daily Habit Tracker.md` | File master opsional untuk mencatat checklist habit. |

---

## 2. Alur Kerja Standar Proyek & Area (`01_projects` & `02_areas`)

Untuk menjaga agar ruang kerja proyek dan area tetap terstruktur tanpa membatasi fleksibilitas:

```text
Langkah 1: Inisialisasi Hub (Alt + N)
   └── Jalankan template "Project Hub" atau "Area Hub".
   └── Script akan meminta nama Hub dan otomatis membuatkan folder + file dashboard "_hub.md".

Langkah 2: Pembuatan Catatan Kerja Bebas (Ctrl + N)
   └── Buka folder proyek/area yang baru dibuat.
   └── Tekan "Ctrl + N" untuk membuat catatan kosong polos tanpa template.
   └── Beri nama file secara bebas (Title Case, bahasa Indonesia/Inggris, dll).
   └── File baru ini akan otomatis terdata di tabel "Working Documents" pada file "_hub.md"!
````

## 3. Taksonomi & Skema Tagging

Tag di dalam vault dikelompokkan menjadi **dua dimensi independen**:

```text
┌────────────────────────────────────────────────────────┐
│                   TAKSONOMI TAG                        │
├───────────────────────────┬────────────────────────────┤
│ 1. Tag Status Operasional │ 2. Tag Domain Kategori     │
│    (Status / Lifecycle)   │    (Subject / Knowledge)   │
│    #inbox, #wip, #habit   │    #cybersec, #networking  │
└───────────────────────────┴────────────────────────────┘
```

### A. Tag Status Operasional (_System & Workflow Tags_)

Digunakan oleh mesin filter/query untuk melacak siklus hidup catatan dan tugas:

- **`#inbox`:** Menandai catatan baru di `05_fleeting` yang belum diproses atau disintesis.
- **`#permanent`:** Tag wajib pada setiap catatan konsep dan hub di `04_permanent`.
- **`#sermon`:** Tag khusus untuk catatan refleksi rohani/khotbah.
- **`#habit`:** Digunakan pada baris _task_ agar penyelesaiannya terhitung ke dalam grafik **Daily Habit Tracker** di Dashboard.
- **`#important`:** Digunakan pada baris _task_ untuk memicu filter **Eisenhower Matrix** kuadran Q1 dan Q2 pada Dashboard.
- **`#archived`:** Menandai catatan atau proyek yang sudah non-aktif agar tidak muncul di query aktif.

### B. Tag Domain Kategori (_Knowledge Subject Tags_)

Mendefinisikan cabang ilmu atau konteks pengetahuan (ditulis dengan huruf kecil / _snake_case_):

- Contoh: `#cybersec`, `#networking`, `#artificial_intelligence`, `#database_system`, `#cloud_computing`, `#vim_usage`, `#bible_study`, `#university_its`, `#life_admin`.

## 4. Standar Skema Metadata Frontmatter (YAML)

Setiap template otomatis menyertakan struktur YAML frontmatter yang konsisten:

### 1. Catatan Konsep Atomik (`04_permanent`)

```yaml
---
aliases: []
tags:
  - permanent
  - cybersec
up:
  - "[[_cybersec_hub]]"
  - "[[Injeksi Input pada Web Server]]"
related:
  - "[[Cross-Site Scripting]]"
date_created: 2026-08-06T15:00
date_modified: 2026-08-14T12:00
exclude_tasks: false
---
```

### 2. Concept Hub / MoC (`04_permanent`)

```yaml
---
type: concept-hub
domain: "cybersec"
tags:
  - permanent
 - cybersec
date_created: 2026-08-06T15:00
date_modified: 2026-08-14T12:00
cssclasses: head-center
exclude_tasks: false
---
```

### 3. Catatan Referensi Eksternal (`03_resources`)

```yaml
---
type: resource
resource_type: book
status: finished
author:
  - "Justin Seitz"
  - "Tim Arnold"
url: "[Black Hat Python](https://nostarch.com/blackhatpython2E)"
date_created: 2026-08-06T15:00
date_modified: 2026-08-14T12:00
exclude_tasks: false
---
```

### 4. Project Hub (`01_projects`)

```yaml
---
type: project-hub
tags:
  - project
status: In Progress
tech_stack:
  - React
  - Express
  - PostgreSQL
repo_url: "[https://github.com/user/project-repo](https://github.com/user/project-repo)"
date_created: 2026-08-06T15:00
date_modified: 2026-08-14T12:00
exclude_tasks: false
---
```

### 5. Area Hub (`02_areas`)

```yaml
---
type: area-hub
date_created: 2026-08-06T15:00
date_modified: 2026-08-14T12:00
cssclasses: head-center
exclude_tasks: false
---
```

### 6. Jurnal Harian (`06_daily`)

```yaml
---
type: daily
date_created: 2026-08-06T15:00
date_modified: 2026-08-14T12:00
cssclasses: head-center
exclude_tasks: false
---
```

### 7. Tangkapan Cepat & Khotbah (`05_fleeting`)

```yaml
---
tags:
  - inbox
  - sermon
service_type: "Umum"
scripture:
  - "1 Yohanes 4:18"
pastor: "Philip Mantofa"
date_created: 2026-08-06T15:00
date_modified: 2026-08-14T12:00
exclude_tasks: false
---
```

## 5. Format Penulisan Task Standar

Tuliskan tugas menggunakan standar sintaksis plugin **Obsidian Tasks** agar terbaca oleh Eisenhower Matrix dan grafik habit:

Markdown

```
- [ ] [Deskripsi Tugas] [Tag Prioritas] [Tanggal Tenggat] [Kepentingan]
```

- **Q1 (Mendesak & Penting):** `- [ ] Kumpulkan laporan akhir Big Data 🔺 📅 2026-08-10 #important`
- **Q3 (Biasa dengan Deadline):** `- [ ] Bayar tagihan internet kos 📅 2026-08-08`
- **Habit Harian:** `- [ ] Minum air putih 2L #habit`
    
    _(Ketika dicentang selesai `- [x]`, sistem otomatis menambahkan tanggal penyelesaian `✅ YYYY-MM-DD` yang langsung dibaca oleh Contribution Graph)_.

## 6. Otomatisasi Linter & Timestamp

Kamu **tidak perlu mengisi atau memperbarui `date_created` dan `date_modified` secara manual**.

- Setiap kali kamu menekan shortcut **`Ctrl + S`**, plugin **Linter** otomatis memindai dokumen, merapikan spasi, dan memperbarui `date_modified` ke waktu detik saat ini.
### Contoh Penerapan:

1. **Tugas Penting & Mendesak (Q1) (<4 days to deadine):**

    `- [ ] Kumpulkan laporan akhir Big Data 🔺 📅 2026-08-10 #important`

2. **Tugas Biasa dengan Deadline (Q3):**
    
    `- [ ] Bayar tagihan internet kos 📅 2026-08-08`

3. **Kebiasaan Harian (Habit Tracker):**
    
    `- [ ] Minum air putih 2L #habit`
    
    _(Ketika dicentang selesai, plugin otomatis menambahkan `✅ 2026-08-14` yang langsung dibaca oleh Contribution Graph)_.

## 5. Otomatisasi Linter & Metadata Timestamp

Kamu **tidak perlu mengisi atau memperbarui `date_created` dan `date_modified` secara manual**.

- Setiap kali kamu menekan shortcut simpan **`Ctrl + S`**, plugin **Linter** akan otomatis memindai dokumen, memperbaiki format spasi, dan memperbarui properti `date_modified` ke waktu detik ini.

