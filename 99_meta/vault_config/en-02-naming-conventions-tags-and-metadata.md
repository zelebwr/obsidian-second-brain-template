---
date_created: 2026-08-14T15:41
date_modified: 2026-08-15T04:28
---

# 🏷️ File Naming Conventions, Tags, & Metadata (YAML)

To ensure this **Second Brain** operates reliably as a relational knowledge database, all notes within the vault must follow standardized **mechanical and syntactical conventions**. Adhering to these standards guarantees that automated query engines (_Dataview_, _Obsidian Tasks_, and _Contribution Graph_) can filter, aggregate, and link your notes with precision.

---

## 1. File Naming Conventions

Each directory tier enforces specific naming rules tailored to its functional role:

| Directory Tier                      | File Naming Pattern              | Real-World Example                                      | Description & Rules                                                                                                                                                           |
| :---------------------------------- | :------------------------------- | :------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`01_projects`** _(Hub)_           | `_[acronym]_hub.md`              | `_ai_inn_hub.md`                                        | Generated via **`Alt + N` → Project Hub**. Automatically initializes the dedicated project folder and its `_hub.md` dashboard.                                                |
| **`01_projects`** _(Working Notes)_ | **Free-form (User Choice)**      | `API Architecture.md`<br>`Auth Service Refactor.md`     | Created using **`Ctrl + N`** (blank new note with no template) directly inside the project folder. Name freely based on your preference.                                      |
| **`02_areas`** _(Hub)_              | `_[acronym]_hub.md`              | `_db_sys_hub.md`                                        | Generated via **`Alt + N` → Area Hub**. Automatically initializes the area folder and its `_hub.md` dashboard.                                                                |
| **`02_areas`** _(Working Notes)_    | **Free-form (User Choice)**      | `Evaluation Rubric SBD.md`<br>`Meeting Log Division.md` | Created using **`Ctrl + N`** (blank new note with no template) directly inside the area folder. Name freely as needed.                                                        |
| **`03_resources`**                  | `[Title] - [Author/Source].md`   | `Containers vs. Virtual Machines - Ian Buchanan.md`     | Generated via **`Alt + N` → Resource Note**. Summarizes external literature, documentation, slide decks, or articles.                                                         |
| **`04_permanent`** _(Hub)_          | `_[domain]_hub.md`               | `_cybersec_hub.md`                                      | Generated via **`Alt + N` → Concept Hub**. Master domain MOC stored directly in the root of `04_permanent`.                                                                   |
| **`04_permanent`** _(Concept)_      | `[Atomic Concept Statement].md`  | `Disassembly transforms machine code into assembly.md`  | Generated via **`Alt + N` → Concept Note**. **Must be an atomic, full statement/claim sentence** (never just a lone noun) and stored in root `04_permanent` (flat directory). |
| **`05_fleeting`** _(Universal)_     | `YYYY-MM-DD - [Topic].md`        | `2026-04-06 - AI Lecture.md`                            | Generated via **`Alt + N` → Universal Capture**. Frictionless capture stamped with standard ISO dates.                                                                        |
| **`05_fleeting`** _(Sermon)_        | `YYYY-MM-DD - [Sermon Topic].md` | `2026-04-12 - Faith Overcomes Fear.md`                  | Generated via **`Alt + N` → Sermon Capture**. Dedicated sermon and spiritual reflection logs.                                                                                 |
| **`06_daily`** _(Journal)_          | `YYYY-MM-DD [Day].md`            | `2026-08-06 Thursday.md`                                | Generated via **`Alt + N` → Daily Journal**. Daily scratchpad and active task monitor.                                                                                        |
| **`06_daily`** _(Master Habit)_     | `Daily Habit Tracker.md`         | `Daily Habit Tracker.md`                                | Optional centralized checklist file for habit logging.                                                                                                                        |

---

## 2. Standard Workflow: Projects & Areas (`01_projects` & `02_areas`)

To maintain folder structure without restricting everyday workflow flexibility:

```text
Step 1: Hub Initialization (Alt + N)
   └── Run the "Project Hub" or "Area Hub" template.
   └── The script prompts for a title and automatically creates the target folder + "_hub.md" dashboard.

Step 2: Free-form Working Notes (Ctrl + N)
   └── Navigate into the newly created project or area folder.
   └── Press "Ctrl + N" to create a fresh, blank markdown note (no template required).
   └── Title the file freely (Title Case, camelCase, kebab-case, or descriptive phrases).
   └── This new document will automatically be indexed in the "Working Documents" table on your "_hub.md"!
````

## 3. Tagging Taxonomy & Strategy

Tags within this vault are strictly organized into **two independent dimensions**:

```text
┌────────────────────────────────────────────────────────┐
│                     TAG TAXONOMY                       │
├───────────────────────────┬────────────────────────────┤
│ 1. Operational Status     │ 2. Domain Knowledge        │
│    (Workflow & Lifecycle) │    (Subject & Field)       │
│    #inbox, #wip, #habit   │    #cybersec, #networking  │
└───────────────────────────┴────────────────────────────┘
```

### A. Operational Status Tags (_System & Workflow Tags_)

Evaluated by Dataview, Tasks, and Contribution Graph to track note and task lifecycles:

- **`#inbox`:** Marks unprocessed fleeting notes in `05_fleeting` that have not yet been synthesized.
- **`#permanent`:** Mandatory tag applied to all atomic concepts and domain hubs in `04_permanent`.
- **`#sermon`:** Applied to sermon notes and faith reflections.
- **`#habit`:** Attached to task checkboxes so completion is counted toward the **Daily Habit Tracker** on `Dashboard.md`.
- **`#important`:** Attached to task checkboxes to trigger the **Eisenhower Matrix** Q1 and Q2 queries on `Dashboard.md`.
- **`#archived`:** Marks dormant/retired files and projects to hide them from active dashboard queries.

### B. Domain Knowledge Tags (_Knowledge Subject Tags_)

Categorizes knowledge fields and subject domains (always written in lowercase _snake_case_):

- Examples: `#cybersec`, `#networking`, `#artificial_intelligence`, `#database_system`, `#cloud_computing`, `#vim_usage`, `#bible_study`, `#university_its`, `#life_admin`.

## 4. Standard YAML Frontmatter Schemas

Every automated template produces standardized YAML metadata headers:

### 1. Atomic Concept Note (`04_permanent`)

```yaml
---
aliases: []
tags:
  - permanent
  - cybersec
up:
  - "[[_cybersec_hub]]"
  - "[[Server-Side Input Injection]]"
related:
  - "[[Cross-Site Scripting]]"
date_created: 2026-08-06T15:00
date_modified: 2026-08-14T12:00
exclude_tasks: false
---
```

### 2. Concept Hub / Domain MOC (`04_permanent`)

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

### 3. External Resource Note (`03_resources`)

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

### 6. Daily Journal (`06_daily`)

```yaml
---
type: daily
date_created: 2026-08-06T15:00
date_modified: 2026-08-14T12:00
cssclasses: head-center
exclude_tasks: false
---
```

### 7. Quick Capture & Sermon (`05_fleeting`)

```yaml
---
tags:
  - inbox
  - sermon
service_type: "Sunday Service"
scripture:
  - "1 John 4:18"
pastor: "Philip Mantofa"
date_created: 2026-08-06T15:00
date_modified: 2026-08-14T12:00
exclude_tasks: false
---
```

## 5. Standard Task Writing Format

Write tasks using **Obsidian Tasks** syntax so they integrate seamlessly with the Eisenhower Matrix and Habit Tracker:

```markdown
- [ ] [Task Description] [Priority Emoji] 📅 [Due Date] [Importance]
```

### Concrete Task Examples:

1. **Urgent & Important (Q1 - Due in <4 days):**
    
    `- [ ] Submit Big Data final lab report 🔺 📅 2026-08-10 #important`

2. **Standard Due Task (Q3):**
    
    `- [ ] Pay dorm internet bill 📅 2026-08-08`

3. **Daily Habit (Habit Tracker):**
    
    `- [ ] Drink 2L water #habit`
    
    _(When checked complete `- [x]`, the plugin automatically stamps `✅ YYYY-MM-DD`, which is instantly rendered on the Dashboard Contribution Graph)._

## 6. Automated Linter & Timestamps

You **do not need to fill out or update `date_created` and `date_modified` manually**.

- Whenever you press **`Ctrl + S`**, the **Linter** plugin automatically parses the document, normalizes markdown spacing, and updates `date_modified` to the current timestamp.

