// Global Exported Functions
exports.puts = function(...args) {
    const prefix = '-> ';
    const modified = args.map(arg => typeof arg === 'string' ? prefix + arg : arg);
    console.log(...modified);
}

// puts("Hello, world!");
// puts(42, "Logging numbers"); 

exports.printf = console.log;
// more functions will be added.