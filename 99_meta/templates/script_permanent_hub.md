<%* 
// Logging for debugging
console.log("Concept Hub Script Starts");

// Prompt for the Domain Name
let domainPrompt = await tp.system.prompt(
	"Enter the Domain Name for this Hub (e.g., cybersec, networking):",
	"",
	true,
	false
);
if (!domainPrompt || domainPrompt.trim() === "")
	domainPrompt = "untitled_domain";

// Sanitize the input for tags and file names (lowercase, no spaces)
const domainName = domainPrompt
	.trim()
	.toLowerCase()
	.replace(/\s+/g, '_');

// Construct exact paths
const targetPath = "04_permanent/_" + domainName + "_hub";
const strictPath = targetPath + ".md";

// Check if the file exists already
const fileExists = await tp.file.exists(strictPath);

if (fileExists) {
	new Notice("Concept Hub already exists! Opening it...");
	const fileToOpen = app.vault.getAbstractFileByPath(strictPath);
	await app.workspace.getLeaf(false).openFile(fileToOpen);

	const currentFile = app.vault.getAbstractFileByPath(tp.file.path(true));
	setTimeout(async () => {
        await app.vault.trash(currentFile, true); 
    }, 100);

	console.log("Terminating program");
	return;
}

// Move the file directly to 04_permanent
await tp.file.move(targetPath); 

// Debugging purposes
console.log("Successfully reached the end");
_%>
---
type: concept-hub
domain: "<% domainName %>"
tags:
  - permanent
  - <% domainName %>
date_created: 
date_modified: 
cssclasses: head-center
exclude_tasks: false
---

# <% domainPrompt %>
---
## Domain Focus / Scope
<% tp.file.cursor(1) %>

---

## Primary Knowledge Index

> [!example] Explicitly Linked & Tagged Notes
> ```dataview
> TABLE 
>     rows.file.link AS "Notes",
>     rows.file.cday AS "Created"
> FROM "04_permanent"
> WHERE file.name != this.file.name
> 	AND (
> 		contains(up, this.file.link)
> 		OR
> 		contains(file.frontmatter.tags, this.domain)
> 	)
> SORT file.cday ASC
> GROUP BY up AS "Parent Structure"
> SORT min(rows.file.cday) ASC
> ```

---

## Discovered Keyword Matches (Auto-Gathered Old Notes)

> [!info] Notes mentioning "<% domainPrompt %>" in title (Unlinked Candidates)
> ```dataview
> TABLE 
> 	file.folder AS "Location",
>     file.cday AS "Created"
> FROM "04_permanent"
> WHERE file.name != this.file.name 
> 	AND icontains(file.name, "<% domainPrompt %>")
> 	AND !contains(up, this.file.link)
> 	AND !contains(file.frontmatter.tags, this.domain)
> SORT file.cday DESC
> ```

---

## Source
> Here are the sources
