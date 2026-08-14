<%*
// Logging for debugging
console.log(" Resource Note Script Starts");

// 1. Prompt for the Resource Title
let titlePrompt = await tp.system.prompt(
	"Enter the Resource Title (e.g., Black Hat Python):",
	"",
	true,
	false
);
if (!titlePrompt || titlePrompt.trim() === "")
	titlePrompt = "Untitled Resource";

// 2. Prompt for the Author/Creator (Comma-Separated)
let authorPrompt = await tp.system.prompt(
	"Enter Author(s) separated by semicolons (e.g., Justin Seitz; Tim Arnold):",
	"",
	true,
	false
);
if (!authorPrompt || authorPrompt.trim() === "")
	authorPrompt = "Unknown Author";

// Programmatically split the string into an array and clean up whitespace
const authorArray = authorPrompt
	.split(";")
	.map(a => a.trim())
	.filter(a => a !== "");

// 3. Prompt for the URL
let urlPrompt = await tp.system.prompt(
	"Enter URL (Press ESC to skip if it's a physical book):",
	"",
	false,
	false
);
const urlText = urlPrompt ? urlPrompt.trim() : "";

// 4. Prompt for Status (Dropdown)
const statusOptions = ["to-read", "reading", "finished"];
let statusChoice = await tp.system.suggester(
    statusOptions, 
    statusOptions, 
    false, 
    "Select your current status with this resource:"
);
if (!statusChoice) statusChoice = "to-read";

// 5. Prompt for Resource Type (Dropdown)
const typeOptions = ["book", "video", "article", "course", "documentation", "podcast", "paper", "other"];
let typeChoice = await tp.system.suggester(
    typeOptions, 
    typeOptions, 
    false, 
    "Select the Resource Type:"
);
if (!typeChoice) typeChoice = "Unspecified";

// 6. Filename Generation Logic (The "et al" truncate)
const safeTitle = titlePrompt.trim().replace(/[:\\/]/g, "_");

// Grab just the first author for the filename
let safeAuthor = authorArray[0].replace(/[:\\/]/g, "_");

// If there is more than one author, append "et al" to the filename
if (authorArray.length > 1) {
    safeAuthor += " et al";
}

const fileName = `${safeTitle} - ${safeAuthor}`;

// Construct exact paths for a flat directory
const targetPath = "03_resources/" + fileName;
const strictPath = targetPath + ".md";

// 7. Overwrite Protection
const fileExists = await tp.file.exists(strictPath);

if (fileExists) {
	new Notice("This Resource Note already exists! Opening it...");
	const fileToOpen = app.vault.getAbstractFileByPath(strictPath);
	await app.workspace.getLeaf(false).openFile(fileToOpen);

	const currentFile = app.vault.getAbstractFileByPath(tp.file.path(true));
	setTimeout(async () => {
        await app.vault.trash(currentFile, true); 
    }, 100);

	console.log("Terminating program");
	return;
}

// 8. Dynamically build the YAML array text block
const authorYaml = "\n" + authorArray.map(a => `  - "${a}"`).join("\n");

// Move the file directly to 03_resources
await tp.file.move(targetPath); 

console.log("Successfully reached the end");

// Force the cursor into the editor body after a safe delay
setTimeout(() => {
    const view = app.workspace.getActiveViewOfType(obsidian.MarkdownView);
    if (view) {
        view.editor.focus();
        // Optional: Move cursor to the absolute bottom of the file
        // view.editor.setCursor(view.editor.lastLine()); 
    }
}, 1000);
_%>
---
type: resource
resource_type: <% typeChoice %>
status: <% statusChoice %>
author: <% authorYaml %>
url: "<% urlText === "" ? "" : `[${titlePrompt.trim()}](${urlText})` %>"
date_created: 
date_modified: 
exclude_tasks: false
---

# <% titlePrompt.trim() %>

> **Creator/Author:** <% authorArray.join(", ") %>
> **URL:** <% urlText === "" ? "None" : `[${titlePrompt.trim()}](${urlText})` %>

---
## Summary & Key Takeaways
<% tp.file.cursor(1) %>

---
## Unresolved Questions / To Research
- 

---

## Extracted Concepts
> [!example] Atomic Notes derived from this resource
> ```dataview
> TABLE 
>     file.cday AS "Extracted On"
> FROM "04_permanent"
> WHERE contains(file.outlinks, this.file.link)
> SORT file.cday DESC
> ```