// Log user agent information
console.log("User Agent:", navigator.userAgent);

// Log platform information
console.log("Platform:", navigator.platform);

// Log preferred language
console.log("Preferred Language:", navigator.language);

// Check if cookies are enabled
console.log("Cookies Enabled:", navigator.cookieEnabled);

// Check if the browser is online
console.log("Online Status:", navigator.onLine);

// Check if Java is enabled
console.log("Java Enabled:", navigator.javaEnabled());

// Check if geolocation is available
console.log("Geolocation Available:", !!navigator.geolocation);

// Check if pdf viewer in allowed
console.log("PDF Viewer Enabled : " , navigator.pdfViewerEnabled);

// Supported languages in browser
console.log("Languages : ", navigator.languages); 

// System Processor
console.log("Total Logical Processors: ", navigator.hardwareConcurrency);