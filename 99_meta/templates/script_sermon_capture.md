<%*
// Logging for debugging
console.log("Sermon Capture Script Starts");

// 1. Prompt for service/Service Type
const serviceDisplayList = ["AoG", "Umum", "CG", "KK", "CT", "BWG", "Bible Study", "➕ Add Custom Service"];
const serviceOutputList = ["AoG", "Umum", "CG", "KK", "CT", "BWG", "Bible Study", "CUSTOM"];

let serviceChoice = await tp.system.suggester(
    serviceDisplayList, 
    serviceOutputList, 
    false, 
    "Select Service Type:"
);

let serviceName = "Unknown Service"; // Default fallback if you press ESC

if (serviceChoice === "CUSTOM") {
    // Trigger secondary prompt if Custom is selected
    let customPrompt = await tp.system.prompt(
        "Enter Custom Service Type:", 
        "", 
        false, 
        false
    );
    serviceName = customPrompt ? customPrompt.trim() : "Unknown Service";
} else if (serviceChoice) {
    // If a standard option is selected
    serviceName = serviceChoice;
}

// 2. Prompt for Speaker
let speakerPrompt = await tp.system.prompt(
	"Enter Speaker/Pastor Name:",
	"",
	false,
	false
);
const speakerName = speakerPrompt ? speakerPrompt.trim() : "Unknown Speaker";

// 3. Prompt for the Main Topic or Scripture
let topicPrompt = await tp.system.prompt(
	"Enter Main Topic or Scripture:",
	"",
	false,
	false
);
const topicName = topicPrompt ? topicPrompt.trim() : "Unknown_main_topic";

// 4. Generate Timestamp and Filename
const timestamp = tp.date.now("YYYY-MM-DD");
const safeTopic = topicName.replace(/[:\\/]/g, "_");
const fileName = `${timestamp} - ${safeTopic}`;

// 5. Construct exact paths
const targetPath = "05_fleeting/" + fileName;
const strictPath = targetPath + ".md";

// 6. Overwrite Protection
const fileExists = await tp.file.exists(strictPath);

if (fileExists) {
	new Notice("A sermon note with this exact timestamp already exists! Opening it...");
	const fileToOpen = app.vault.getAbstractFileByPath(strictPath);
	await app.workspace.getLeaf(false).openFile(fileToOpen);

	const currentFile = app.vault.getAbstractFileByPath(tp.file.path(true));
	setTimeout(async () => {
        await app.vault.trash(currentFile, true); 
    }, 100);

	console.log("Terminating program");
	return;
}

// 7. Move the file directly to 05_fleeting
await tp.file.move(targetPath); 

console.log("Successfully reached the end");
_%>
---
tags:
  - inbox
  - sermon
service_type: "<% serviceName %>"
scripture:
- 
pastor: "<% speakerName %>"
date_created: 
date_modified: 
exclude_tasks: false
---

# <% topicName %>
**Speaker:** <% speakerName %>
**Service:** <% serviceName %>

---
## Message Notes
<% tp.file.cursor(1) %>

---
## Personal Reflection
- 

---

## Action Items / Application
