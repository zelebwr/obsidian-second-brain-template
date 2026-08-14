<%* 
// Logging for debugging
console.log("Area Hub Script Starts");

// Prompt for the formal Area Title
let areaTitlePrompt = await tp.system.prompt(
	"Enter the full Area Name (e.g., Project Management):",
	"",
	true,
	false
);
if (!areaTitlePrompt || areaTitlePrompt.trim() === "")
	areaTitlePrompt = "Untitled Area";
const areaTitle = areaTitlePrompt.trim();

// Make the acronym for the file name
const acronym = areaTitle
	.split(" ")
	.map(word => word.charAt(0).toLowerCase())
	.join("")
	.replace(/[:\\/]/g, "_");

// Make the folder name
const folderName = areaTitle
	.toLowerCase()
	.replace(/\s+/g, '_')
	.replace(/[:\\/]/g, "_");

// Getting all the folders path
const areasDirectoryList = app
	.vault
	.getAllLoadedFiles()
	.filter(folder => folder.children)
	.map(folder => folder.path)
	.filter(folder => folder.startsWith("02_areas"));
areasDirectoryList.sort();

// Prompt a suggester for the base target folder path
const parentDirectory = await tp.system.suggester(
	(folderPath) => folderPath === '02_areas' ? 'Root: 02_areas' : folderPath,
	areasDirectoryList,
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
	new Notice("Area Hub already exists! Opening it...");
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
type: area-hub
date_created:
date_modified:
cssclasses: head-center
exclude_tasks: false
---

# <% areaTitle %>
---
## Area Focus / Objectives
<% tp.file.cursor(1) %>

---
## Working Documents

> [!example] Documents
> ```dataview
> TABLE
> 	file.cday AS "Created",
> 	file.mtime AS "Last Modified"
> FROM "<% newFolderPath %>"
> WHERE file.name != this.file.name
> SORT file.mtime DESC
> ```

---
## Active Tasks

> [!todo] Todo List
>```tasks
>not done
>path includes <% newFolderPath %>
>show backlink
>sort by due
>sort by function task.description.includes('#important') ? 0 : 1
>sort by priority
>sort by created
> ```
