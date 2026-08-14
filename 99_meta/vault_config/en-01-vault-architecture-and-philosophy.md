---
date_created: 2026-08-14T15:41
date_modified: 2026-08-14T15:41
---

# 🏗️ Vault Architecture & Core Philosophy

This vault is engineered to operate as a **relational database of knowledge**, powered by a strict fusion of the **Zettelkasten Method** (evergreen knowledge synthesis) and the **PARA Method** (project and area execution).

---

## 1. Core Philosophy: Separation of Capture and Synthesis

The cardinal rule of this vault is: **never attempt to organize, format, or structure a note while actively absorbing information.** Cognitive effort is strictly divided into two distinct phases:

| Phase | Note Designation | Action | Output Location |
| :--- | :--- | :--- | :--- |
| **1. Capture** | **Fleeting Notes** | Real-time, zero-friction logging during lectures, meetings, or sermons. Formatting, grammar, and folder taxonomy are ignored. | `05_fleeting` |
| **2. Synthesis** | **Permanent Notes** | Scheduled, deliberate extraction of atomic facts from fleeting notes, completely rewritten in your own words. | `04_permanent` |

---

## 2. Numerical Directory Architecture Blueprint

The vault maintains a strict separation between **active execution**, **raw storage**, and **permanent knowledge**. Numerical folder prefixes (`00` through `99`) ensure the sidebar hierarchy remains stable and immune to alphabetical sorting shifts:

```text
.
├── 00_maps_of_content
│   └── Dashboard.md                 <-- Central command center: Eisenhower Matrix & Master Navigation.
├── 01_projects
│   ├── ai_innovation_challenge      <-- Dedicated folder for time-bound projects/CTFs/competitions.
│   │   ├── _ai_inn_hub.md           <-- Project dashboard (generated via Project Hub Template).
│   │   ├── meetings                 <-- Project-specific meeting notes.
│   │   └── api_architecture.md      <-- Free-form working documents (created via Ctrl + N).
│   └── simple_script_task.md        <-- Standalone file for simple, isolated tasks.
├── 02_areas
│   ├── committee_work               <-- Long-term responsibility / organization scopes.
│   │   └── bemf_web
│   │       ├── _bemf_hub.md         <-- Area dashboard.
│   │       └── meetings             <-- Committee meeting logs.
│   └── university_its
│       └── semester_4               <-- Physical subfolders to facilitate easy semester archiving.
│           └── database_system
│               ├── _db_sys_hub.md
│               └── evaluation_rubric.md
├── 03_resources
│   └── Containers vs. Virtual Machines - Ian Buchanan.md <-- External literature & source summaries.
├── 04_permanent
│   ├── _cybersec_hub.md             <-- Domain Concept Hub / MOC connecting related atomic concepts.
│   ├── OSI Layer 7 handles user application protocols.md  <-- STRICTLY FLAT DIRECTORY (No subfolders).
│   └── Disassembly transforms machine code into assembly.md <-- Standalone atomic concept notes.
├── 05_fleeting
│   └── 2026-03-22 - Data Comms Lecture.md                <-- Rapid capture format: YYYY-MM-DD - Topic.
├── 06_daily
│   ├── 2026-03-22 Sunday.md         <-- Daily journal / scratchpad / daily habit & task logs.
│   └── Daily Habit Tracker.md       <-- Optional centralized habit master file.
├── 07_archives
│   ├── 01_projects_done             <-- Cold storage for completed projects.
│   ├── 02_areas_retired             <-- Cold storage for past academic semesters / retired roles.
│   ├── 05_fleeting_logs             <-- Processed fleeting notes whose facts are fully synthesized.
│   └── Completed Tasks.md           <-- Archived completed tasks log (via Ctrl + Shift + A).
└── 99_meta
    ├── assets                       <-- Local attachments, images, and diagram assets.
    ├── templates                    <-- Automated Templater JavaScript scripts.
    └── vault_config                 <-- System documentation, CSS snippets, and vault libraries.
````

# 3. Directory Roles & Policies

1. **`00_maps_of_content` (Dashboards & Master Indexes):**
    
    The front gate of your vault. Houses `Dashboard.md`, which contains the automated Eisenhower Task Matrix, daily habit contribution graph, and primary navigation links.

2. **`01_projects` (Active Projects):**
    
    Time-bound initiatives with clear deadlines and defined outcomes (e.g., Hackathons, CTF challenges, Software Releases). Each project resides in its own folder governed by a `_hub.md` dashboard.

3. **`02_areas` (Areas of Responsibility):**
    
    Ongoing standards, recurring roles, and persistent life domains without end dates (e.g., University Semesters, Student Organizations, Skill Development, Life Admin). Subfolder nesting is permitted here for semester/division separation.

4. **`03_resources` (External Knowledge & Literature):**
    
    Summaries of information originating from external authors: textbooks, official API documentation, academic slide decks, YouTube tutorials, and technical articles. Standard naming format: `[Title] - [Author/Source].md`.

5. **`04_permanent` (Zettelkasten Concept Network):**
    
    **The core of your Second Brain.** Contains atomic, standalone, evergreen concepts that remain valuable over time.

    > ⚠️ **Strict Rule:** The `04_permanent` folder **MUST REMAIN STRICTLY FLAT (no subfolders allowed)**. Categorization is handled programmatically via Domain Hubs (`_[domain]_hub.md`) and YAML metadata relationships (`up` and `related`).

6. **`05_fleeting` (Universal Inbox):**
    
    The entry point for all raw thoughts. Rapidly capture information without worrying about formatting or folder structure. Uses the date stamp format: `YYYY-MM-DD - [Topic].md`.

7. **`06_daily` (Daily Journals & Habit Scratchpads):**
    
    Daily planning, localized scratchpads, and daily routine execution. Any task containing `#habit` completed here automatically updates the Dashboard matrix.

8. **`07_archives` (Cold Storage):**
    
    Dormant repository for finished project folders, retired semester courses, or fleeting logs that have already been distilled into permanent notes.

9. **`99_meta` (Vault Engine Room):**
    
    Contains all system scripts (Templater), embedded visual assets, CSS classes, and configuration documentation.

# 4. Zettelkasten Relational Architecture (`04_permanent`)

To keep permanent concept notes discoverable and interconnected without relying on deep folder trees, the vault uses three relational dimensions:

```text
               ┌───────────────────────┐
               │    _cybersec_hub      │  <── Domain Concept Hub (MOC)
               └───────────▲───────────┘
                           │ (up)
               ┌───────────┴───────────┐
               │  SQL Injection ...    │  <── Active Concept Note
               └───────────▲───────────┘
              (related)    │ (up)
      ┌────────────────────┴────────────────────┐
      │                                         │
┌─────▼────────────────┐             ┌──────────▼───────────┐
│ Cross-Site Scripting │             │ Blind SQL Injection  │ (Dependent Child Concept)
└──────────────────────┘             └──────────────────────┘
```

1. **`up` (Parent Hierarchy / Hub):** Connects a concept note upward to its parent Domain MOC (e.g., `[[_cybersec_hub]]`) or to a broader macro-concept. This note will automatically appear in the parent's _Dependent Concepts_ Dataview table.
2. **`related` (Lateral Connections):** Bidirectional links in the frontmatter connecting concepts at the same hierarchical tier.
3. **`Implicit Links` (Automated Text Mentions):** Dynamic Dataview queries that automatically list notes mentioning this concept title within their body text, while excluding notes already linked via `up` or `related`.

# 5. Note Location Decision Matrix

Use this matrix as a quick reference when creating or routing notes:

| **If the note content represents...**          | **Store it in...** | **Creation Template / Action**                                                                 | **File Naming Format**                |
| ---------------------------------------------- | ------------------ | ---------------------------------------------------------------------------------------------- | ------------------------------------- |
| Software project / CTF challenge / Hackathon   | `01_projects`      | **Project Hub** (`Alt + N`) to create the folder. Then use `Ctrl + N` for blank working notes. | Project Folder + `_hub.md`            |
| University course / active committee scope     | `02_areas`         | **Area Hub** (`Alt + N`) to create the folder. Then use `Ctrl + N` for blank working notes.    | Area Folder + `_hub.md`               |
| Book summary, technical article, official doc  | `03_resources`     | **Resource Note** (`Alt + N`).                                                                 | `[Title] - [Author/Source]`           |
| Standalone, evergreen concept / technical fact | `04_permanent`     | **Concept Note** (`Alt + N`) directly in root `04_permanent`.                                  | `[Atomic Concept Statement Sentence]` |
| Live lecture notes, meeting log, sermon notes  | `05_fleeting`      | **Universal Capture** or **Sermon Capture** (`Alt + N`).                                       | `YYYY-MM-DD - [Topic]`                |
| Day planning, daily scratchpad, daily habits   | `06_daily`         | **Daily Journal** (`Alt + N`).                                                                 | `YYYY-MM-DD [Day]`                    |