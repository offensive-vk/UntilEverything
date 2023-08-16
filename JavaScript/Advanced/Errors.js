function willGiveErrorSometime() {
    const randomValue = Math.random();
    if (randomValue < 0.5) {
        throw new RangeError("This is a range error.");
    } else if (randomValue < 0.8) {
        throw new ReferenceError("This is a reference error.");
    } else {
        throw new Error("This is a generic error.");
    }
}

function rangeErrorHandler(error) {
    console.error("Range Error Handler:", error.message);
    // Additional handling specific to RangeError, if needed
}

function referenceErrorHandle(error) {
    console.error("Reference Error Handler:", error.message);
    // Additional handling specific to ReferenceError, if needed
}

function errorHandler(error) {
    console.error("Generic Error Handler:", error.message);
    // Additional handling for other error types, if needed
}

try {
    willGiveErrorSometime();
} catch (error) {
    if (error instanceof RangeError) {
        rangeErrorHandler(error);
    } else if (error instanceof ReferenceError) {
        referenceErrorHandle(error);
    } else {
        errorHandler(error);
    }
} finally {
    console.log("Error handling completed.");
}
