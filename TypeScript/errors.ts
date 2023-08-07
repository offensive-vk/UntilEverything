function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

try {
    const result = divide(10, 0);
    console.log("Result:", result);
} catch (error) {
    console.error("Caught an error:", error.message);
}


class CustomError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "CustomError";
    }
}

function doSomething(): void {
    throw new CustomError("Something went wrong!");
}

try {
    doSomething();
} catch (error) {
    if (error instanceof CustomError) {
        console.error("Caught a CustomError:", error.message);
    } else {
        console.error("Caught an unknown error:", error.message);
    }
}
