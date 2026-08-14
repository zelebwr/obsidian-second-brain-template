<%*
// Logging for debugging
console.log("Master Excalidraw Generator Script Starts");

const tagDisplayNames = [
	"📁 Project", 
	"🎯 Area", 
	"📚 Resource", 
	"🧠 Permanent", 
	"✍️ Fleeting", 
	"📅 Daily"
];
const tagValues = [
	"project", 
	"area",
	"resource", 
	"permanent", 
	"fleeting", 
	"daily"
];

const contextTag = await tp.system.suggester(
    tagDisplayNames, 
    tagValues, 
    true, 
    "What is the context of this drawing?"
);

if (!contextTag) {
    new Notice("Generation cancelled.");
    return;
}

let finalFileName = "";
let dynamicYaml = "";
let drawingTitle = "";


if (contextTag === "resource") {
    let titlePrompt = await tp.system.prompt(
	    "Enter the Resource Title:", 
	    "", 
	    true, 
	    false
	);
    drawingTitle = titlePrompt ? titlePrompt.trim() : "Untitled Resource Drawing";

    let authorPrompt = await tp.system.prompt(
	    "Enter Author(s) separated by commas:", 
	    "", 
	    true,
	    false
	);
    let authorArray = (authorPrompt || "Unknown Author")
	    .split(";")
	    .map(a => a.trim())
	    .filter(a => a !== "");

    let urlPrompt = await tp.system.prompt(
	    "Enter URL (Press ESC to skip):", 
	    "", 
	    false, 
	    false
	);
    const urlText = urlPrompt ? urlPrompt.trim() : "";

    const statusOptions = [
	    "to-read", 
	    "reading", 
	    "finished"
	];
    let statusChoice = await tp.system.suggester(
	    statusOptions,
	    statusOptions, 
	    false, 
	    "Status:"
	);
    if (!statusChoice) statusChoice = "to-read";

    const typeOptions = [
	    "book", 
		"video", 
		"article", 
		"course", 
		"documentation", 
		"podcast", 
		"paper", 
		"other"
	];
    let typeChoice = await tp.system.suggester(
	    typeOptions, 
	    typeOptions, 
	    false, 
	    "Resource Type:"
	);
    if (!typeChoice) typeChoice = "Unspecified";

    // Filename Logic (et al truncate)
    const safeTitle = drawingTitle
	    .replace(/[:\\/]/g, "_")
	    .replace(/_hub$/i, "_drawing");
    let safeAuthor = authorArray[0].replace(/[:\\/]/g, "_");
    if (authorArray.length > 1) safeAuthor += " et al";
    finalFileName = `${safeTitle} - ${safeAuthor}`;

    // YAML Construction
    const authorYaml = "\n" + authorArray
	    .map(a => `  - "${a}"`)
	    .join("\n");
    const formattedUrl = urlText === "" ? "" : `[${drawingTitle}](${urlText})`;
    
    dynamicYaml = `type:\n - resource\n - excalidraw\nresource_type: ${typeChoice}\nstatus: ${statusChoice}\nauthor:${authorYaml}\nurl: "${formattedUrl}"\n`;

} else if (contextTag === "permanent") {
    // --- PERMANENT CONCEPT LOGIC ---
    let titlePrompt = await tp.system.prompt(
	    "Enter the Concept Name:", 
	    "", 
	    true, 
	    false
	);
    drawingTitle = titlePrompt ? titlePrompt.trim() : "Untitled Concept Drawing";
    finalFileName = drawingTitle
	    .replace(/[:\\/|*?"]/g, "_")
	    .replace(/_hub$/i, "_drawing");

    let upLinks = [];
    let permFiles = app.vault.getFiles().filter(f => f.path.startsWith("04_permanent"));
    let selectedDomains = [];
    let hubFiles = permFiles.filter(f => f.name.endsWith("_hub.md"));
    let availableDomains = [];

    // Extract Domains from Hubs
    for (let file of hubFiles) {
        let cache = app.metadataCache.getFileCache(file);
        if (cache && cache.frontmatter && cache.frontmatter.domain) {
            let cleanDomain = cache.frontmatter.domain.replace(/^#/, "").trim();
            if (!availableDomains.includes(cleanDomain)) availableDomains.push(cleanDomain);
        }
    }
    availableDomains.sort((a, b) => a.localeCompare(b));

    // Domain Prompt
    while (true) {
        let displayList = ["✅ DONE (Continue)"], outputList = ["DONE"];
        availableDomains.forEach(d => { if (!selectedDomains.includes(d)) { displayList.push(d); outputList.push(d); } });
        let choice = await tp.system.suggester(displayList, outputList, false, `Select Domains. Selected so far: ${selectedDomains.length}`);
        if (!choice || choice === "DONE") break;
        selectedDomains.push(choice);
    }

    // Up Links Prompt
    let permNames = permFiles.map(f => f.basename);
    permNames.sort((a, b) => {
        let isHubA = a.endsWith("_hub"), isHubB = b.endsWith("_hub");
        if (isHubA && !isHubB) return -1;
        if (!isHubA && isHubB) return 1;
        return a.localeCompare(b);
    });

    while (true) {
        let displayList = ["✅ DONE (Continue)"], outputList = ["DONE"];
        permNames.forEach(n => { if (!upLinks.includes(`[[${n}]]`)) { displayList.push((n.endsWith("_hub") ? "🗄️ " : "📄 ") + n); outputList.push(n); } });
        let choice = await tp.system.suggester(displayList, outputList, false, `Select 'up' links. Selected so far: ${upLinks.length}`);
        if (!choice || choice === "DONE") break; 
        upLinks.push(`[[${choice}]]`);
    }

    // YAML Construction
    const upYaml = upLinks.length > 0 ? "\n" + upLinks.map(l => `  - "${l}"`).join("\n") : " []";
    const domainYaml = selectedDomains.length > 0 ? "\n" + selectedDomains.map(d => `  - ${d}`).join("\n") : "";
    
    dynamicYaml = `aliases: []\ntags:\n  - excalidraw\n  - permanent${domainYaml}\nup:${upYaml}\nrelated: []`;

} else if (contextTag === "fleeting") {
    // --- FLEETING / CAPTURE LOGIC ---
    let topicPrompt = await tp.system.prompt(
	    "Enter Topic:", 
	    "", 
	    false, 
	    false
	);
    drawingTitle = topicPrompt ? topicPrompt.trim() : "Quick Drawing";
    
    const timestamp = tp.date.now("YYYY-MM-DD-HHmm");
    const safeTopic = drawingTitle
	    .replace(/[:\\/]/g, "_")
	    .replace(/_hub$/i, "_drawing");
    finalFileName = `${timestamp} - ${safeTopic}`;
    
    dynamicYaml = `tags:\n  - inbox\n  - excalidraw`;

} else if (contextTag === "daily") {
    // --- DAILY LOGIC ---
    let titlePrompt = await tp.system.prompt(
	    "Enter Daily Drawing Title:", 
	    "", 
	    true, 
	    false
	);
    drawingTitle = titlePrompt ? titlePrompt.trim() : "Scratchpad";
    
    const todayDate = tp.date.now("YYYY-MM-DD dddd");
    const safeTopic = drawingTitle.replace(/[:\\/]/g, "_").replace(/_hub$/i, "_drawing");
    finalFileName = `${todayDate} - ${safeTopic}`; // Ensures it doesn't overwrite your main journal
    
    dynamicYaml = `type: daily\ntags:\n  - excalidraw`;

} else {
    // --- PROJECT & AREA LOGIC ---
    let titlePrompt = await tp.system.prompt(
	    `Enter ${contextTag === "project" ? "Project" : "Area"} Drawing Title:`, 
	    "", 
	    true, 
	    false
	);
    drawingTitle = titlePrompt ? titlePrompt.trim() : "Untitled_Drawing";
    
    finalFileName = drawingTitle;
    
    dynamicYaml = `tags:\n  - excalidraw`;
}

// =====================================================================
// PHASE 4: DIRECTORY ROUTING & MOVEMENT
// =====================================================================
let rootFolder = "";
if (contextTag === "project") rootFolder = "01_projects";
else if (contextTag === "area") rootFolder = "02_areas";
else if (contextTag === "resource") rootFolder = "03_resources";
else if (contextTag === "permanent") rootFolder = "04_permanent";
else if (contextTag === "fleeting") rootFolder = "05_fleeting";
else if (contextTag === "daily") rootFolder = "06_daily";

const filteredFolders = app
	.vault
	.getAllLoadedFiles()
	.filter(folder => folder.children)
	.map(folder => folder.path)
	.filter(folder => folder.startsWith(rootFolder));
filteredFolders.sort();

const parentDirectory = await tp.system.suggester(
	filteredFolders,
	filteredFolders,
	true,
	`Where in ${rootFolder} do you want to save this?`
);

if (!parentDirectory) {
    new Notice("Generation cancelled.");
    return;
}

const newFilePath = parentDirectory + "/" + finalFileName;
const fileExists = await tp.file.exists(newFilePath + ".md");

if (fileExists) {
	new Notice("Drawing file already exists! Opening it...");
	const fileToOpen = app.vault.getAbstractFileByPath(newFilePath + ".md")
	await app.workspace.getLeaf(false).openFile(fileToOpen);
	
	const currentFile = app.vault.getAbstractFileByPath(tp.file.path(true));
	setTimeout(async () => { await app.vault.trash(currentFile, true); }, 100);
	return;
}

await tp.file.move(newFilePath); 
console.log("Successfully reached the end");
_%>
---
excalidraw-plugin: parsed
<% dynamicYaml %>
date_created: 
date_modified: 
exclude_tasks: false
---

==⚠  Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. ⚠==


# Drawing

```compressed-json
N4IgLgngDgpiBcIYA8DGBDANgSwCYCd0B3EAGhADcZ8BnbAewDsEAmcm+gV31TkQAswYKDXgB6MQHNsYfpwBGAOlT0AtmIBeNCtlQbs6RmPry6uA4wC0KDDgLFLUTJ2lH8MTDHQ0YNMWHRJMRZFFgAGRQBWMiRPVRhGMBoEAG0AXXJ0KCgAZQCwPlBJfDwc7A0+Rk5MTHIdGCIAIXRUAGtirkZcAGF6THp8BBAAYgAzcYmQAF8poA===
```
%%