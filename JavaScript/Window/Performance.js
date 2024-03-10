// Check if the Performance API is supported in the browser
if (window.performance) {
    // Performance.now() method - returns the current timestamp in milliseconds
    const startTime = window.performance.now();
    console.log("Start time:", startTime);

    // Some time-consuming task
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
        sum += i;
    }

    // Performance.now() method - returns the current timestamp in milliseconds
    const endTime = window.performance.now();
    console.log("End time:", endTime);

    // Calculate elapsed time
    const elapsedTime = endTime - startTime;
    console.log("Elapsed time:", elapsedTime.toFixed(2), "milliseconds");

    // Performance.timing property - provides timing-related information for the current page load
    const pageLoadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
    console.log("Page load time:", pageLoadTime, "milliseconds");

    // Performance.memory property - provides memory consumption information
    if (window.performance.memory) {
        console.log("Total heap size:", window.performance.memory.totalJSHeapSize / (1024 * 1024), "MB");
        console.log("Used heap size:", window.performance.memory.usedJSHeapSize / (1024 * 1024), "MB");
        console.log("JS heap size limit:", window.performance.memory.jsHeapSizeLimit / (1024 * 1024), "MB");
    } else {
        console.warn("Memory information not available.");
    }

    // Performance.navigation property - provides information about navigation behavior
    const navigationType = window.performance.navigation.type;
    console.log("Navigation type:", navigationType);
} else {
    console.error("Performance API is not supported in this browser.");
}
