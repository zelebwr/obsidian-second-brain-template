<%* // Logging for debugging
console.log("Universal Capture Script Starts");

// 1. Prompt for the Topic (Zero-Friction)
let topicPrompt = await tp.system.prompt(
	"Enter Topic (e.g., Data Comms Lecture, Shower Thought):",
	"",
	false,
	false
);
// If you hit ESC or leave it blank because you are in a rush, it defaults safely
if (!topicPrompt || topicPrompt.trim() === "") {
	topicPrompt = "Quick Note";
}

// 2. Generate Timestamp and Filename
const timestamp = tp.date.now("YYYY-MM-DD");
const safeTopic = topicPrompt.trim().replace(/[:\\/]/g, "_");
const fileName = `${timestamp} - ${safeTopic}`;

// 3. Construct exact paths
const targetPath = "05_fleeting/" + fileName;
const strictPath = targetPath + ".md";

// 4. Overwrite Protection (Rare due to minute-level timestamps, but structurally necessary)
const fileExists = await tp.file.exists(strictPath);

if (fileExists) {
	new Notice("A fleeting note with this exact minute timestamp already exists! Opening it...");
	const fileToOpen = app.vault.getAbstractFileByPath(strictPath);
	await app.workspace.getLeaf(false).openFile(fileToOpen);

	const currentFile = app.vault.getAbstractFileByPath(tp.file.path(true));
	setTimeout(async () => {
        await app.vault.trash(currentFile, true); 
    }, 100);

	console.log("Terminating program");
	return;
}

// 5. Move the file directly to 05_fleeting
await tp.file.move(targetPath); 

console.log("Successfully reached the end");
_%>
---
tags:
  - inbox
date_created: 
date_modified: 
exclude_tasks: false
---

# <% topicPrompt.trim() %>
---
## Raw Notes
<% tp.file.cursor(1) %>

---

## Action Items / To-Do
- [ ] 

---

## Unresolved Questions / To Research
- 