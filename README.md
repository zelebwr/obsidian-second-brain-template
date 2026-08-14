---
date_created: 2026-08-14T16:53
date_modified: 2026-08-14T17:22
---

# 🧠 Second Brain Vault Template

[![Obsidian](https://img.shields.io/badge/Obsidian-v1.5%2B-7C3AED?logo=obsidian&logoColor=white)](https://obsidian.md)
[![PKM](https://img.shields.io/badge/Architecture-PARA%20%2B%20Zettelkasten-blue.svg)](https://fortelabs.com/blog/para/)
[![Tasks](https://img.shields.io/badge/Task%20Engine-Eisenhower%20Matrix-orange.svg)](#-automated-task-matrix--habit-tracker)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An out-of-the-box, developer-grade **Obsidian Second Brain** template engineered as a **relational knowledge database**. It fuses the **PARA Method** (execution), **Zettelkasten Principles** (evergreen atomic thinking), and an **Automated Eisenhower Task & Habit Matrix** powered by Dataview, Templater, and Contribution Graph.

---

## 📖 Documentation & Language Switcher

For full end-to-end technical manuals, workflow rules, and naming conventions, choose your preferred language:

- 🇬🇧 **[English Quickstart & Complete Guide (`en-TLDR.md`)](./en-TLDR.md)**
- 🇮🇩 **[Panduan Cepat & Dokumentasi Lengkap Bahasa Indonesia (`id-TLDR.md`)](./id-TLDR.md)**

---

## ⚡ 1-Minute Quickstart (Clone & Run)

You can clone this repository directly into your local documents or projects directory:

### Step 1: Clone the Repository
Run the following command in your terminal (replace `MySecondBrain` with your desired folder name and update the repository URL):

```bash
git clone https://github.com/zelebwr/obsidian-second-brain-template.git [YOUR_PREFERRED_FOLDER_NAME]
```

---

### Step 2: Open in Obsidian

1. Open the **Obsidian** app.
2. In the vault selector screen, click **Open folder as vault** (or **Open**).
3. Browse to and select the cloned folder (`[YOUR_PREFERRED_FOLDER_NAME]`).

---

### Step 3: Enable Community Plugins & Start

1. When Obsidian prompts: _"This vault contains community plugins"_, click **Trust author and enable plugins**.
2. If plugins do not auto-load: Navigate to **Settings (`Ctrl + ,`) → Community Plugins → Turn off Restricted Mode**.
3. Open `00_maps_of_content/Dashboard.md` to access your command center.
4. Press **`Alt + N`** to trigger the note creation engine.

---

## ✨ Key Features & Architecture

```text
.
├── 00_maps_of_content   # Command Center, Eisenhower Matrix & Habit Tracker (Dashboard.md)
├── 01_projects          # Time-bound active initiatives with custom '_hub.md' dashboards
├── 02_areas             # Long-term scopes (University, Committees, IT Skills, Life Admin)
├── 03_resources         # Summaries of books, documentation, course slides, and articles
├── 04_permanent         # Atomic Zettelkasten concept network (STRICTLY FLAT DIRECTORY)
├── 05_fleeting          # Zero-friction raw capture for lectures, meetings, and sermons
├── 06_daily             # Daily journals, scratchpads, and live task monitors
├── 07_archives          # Cold storage for completed projects and retired areas
└── 99_meta              # Templater JavaScript scripts, assets, and custom CSS classes

```

- **⚡ Automated Templater Workflows (`Alt + N`):** Interactive prompts that route files, inject YAML frontmatter, and prevent accidental overwrites.
- **🧠 Flat Zettelkasten Network (`04_permanent`):** Relational linking using `up` (parent hierarchy), `related` (lateral links), and dynamic Dataview queries detecting implicit body text mentions without subfolder clutter.
- **📊 Global Habit Tracker:** Visual contribution heatmaps querying completed `#habit` tasks across your daily logs.
- **⚖️ Eisenhower Matrix:** Automatic categorization of tasks into Q1–Q4 based on deadlines (`📅 YYYY-MM-DD`) and priority tags (`#important`).
- **🎨 Custom CSS Snippets:** Pre-configured styling classes (`title-center`, `head-center`, `line-height-tight`, etc.).

---

## ⌨️ Master Keyboard Shortcuts Cheat Sheet

| Shortcut | Action | Description |
| --- | --- | --- |
| **`Alt + N`** | **Create Note via Template** | Triggers interactive Templater creation menu. |
| **`Ctrl + Alt + S`** | **Omnisearch** | Vault-wide deep search across markdown and PDF text. |
| **`Ctrl + L`** | **Toggle List / Checkbox** | Cycles list items to checkboxes and marks tasks done. |
| **`Ctrl + Shift + A`** | **Archive Completed Tasks** | Moves all `- [x]` tasks in the file to `07_archives/Completed Tasks.md`. |
| **`Ctrl + Shift + E`** | **File Explorer** | Toggles the left folder navigation sidebar. |
| **`Ctrl + Shift + O`** | **Outline View** | Toggles the table of contents / headings sidebar on the right. |
| **`Ctrl + Shift + K`** | **Delete Line** | Deletes the active line under the cursor. |
| **`Ctrl + ;`** | **Add Frontmatter Property** | Quick property/metadata inserter. |
| **`Alt + E`** | **Toggle Excalidraw** | Switches between markdown and visual canvas drawing mode. |
| **`Alt + ↑ / ↓`** | **Move Line Up / Down** | Shifts the current line up or down. |
| **`Ctrl + S`** | **Save & Auto-Lint** | Formats markdown spacing and updates `date_modified` timestamp. |
| **`F2`** | **Safe File Rename** | Renames note and updates all incoming backlinks vault-wide. |

---

## 🔌 Included Community Plugins

All community plugins and settings are pre-configured in `.obsidian/`:

- **[Dataview](https://github.com/blacksmithgu/obsidian-dataview)** — Dynamic queries and database indexes.
- **[Templater](https://github.com/SilentVoid13/Templater)** — JavaScript automation and interactive prompts.
- **[Contribution Graph](https://github.com/vran-dev/obsidian-contribution-graph)** — GitHub-style activity and habit heatmaps.
- **[Tasks](https://github.com/obsidian-tasks-group/obsidian-tasks)** — Task tracking and date filtering engine.
- **[Omnisearch](https://github.com/scambier/obsidian-omnisearch)** — Intelligent search indexer.
- **[Linter](https://github.com/platers/obsidian-linter)** — Automatic formatting and metadata timestamping on save.
- **[Task Archiver](https://github.com/ivan-lednev/obsidian-task-archiver)** — Hotkey-driven task archiving.
- **[Excalidraw](https://github.com/zsviczian/obsidian-excalidraw-plugin)** — Infinite canvas and visual system diagramming.
- **[Icon Folder](https://github.com/FlorianWoelki/obsidian-icon-folder)** — Visual sidebar folder icons.
- **[Table Editor](https://github.com/ganesshkumar/obsidian-table-editor)** — Easy markdown table formatting.
- **[Tag Wrangler](https://github.com/pjeby/tag-wrangler)** — Tag renaming and hierarchy management.

---

## 📄 License

This repository and vault template are open-source under the [MIT License](https://www.google.com/search?q=LICENSE). Feel free to adapt, modify, and build upon it!

