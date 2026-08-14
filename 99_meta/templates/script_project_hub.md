<%* 
// Logging for debugging
console.log("Project Hub Script Starts");

// Prompt for the formal project Title
let projectTitlePrompt = await tp.system.prompt(
	"Enter the full Project Name (e.g., Full-stack portfolio):",
	"",
	true,
	false
);
if (!projectTitlePrompt || projectTitlePrompt.trim() === "")
	projectTitlePrompt = "Untitled Project";
const projectTitle = projectTitlePrompt.trim();

const statusOptions = ["Backlog", "In Progress", "Testing", "On Hold", "Completed", "Cancelled"];
let statusChoice = await tp.system.suggester(
    statusOptions, 
    statusOptions, 
    false, 
    "Select current project status:"
);
if (!statusChoice) statusChoice = "Backlog";

// Make the acronym for the file name
const acronym = projectTitle
	.split(" ")
	.map(word => word.charAt(0).toLowerCase())
	.join("")
	.replace(/[:\\/]/g, "_");

// Make the folder name
const folderName = projectTitle
	.toLowerCase()
	.replace(/\s+/g, '_')
	.replace(/[:\\/]/g, "_");

// Getting all the folders path
const projectsDirectoryList = app
	.vault
	.getAllLoadedFiles()
	.filter(folder => folder.children)
	.map(folder => folder.path)
	.filter(folder => folder.startsWith("01_projects"));
projectsDirectoryList.sort();

// Prompt a suggester for the base target folder path
const parentDirectory = await tp.system.suggester(
	(folderPath) => folderPath === '01_projects' ? 'Root: 01_projects' : folderPath,
	projectsDirectoryList,
	true,
	"Where do you want to create a new folder at?"
);

// Construct new folder path
const newFolderPath = parentDirectory + "/" + folderName;

// Construct new file path
const newFilePath = newFolderPath + "/_" + acronym + "_hub";

// Check if the file exists already or not
const fileExists = await tp.file.exists(newFilePath + ".md");

if (fileExists) {
	new Notice("Project Hub already exists! Opening it...");
	const fileToOpen = app.vault.getAbstractFileByPath(newFilePath + ".md")
	await app.workspace.getLeaf(false).openFile(fileToOpen);

	const currentFile = app.vault.getAbstractFileByPath(tp.file.path(true));
	setTimeout(async () => {
        await app.vault.trash(currentFile, true); 
    }, 100);

	console.log("Terminating program");
	return;
}

// Recursively create the folders if they do not exist yet
const eachFolder = newFolderPath.split("/");
let currentPath = '';
for (let folder of eachFolder) {
	currentPath += (currentPath === '' ? '' : '/') + folder;
	if (!app.vault.getAbstractFileByPath(currentPath)) 
		await app.vault.createFolder(currentPath);
}

// Move the file
await tp.file.move(newFilePath); 

// Debugging purposes
console.log("Successfully reached the end");
_%>
---
type: project-hub
tags: 
status: <% statusChoice %>
tech_stack: []
repo_url: 
date_created: 
date_modified: 
exclude_tasks: false
---

# <% projectTitle %>
---
## Project Overview / Objectives
<% tp.file.cursor(1) %>

---
## Architecture & Environment
- **Local Port:**
- **Production URL:**
- **Key Dependencies:**

---

## Active Tasks

> [!todo] Todo List
> 
> ```tasks
> not done
> path includes <% newFolderPath %>
> show backlink
> sort by due
> sort by function task.description.includes('#important') ? 0 : 1
> sort by priority
> sort by created
> ```
