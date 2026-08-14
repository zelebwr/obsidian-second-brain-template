---
date_created: 2026-08-14T15:36
date_modified: 2026-08-15T06:03
---

This vault is an out-of-the-box **Second Brain** template built upon a strict fusion of the **PARA Method**, **Zettelkasten Principles**, and **Eisenhower Matrix Task Management**. This document serves as a quickstart walkthrough to help you navigate workflows, automation scripts, and directory conventions.

> [!NOTE]
> You can check out the Indonesian version by clicking [[id-TLDR]] or [id-TLDR](id-TLDR.md)

---

# 🚀 1. First-Time Setup (30 Seconds)

1. **Disable Restricted Mode:**
   Go to **Settings (`Ctrl + ,`) → Community Plugins → Turn off Restricted Mode** → Ensure all pre-installed plugins are enabled (toggled ON).
2. **Open the Command Center:**
   Press `Ctrl + Shift + E` to open the File Explorer pane, then navigate to `00_maps_of_content/Dashboard.md` (or open [[00_maps_of_content/Dashboard|Dashboard]] or [Dashboard](./00_maps_of_content/Dashboard.md)).
3. **Test the Master Template Shortcut:**
   Press `Alt + N` anywhere in the vault to trigger the automated Templater prompt.

---

# 📂 2. Vault Architecture

This vault utilizes numerical folder prefixes to keep the directory hierarchy strictly ordered and prevent alphabetical sorting clutter:

| Folder | Name | Description / Primary Purpose |
| :--- | :--- | :--- |
| **`00_maps_of_content`** | Dashboards & MOCs | Master navigation maps, indexes, and centralized task/schedule tracking (`Dashboard.md`). |
| **`01_projects`** | Active Projects | **Time-bound projects** with specific deadlines, deliverables, and associated working files. |
| **`02_areas`** | Areas of Responsibility | **Long-term commitments** and persistent life scopes (University, Committees, IT Skills, Life Admin). |
| **`03_resources`** | External Knowledge | **Summaries and insights from external sources** (books, documentation, academic slides, articles). |
| **`04_permanent`** | Zettelkasten Concepts | **Atomic concept notes** interconnected via relational metadata and bidirectional links (**strictly flat directory**). |
| **`05_fleeting`** | Quick Capture (Inbox) | Zero-friction scratchpad for raw ideas, lectures, sermons, and rapid meeting notes. |
| **`06_daily`** | Daily Journals | Daily logs, habit tracking scratchpads, and real-time overdue task monitors. |
| **`07_archives`** | Cold Storage | Storage for completed projects, retired areas, and archived task logs. |
| **`99_meta`** | Engine Room | Automated Templater scripts, asset attachments, custom CSS classes, and vault documentation. |

---

## 📁 Directory Layout Blueprint

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
│   ├── SQL Injection relies on unsanitized inputs.md
│   └── Disassembly transforms machine code into assembly.md
├── 05_fleeting
│   ├── 2026-04-06 - AI Lecture.md
│   ├── 2026-04-09 - Cloud Computing Lecture 4.md
│   └── 2026-08-05 - Competition Team Briefing.md
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

# ⌨️ 3. Master Keyboard Shortcuts Cheat Sheet

|**Shortcut**|**Action**|**Description**|
|---|---|---|
|**`Alt + N`**|**Create Note via Template**|Opens the Templater picker to create automated, structured notes.|
|**`Ctrl + Alt + S`**|**Omnisearch**|Deep search across all markdown text and embedded PDF attachments.|
|**`Ctrl + L`**|**Toggle List / Checkbox**|Cycles lines between unordered lists, checkboxes, and task completion.|
|**`Ctrl + Shift + A`**|**Archive Completed Tasks**|Moves all checked tasks (`- [x]`) in the active file to `07_archives/Completed Tasks.md`.|
|**`Ctrl + Shift + O`**|**Document Outline**|Toggles the table of contents / headings sidebar on the right.|
|**`Ctrl + Shift + E`**|**File Explorer**|Toggles the native file navigation tree on the left sidebar.|
|**`Ctrl + Shift + K`**|**Delete Entire Line**|Instantly deletes the full line where the cursor is positioned.|
|**`Ctrl + ;`**|**Add YAML Property**|Inserts a new frontmatter property at the top of the file.|
|**`Alt + E`**|**Toggle Excalidraw View**|Switches the active file between markdown text and visual canvas mode.|
|**`Alt + ↑ / ↓`**|**Swap Line Up / Down**|Smoothly shifts the active line up or down.|
|**`Alt + ← / →`**|**Toggle Sidebars**|Collapses or expands the left and right sidebars.|
|**`Ctrl + Alt + B`**|**Toggle Callout / Quote**|Converts the selected line into a blockquote or callout block.|
|**`Shift + Delete`**|**Delete Active File**|Permanently removes the currently opened file.|
|**`Ctrl + S`**|**Save & Auto-Lint**|Saves the file while triggering markdown linting and updating `date_modified`.|
|**`F2`**|**Rename File Safely**|Safely renames the current note and updates all incoming backlinks across the vault.|

---

# 🔄 4. Daily Workflows & Templater Scripts

Press **`Alt + N`** anywhere to execute any of these primary automated workflows:

## 1. 📥 Quick Capture (`script_universal_capture` & `script_sermon_capture`)

- **When to use:** In lectures, meetings, sermons, or when capturing spontaneous thoughts.
- **How it works:** Prompts for a topic, generates a standardized timestamp (`YYYY-MM-DD`), assigns the `#inbox` tag, and routes the file to `05_fleeting` as `YYYY-MM-DD - [Topic].md`.

## 2. 📅 Daily Journal (`script_daily_journal`)

- **When to use:** Every morning to plan the day, log habits, reflect, or maintain a scratchpad.
- **How it works:** Auto-creates today's journal inside `06_daily/` equipped with daily checklists and dynamic Dataview queries listing global overdue tasks.

## 3. 🧠 Atomic Concept Note (`script_permanent_note`)

- **When to use:** Synthesizing technical concepts into standalone, evergreen ideas.
- **How it works:** Prompts for an atomic concept title, links it to parent domain hubs (`up`), and automatically injects Dataview blocks to track child concepts (_Dependent_) and lateral links (_Related_).

## 4. 📚 Resource Note (`script_resource_note`)

- **When to use:** Reading books, official documentation, lecture decks, or technical articles.
- **How it works:** Prompts for title, author(s), URL, reading status, and resource type, placing it in `03_resources/` with an automatic query tracking atomic concepts derived from it.

## 5. 🎯 Project & Area Hubs (`script_project_hub` & `script_area_hub`)

- **When to use:** Launching a new project folder or establishing a long-term area of responsibility.
- **How it works:** Creates a dedicated directory alongside a `_hub.md` dashboard file featuring a real-time working document index and localized task queries.
    - **Subsequent Step:** Inside the created folder, press `Ctrl + N` to create blank working documents freely using any naming convention you prefer.

## 6. 🎨 Visual Diagram Generator (`script_excalidraw_generator`)

- **When to use:** Drafting architecture diagrams, state machines, system workflows, or mind maps.
- **How it works:** Prompts for context and target directory, generating a structured Excalidraw diagram ready for visual synthesis.

---

# 📊 5. Automated Task Management & Habit Tracker (`Dashboard.md`)

## 🔄 Daily Habit Tracker (Global Task Engine)

Habit tracking operates **globally across the entire vault**:

- Write recurring habit tasks anywhere (e.g., inside your Daily Journal) using the `#habit` tag:

```markdown
- [ ] Morning workout #habit
```

- When checked complete (`- [x]`), Obsidian Tasks / Dataview automatically stamps a completion date (`✅ YYYY-MM-DD`), immediately incrementing the **Daily Habit Tracker** matrix on `Dashboard.md`.

## ⚖️ Eisenhower Matrix (Automated Task Sorting)

Write tasks anywhere using standard markdown checkboxes and the `#important` tag:

```markdown
- [ ] Complete Big Data assignment report #important 📅 2026-08-10
```

### How Tasks Are Categorized on the Dashboard:

1. **🔥 Q1: Urgent & Important (Do First):** Tasks tagged with `#important` due or scheduled within the next 4 days.
2. **📜 Q2: Not Urgent & Important (Schedule):** Tasks tagged with `#important` with no due date or due after 3 days.
3. **📞 Q3: Urgent & Not Important (Delegate / Quick):** Standard tasks without `#important` due within the next 4 days.
4. **🗑️ Q4: Not Urgent & Not Important (Backlog / Low Priority):** General tasks without due dates or priority tags.

![task_management](./99_meta/assets/demo/demo_task_management.mp4)

---

# 🧠 6. Zettelkasten Knowledge Pipeline

To build a resilient and highly connected _Second Brain_, follow this 4-stage processing flow:

```text
[Fleeting / Raw Scratchpad] ──► [Resource Summary] ──► [Permanent Atomic Concept]
        (05_fleeting)                 (03_resources)            (04_permanent)
```

1. **Capture raw notes** rapidly in `05_fleeting` (`Alt + N` → `Universal Capture`).
2. **Summarize source material** in `03_resources` (`Alt + N` → `Resource Note`).
3. **Synthesize into atomic, evergreen concepts** in `04_permanent` (`Alt + N` → `Concept Note`). Connect notes to parent hierarchies (`up`) or Domain Hubs (`_hub`).
4. **Execute projects & responsibilities** in `01_projects` or `02_areas` (`Alt + N` → `Project Hub` / `Area Hub`).

---

# 📚 7. Technical Documentation Index

To explore architectural principles, naming conventions, and advanced configuration details, refer to the following sub-guides:

1. [[99_meta/vault_config/en-01-vault-architecture-and-philosophy|🏗️ Vault Architecture & Core Philosophy]] or [Vault Architecture & Core Philoshophy](./99_meta/vault_config/en-01-valt-architecture-and-philosophy.md)
2. [[99_meta/vault_config/en-02-naming-conventions-tags-and-metadata|🏷️ File Naming Conventions, Tags, & Metadata]] or [Naming Conventions, Tags, & Metadata](./99_meta/vault_config/en-02-naming-conventions-tags-and-metadata.md)
3. [[99_meta/vault_config/en-03-note-lifecycle-and-workflow|🔄 Note Lifecycle & Information Flow]] or [Note Lifecycle and Workflow](./99_meta/vault_config/en-03-note-lifecycle-and-workflow.md)

