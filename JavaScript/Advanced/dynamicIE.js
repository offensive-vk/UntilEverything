// Import the modules dynamically
const loadModule = async (modulePath) => {
    const module = await import(modulePath);
    return module;
};

// Load and use moduleA dynamically
const moduleA = await loadModule('./moduleA.js');
moduleA.moduleAFunction();

// Load and use moduleB dynamically
const moduleB = await loadModule('./moduleB.js');
moduleB.moduleBFunction();
