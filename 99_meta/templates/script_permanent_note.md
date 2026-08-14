<%* // Logging for debugging
console.log("Concept Note Script Starts");

// 1. Prompt for the atomic concept title
let conceptTitlePrompt = await tp.system.prompt(
	"Enter the Concept Name (e.g., SQL Injection relies on unsanitized inputs):",
	"",
	true,
	false
);
if (!conceptTitlePrompt || conceptTitlePrompt.trim() === "")
	conceptTitlePrompt = "Untitled Concept";
const conceptTitle = conceptTitlePrompt.trim();

// Construct exact paths for a flat directory
const targetPath = "04_permanent/" + conceptTitle;
const strictPath = targetPath + ".md";

// 2. Overwrite Protection
const fileExists = await tp.file.exists(strictPath);

if (fileExists) {
	new Notice("This Concept Note already exists! Opening it...");
	const fileToOpen = app.vault.getAbstractFileByPath(strictPath);
	await app.workspace.getLeaf(false).openFile(fileToOpen);

	const currentFile = app.vault.getAbstractFileByPath(tp.file.path(true));
	setTimeout(async () => {
        await app.vault.trash(currentFile, true); 
    }, 100);

	console.log("Terminating program");
	return;
}

// 3. MULTI-SELECT: Domains (Strict Metadata Cache ONLY)
let upLinks = [];
let permFiles = app.vault.getFiles().filter(f => f.path.startsWith("04_permanent") && !f.basename.toLowerCase().startsWith("untitled") && f.basename !== conceptTitle);
let selectedDomains = [];
let hubFiles = permFiles.filter(f => f.name.endsWith("_hub.md"));
let availableDomains = [];

// Query the actual YAML frontmatter of the hubs
for (let file of hubFiles) {
    let cache = app.metadataCache.getFileCache(file);
    if (cache && cache.frontmatter && cache.frontmatter.domain) {
        // Strip stray hashtags and whitespace just in case
        let cleanDomain = cache.frontmatter.domain.replace(/^#/, "").trim();
        if (!availableDomains.includes(cleanDomain)) {
            availableDomains.push(cleanDomain);
        }
    }
}

availableDomains.sort((a, b) => a.localeCompare(b));

while (true) {
    let displayList = ["✅ DONE (Continue)"], outputList = ["DONE"];
    
    availableDomains.forEach(d => { 
        if (!selectedDomains.includes(d)) { 
            displayList.push(d); 
            outputList.push(d); 
        } 
    });
    
    let choice = await tp.system.suggester(displayList, outputList, false, `Select Domains. Selected so far: ${selectedDomains.length}`);
    if (!choice || choice === "DONE") break;
    
    // Push the selected choice directly without the custom escape hatch
    selectedDomains.push(choice);
}

// 4. MULTI-SELECT: 'up' links (Parents)
let permNames = permFiles.map(f => f.basename);

// Custom sorting engine
permNames.sort((a, b) => {
	let isHubA = a.endsWith("_hub");
	let isHubB = b.endsWith("_hub");
	if (isHubA && !isHubB) return -1; // A goes first
	if (!isHubA && isHubB) return 1; // B goes first
	return a.localeCompare(b);
})

while (true) {
    let displayList = ["✅ DONE (Continue)"], outputList = ["DONE"];
    
    // Only show files that haven't been selected yet
    permNames.forEach(n => { 
        if (!upLinks.includes(`[[${n}]]`)) { 
            displayList.push((n.endsWith("_hub") ? "🗄️ " : "📄 ") + n); 
            outputList.push(n); 
        } 
    });
    
    let choice = await tp.system.suggester(displayList, outputList, false, `Select 'up' links. Selected so far: ${upLinks.length}`);
    if (!choice || choice === "DONE") break; 
    
    upLinks.push(`[[${choice}]]`);
}


// 5. Dynamically build the YAML text blocks
const upYaml = upLinks.length > 0 ? "\n" + upLinks.map(l => `  - "${l}"`).join("\n") : " []";
const domainYaml = selectedDomains.length > 0 ? "\n" + selectedDomains.map(d => `  - ${d}`).join("\n") : "";

// 6. Move the file directly to 04_permanent
await tp.file.move(targetPath); 

console.log("Successfully reached the end");
_%>
---
aliases: []
tags:
  - permanent<% domainYaml %>
up:<% upYaml %>
related: []
date_created: 
date_modified: 
exclude_tasks: false
---

# <% conceptTitle %>

---

<% tp.file.cursor(1) %>

---

## Dependent Concepts (Children)
> [!example] Notes linking UP to this concept
> ```dataview
> TABLE 
>     file.cday AS "Created"
> FROM "04_permanent"
> WHERE contains(up, this.file.link)
> SORT file.cday DESC
> ```

---

## Lateral Links (Related)
> [!example] Notes related to this concept
> ```dataview
> TABLE 
>     file.cday AS "Created"
> FROM "04_permanent"
> WHERE contains(related, this.file.link) OR contains(this.related, file.link)
> SORT file.cday DESC
> ```

---

## Implicit Links
> [!example] Notes linking implicitly to this concept 
> ```dataview
> TABLE 
>     file.cday AS "Created"
> FROM [[]] AND -outgoing([[]])
> WHERE file.name != this.file.name
> 	AND !contains(up, this.file.link)
 >	AND !contains(related, this.file.link)
 >	AND !contains(this.related, file.link)
> SORT file.cday DESC
> ```

---

## Source
- 
