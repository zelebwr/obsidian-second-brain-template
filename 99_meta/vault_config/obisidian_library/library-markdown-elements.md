---
date_created: 2026-01-09T22:16
date_modified: 2026-08-14T17:02
---

# 🎨 Markdown Elements Library

> This document is a reference library for creating beautiful, consistent, and functional notes. All elements here are compatible with both **GitHub** and advanced previewers like **Markdown Preview Enhanced**.

---

## 🖼️ Banners & Badges

Badges are great for titles and metadata. They are created using `img.shields.io`.

### Standard Badge

<div align="center">
  <img src="https://img.shields.io/badge/PROJECT-IN_PROGRESS-blue?style=for-the-badge&logo=github" alt="Standard Badge" width="400">
</div>

```markdown
<div align="center">
  <img src="[https://img.shields.io/badge/PROJECT-IN_PROGRESS-blue?style=for-the-badge&logo=github](https://img.shields.io/badge/PROJECT-IN_PROGRESS-blue?style=for-the-badge&logo=github)" alt="Standard Badge" width="400">
</div>
```

### Custom Logo Badge (Using Base64 SVG)

<div align="center">
  <img src="https://img.shields.io/badge/ZELEBWR-NOTE-E45826?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJ3aGl0ZSI+PHRpdGxlPkxpbmUgQXJ0PC90aXRsZT48cGF0aCBkPSJNMTIgMi4yNWMtNS4zNzYgMC05Ljc1IDQuMzc0LTkuNzUgOS43NXA0LjM3NCA5Ljc1IDkuNzUgOS43NSA5Ljc1LTQuMzc0IDkuNzUtOS43NVMxNy4zNzYgMi4yNSAxMiAyLjI1em0wIDEuNWM0LjQxIDAgOCAzLjU5IDggOHMtMy41OSA4LTggOC04LTMuNTktOC04IDMuNTktOCA4LTh6bS0yIDUuNWMtLjgzIDAtMS41LjY3LTEuNSAxLjVzLjY3IDEuNSAxLjUgMS41IDEuNS0uNjcgMS41LTEuNS0uNjctMS41LTEuNS0xLjV6bTQgMGMtLjgzIDAtMS41LjY3LTEuNSAxLjVzLjY3IDEuNSAxLjUgMS41IDEuNS0uNjcgMS41LTEuNS0uNjctMS41LTEuNS0xLjV6bS0yIDRjLTEuNDggMC0yLjc1LjgxLTMuNDUgMmg2LjljLS43LTEuMTktMS45Ny0yLTMuNDUtMnoiLz48L3N2Zz4=&logoColor=white" alt="Custom Logo Badge" width="400">
</div>

```markdown
<!-- To create a custom logo, paste your Base64-encoded SVG after "logo=". -->
<div align="center">
  <img src="[https://img.shields.io/badge/ZELEBWR-NOTE-E45826?style=for-the-badge&logo=data:image/svg+xml;base64](https://img.shields.io/badge/ZELEBWR-NOTE-E45826?style=for-the-badge&logo=data:image/svg+xml;base64),..." alt="Custom Logo Badge" width="400">
</div>
```

---

## 🗣️ Call-outs / Admonitions

Use blockquotes with emojis to draw attention to key information.

> 📝 **Note**
> For neutral, supplementary information that is good to know.

> 💡 **Tip**
> For helpful advice, hints, or shortcuts that make a task easier.

> ℹ️ **Info**
> A general-purpose block for providing extra context or links.

> ⚠️ **Warning**
> For actions that could have negative consequences or lead to dead ends.

> 🛑 **Danger**
> For actions that are very likely to cause serious problems, like data loss or system crashes.

---

## 📊 Tables

A well-formatted table is essential for organizing data.

| Feature                 | Status          | Supported On  |
| :---------------------- | :-------------- | :------------ |
| **Basic Formatting**    | ✅ Supported    | All Platforms |
| **Mermaid Diagrams**    | ✅ Supported    | GitHub, MPE   |
| **Admonitions (`!!!`)** | ❌ Incompatible | MPE Only      |

---

## 🙈 Spoilers / Collapsible Sections

Use `<details>` and `<summary>` to hide long code blocks, terminal output, or flags.

<details>
<summary>Click to reveal long log output</summary>

```bash
Log entry 1...
Log entry 2...
Log entry 3...
```

</details>

---

## ✅ Interactive Elements

### Task Lists

Great for tracking steps or requirements.

- [x] Design the template structure.
- [x] Ensure GitHub compatibility.
- [ ] Add more advanced examples.

### Keyboard Keys

Use `<kbd>` to format keyboard keys for a professional look.

Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> to open the Command Palette.

---

## 📈 Diagrams & Visualizations

Use Mermaid to create diagrams that render on both GitHub and in your local previewer.

### Flowchart

```mermaid
graph TD;
    A[Start] --> B{Is the note complex?};
    B -->|Yes| C[Use a detailed template];
    B -->|No| D[Use a simple note];
    C --> E[Add diagrams & tables];
    D --> F[Write content];
    E --> F;
```

### Pie Chart

```mermaid
pie
    title Distribution of Note Types
    "Concept Notes" : 45
    "Snippet Notes" : 25
    "Meeting Notes" : 15
    "Other" : 15
```

---

## ✍️ Text Formatting

### Highlighting Text

Use backticks for `inline code` or double equals `==text==` for highlighting (MPE only, shows as plain text on GitHub).

### Image Sizing & Alignment

Use HTML `<img>` tags for more control over images.

<div align="center">
  <img src="https://placehold.co/400x100/333333/FFFFFF?text=Centered+Image" alt="Centered Image" width="400">
</div>

```markdown
<div align="center">
  <img src="[https://...link](https://...link)..." alt="Centered Image" width="400">
</div>
```