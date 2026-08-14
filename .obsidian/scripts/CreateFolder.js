module.exports = async (params) => {
    const { app, quickAddApi } = params;
    
    // 1. Query the vault for all existing directories
    const folders = app.vault.getAllLoadedFiles().filter(f => f.children);
    
    // Default the root directory representation for cleaner UI
    const folderPaths = folders.map(f => f.path === "/" ? "Root (Vault Base)" : f.path);
    const actualPaths = folders.map(f => f.path);
    
    // 2. Trigger QuickAdd's fuzzy-search prompt for the target location
    const parentFolder = await quickAddApi.suggester(folderPaths, actualPaths);
    if (!parentFolder) return; // Exit if the user hits Escape
    
    // 3. Trigger QuickAdd's text input for the new directory name
    const displayPath = parentFolder === "/" ? "Vault Root" : parentFolder;
    const newFolderName = await quickAddApi.inputPrompt(`Create new folder inside: ${displayPath}`, "Enter folder name:");
    if (!newFolderName) return; // Exit if no name is provided
    
    // 4. Construct the absolute path
    const fullPath = parentFolder === "/" ? newFolderName : `${parentFolder}/${newFolderName}`;
    
    // 5. Check for existence to prevent API errors, then execute creation
    const folderExists = app.vault.getAbstractFileByPath(fullPath);
    if (folderExists) {
        new Notice("Execution Failed: Folder already exists at " + fullPath);
        return;
    }
    
    try {
        await app.vault.createFolder(fullPath);
        new Notice(`Success: Folder created at ${fullPath}`);
    } catch (error) {
        new Notice("System Error: Failed to create folder. Check console.");
        console.error(error);
    }
};