---
date_created: 2026-02-23T08:54
date_modified: 2026-08-14T17:02
---

# ⚙️ Obsidian & VS Code Feature Library

> This document lists all the key "portable" Obsidian features that you can write and manage in VS Code (using the Foam extension) and have them work seamlessly when you open your vault in the Obsidian app.

---

## 📚 Table of Contents

- [🔗 Core Linking Features](#-core-linking-features)
- [🏷️ Organizational Features](#️-organizational-features)
- [📄 Content & Formatting Features](#-content--formatting-features)
- [⚠️ Plugin-Specific Syntax (Advanced)](#️-plugin-specific-syntax-advanced)

---

## 🔗 Core Linking Features

_These are the fundamental building blocks of a connected knowledge base._

### Wikilinks

The most basic and important feature. Creates a direct link to another note.

- **Syntax:** `[[Note Title]]`
- **Example:** A link to your main hub for Python would be `[[_Python Hub]]`.

### Link Aliases

Allows you to change the display text of a link without changing the destination.

- **Syntax:** `[[Note Title|Custom display text]]`
- **Example:** You can write `[[Python Data Types|data types in Python]]` to make your sentences flow more naturally.

### Header Links

Links directly to a specific heading within another note.

- **Syntax:** `[[Note Title#Header Title]]`
- **Example:** To link directly to the "Loops" section in your Python notes, you would use `[[Python Fundamentals#For Loops]]`.

### Block Links (Obsidian Only for Linking)

Links to a specific paragraph or block of text. You can write the syntax in VS Code, but only Obsidian can create the unique block ID.

- **Syntax:** `[[Note Title#^block-id]]`
- **How to create:** In Obsidian, type `^` at the end of a line to create a block ID. You can then reference it from VS Code.
- **Example:** `[[Meeting Notes 2025-08-19#^d2e8f5]]`

---

## 🏷️ Organizational Features

_These features add metadata and structure to your notes._

### YAML Front Matter

The metadata block at the top of your file. This is the "brain" of your system and is fully editable in VS Code.

- **Syntax:** A block of `key: value` pairs enclosed by `---`.
- **Example:**

    ```yaml
    ---
    type: concept
    tags: [python, programming]
    created: 2025-08-19
    hub: [[_Python Hub]]
    ---
    ```

### Tags

Used for broad categorization. They are fully functional in both Foam and Obsidian.

- **Syntax:** `#tag-name` or inside the front matter `tags: [tag1, tag2]`
- **Example:** `#cybersecurity` or `#project/alpha`

---

## 📄 Content & Formatting Features

_These are standard or extended Markdown features that both platforms support._

### Task Lists

Checklists that you can create and tick off.

- **Syntax:** `- [ ] To-do item` for incomplete, `- [x] To-do item` for complete.
- **Example:** `- [x] Install Dataview plugin.`

### Footnotes

A clean way to add references or side notes.

- **Syntax:** Add `[^1]` in your text, and then define it at the bottom with `[^1]: Your footnote text.`

---

## ⚠️ Plugin-Specific Syntax (Advanced)

_You can **write** this syntax in VS Code, but it will only **execute** or become functional inside Obsidian._

> 📝 **Note** > <br>In VS Code, these will just look like plain code blocks. This is a good thing, as it prevents errors and allows you to prepare your notes for use in Obsidian.

### Dataview Queries

Used to create dynamic, self-updating lists and tables.

- **Syntax:** A query inside a `dataview` code block.
- **Example:**
    \`\`\`dataview
    TABLE status FROM #project
    \`\`\`

### Templater Commands

Used for creating advanced note templates with dynamic commands.

- **Syntax:** Commands enclosed in `<% ... %>`.
- **Example:** `Created on: <% tp.date.now("YYYY-MM-DD") %>`

