<%*
// Debugging purposes
console.log("Daily Journal Script Starts"); 

// Get the current date metadata
const fileDate = tp.date.now("YYYY-MM-DD");
const fileTitle = tp.date.now("YYYY-MM-DD dddd");
const targetPath = "06_daily/" + fileTitle;

// Check if the file exists already or not
const fileExists = await tp.file.exists(targetPath + ".md");

if (fileExists) {
	new Notice("This day's Daily Journal already exists! Opening it...");
	const fileToOpen = app.vault.getAbstractFileByPath(targetPath + ".md")
	await app.workspace.getLeaf(false).openFile(fileToOpen);

	const currentFile = app.vault.getAbstractFileByPath(tp.file.path(true));
	setTimeout(async () => {
        await app.vault.trash(currentFile, true); 
    }, 100);

	console.log("Terminating program");
	return;
}

await tp.file.move(targetPath);

// Debugging purposes
console.log("Successfully reached the end");
_%>
---
type: daily
date_created: 
date_modified: 
cssclasses: head-center
exclude_tasks: false
---

# <% fileTitle %>
---
## Scratchpad
<% tp.file.cursor(1) %>

---

## Today's Tasks
- [ ] 

---

## Global Active Tasks (Overdue & Due Today)

> [!todo] Due Today & Overdue
>
> ```tasks
> not done
> path does not include 03_resources
> path does not include 07_archives
> path does not include 99_meta
> (due before tomorrow) OR (scheduled before tomorrow)
> (no start date) OR (starts before tomorrow)
> show backlink
> sort by due
> sort by function task.description.includes('#important') ? 0 : 1
> sort by priority
> sort by created
> ```
