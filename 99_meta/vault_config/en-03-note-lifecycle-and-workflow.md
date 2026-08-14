---
date_created: 2026-08-14T15:43
date_modified: 2026-08-14T16:15
---

# 🔄 Note Lifecycle & Information Workflow

This vault is built upon the foundational principle that **notes are not static documents, but dynamic entities that evolve over time**. This guide outlines the complete end-to-end lifecycle of information: from initial raw capture, to source distillation, evergreen atomic synthesis, project execution, and eventual archiving.

---

## 🧭 1. Note Lifecycle Pipeline Diagram

Every piece of information transitions through distinct processing stages:

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. CAPTURE (Frictionless Capture)                                           │
│    Raw thoughts, lectures, meetings, sermons ──► [ 05_fleeting ]            │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ 2. DISTILLATION (Source Summarization)                                      │
│    Book summaries, articles, official documentation ──► [ 03_resources ]   │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ 3. SYNTHESIS (Zettelkasten Synthesis)                                       │
│    Atomic concept notes & Domain MOCs ──► [ 04_permanent ] (Flat Directory) │
│    (Interconnected via 'up', 'related', and dynamic implicit links)         │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
                    ┌──────────────────┴──────────────────┐
                    ▼                                     ▼
┌──────────────────────────────────────┐ ┌────────────────────────────────────┐
│ 4. EXECUTION (Active Work)           │ │ 5. ARCHIVE (Cold Storage)          │
│    - Active Projects ──► [01_proj.]  │ │    - Completed Projects            │
│    - Focus Areas     ──► [02_areas]  │ │    - Distilled Logs ──► [07_arch.] │
└──────────────────────────────────────┘ └────────────────────────────────────┘
````

# ⚡ 2. Stage 1: Frictionless Capture (_Capture Phase_)

The goal of this phase is **zero cognitive friction during note-taking**. Never pause to worry about markdown formatting, tag taxonomy, or folder organization while actively listening in lectures, meetings, or services.

## Step-by-Step Execution:

1. Press **`Alt + N`** to trigger Templater.
2. Select your capture template:

    - **`Universal Capture`:** For lectures, rapid brainstorming, or quick technical scratchpads.
    - **`Sermon Capture`:** For church services, sermons, and spiritual reflections.

3. Enter the main topic when prompted.
4. The script automatically applies `#inbox`, prepends a `YYYY-MM-DD` date stamp, and routes the note directly to **`05_fleeting/`** as `YYYY-MM-DD - [Topic].md`.
5. Capture your raw notes freely.

> [!tip] Fleeting Note Principle
> 
> The `05_fleeting` directory serves as a temporary staging area. Review and process these notes periodically rather than letting them accumulate indefinitely.

# 📚 3. Stage 2: Source Distillation (_Distillation Phase_)

When absorbing external knowledge (programming textbooks, API documentation, course slide decks, or technical articles), summarize those external perspectives inside **`03_resources/`**.

## Step-by-Step Execution:

1. Press **`Alt + N` → `Resource Note`**.
2. Complete the interactive prompts:

    - **Resource Title:** (e.g., _Black Hat Python_)
    - **Author(s) / Creator(s):** (separated by semicolons `;` if multiple)
    - **URL / Source Link:** (optional, press ESC to skip for physical books)
    - **Reading Status:** (`to-read`, `reading`, `finished`)
    - **Resource Type:** (`book`, `article`, `documentation`, `course`, `video`)

3. The note is generated in `03_resources/[Title] - [Author].md`.
4. Synthesize key takeaways under `## Summary & Key Takeaways`.

> [!note] The Role of Resource Notes
> 
> Resource notes capture **what the original author stated** (external context). The bottom of this template includes an automated Dataview query that dynamically indexes all atomic concepts you extract from this source over time.

# 🧠 4. Stage 3: Evergreen Knowledge Synthesis (_Zettelkasten Phase_)

This is the **core engine of your Second Brain**. Here, you distill understanding from raw logs (_fleeting_) or literature notes (_resources_) into **standalone, atomic concept notes**.

## The Three Golden Rules of Permanent Notes:

1. **Atomic Knowledge:** Each note in `04_permanent` focuses strictly on a single concept or mechanism. If a topic contains two distinct claims, separate them into two notes.
2. **Context-Independent:** Rewritten entirely in your own words so it remains self-explanatory years later without needing original lecture context.
3. **Relational Linking:** Always anchor new concepts into your existing knowledge web via explicit links.

## Step-by-Step Execution:

1. Press **`Alt + N` → `Concept Note`**.
2. **Concept Name:** Enter a full statement or factual claim sentence (e.g., `Disassembly transforms machine code into assembly`).
3. **Select Domain:** Choose relevant domain tags (e.g., `cybersec`, `networking`).
4. **Select Parent Link (`up`):** Connect upward to a Domain Hub (e.g., `[[_cybersec_hub]]`) or a broader parent concept.
5. The script moves the file directly into the flat **`04_permanent/`** directory.

## Interconnecting Permanent Notes:

Permanent notes manage three relational layers:

```text
               ┌───────────────────────┐
               │    _cybersec_hub      │  <── Domain Concept Hub (MOC)
               └───────────▲───────────┘
                           │ (up)
               ┌───────────┴───────────┐
               │  SQL Injection ...    │  <── Active Concept Note
               └───────────▲───────────┘
                           │ (up)
      ┌────────────────────┴────────────────────┐
      │            === (related) ===            │
┌─────▼────────────────┐             ┌──────────▼───────────┐
│ Cross-Site Scripting │             │ Blind SQL Injection  │ (Dependent Child Concept)
└──────────────────────┘             └──────────────────────┘
```

1. **`up` (Parent Hierarchy):** Points upward to a Domain Hub or a broader conceptual parent.
2. **`related` (Lateral Connections):** Connects concepts at the same hierarchical tier across different domains.
3. **`Dependent Concepts (Children)`:** Automated Dataview query listing notes that point to this concept via `up`.
4. **`Implicit Links`:** Automated Dataview query detecting notes that mention this concept name in body prose without explicit `up` or `related` frontmatter declarations.

# 🎯 5. Stage 4: Project & Area Execution (_Execution Phase_)

For time-bound deliverables (hackathons, course assignments, software releases) or long-term life scopes (university semesters, committees), use **`01_projects`** and **`02_areas`**:

```text
Step 1: Initialize Hub (Alt + N)
   ├── Run the "Project Hub" or "Area Hub" template.
   └── The script automatically creates the designated folder and its "_hub.md" dashboard.

Step 2: Create Free-form Working Documents (Ctrl + N)
   ├── Open the newly generated project or area folder.
   ├── Press "Ctrl + N" to create blank working documents (no template needed).
   └── Name files freely based on your workflow needs.
   └── These new files are automatically indexed in the "Working Documents" table on your "_hub.md"!
```

# 📦 6. Stage 5: Archiving & Cold Storage (_Archiving Phase_)

To keep your active workspace lightweight and clutter-free:

1. **Archiving Completed Tasks:**

    - Press **`Ctrl + Shift + A`** inside any note.
    - The Task Archiver plugin sweeps all checked tasks (`- [x]`) into **`07_archives/Completed Tasks.md`**.

2. **Archiving Completed Projects:**

    - Move the project folder from `01_projects/` into **`07_archives/01_projects_done/`**.
    - Update the frontmatter in `_hub.md` to `status: Completed`.

3. **Archiving Past Semesters & Roles:**

    - Move finished semester or committee folders from `02_areas/` into **`07_archives/02_areas_retired/`**.

4. **Archiving Fully Distilled Fleeting Logs:**

    - Once all factual insights from a lecture note in `05_fleeting/` have been synthesized into `04_permanent/`, move the raw log to **`07_archives/05_fleeting_logs/`** or delete it.

# 🛠️ 7. Automated Maintenance & Formatting

- **Save & Auto-Lint (`Ctrl + S`):** Always save with `Ctrl + S` to trigger automated markdown formatting and update the `date_modified` timestamp.
- **Add Frontmatter Property (`Ctrl + ;`):** Quickly insert metadata properties without manual YAML syntax editing.
- **Safe Renaming (`F2`):** Always rename files within Obsidian (`F2`) to automatically update all incoming backlinks and maintain Dataview query integrity.

