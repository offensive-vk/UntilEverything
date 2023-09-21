// Define a function that simulates an asynchronous user data retrieval operation.
async function fetchUserData(userId: string): Promise<unknown> {
    // Simulate a network delay with setTimeout.
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate different scenarios:
    const randomNum = Math.random();

    if (randomNum < 0.3) {
        // Scenario 1: User data is successfully retrieved.
        return { userId, name: "John Wick", email: "john@killer.xom" };
    } else if (randomNum < 0.6) {
        // Scenario 2: User data retrieval fails due to a known error.
        throw new Error("User not found.");
    } else {
        // Scenario 3: User data retrieval fails due to an unknown error.
        throw new Error("An unknown error occurred.");
    }
}

// Define an async function that demonstrates proper error handling.
async function getUserInfo(userId: string): Promise<void> {
    try {
        const userData = await fetchUserData(userId);

        // Check if the user data is undefined or unknown.
        if (userData === undefined || typeof userData === "unknown") {
            console.error("User data is undefined or of unknown type.");
            return;
        }

        console.log("User data:", userData);

    } catch (error) {
        if (error instanceof Error) {
            // Handle known errors.
            console.error("Error:", error.message);
        } else {
            // Handle unknown errors or unexpected data types.
            console.error("An unexpected error occurred.");
        }
    }
}

// Call the getUserInfo function with a user ID.
getUserInfo("123")
    .then(() => {
        console.log("Operation completed successfully.");
    })
    .catch((error) => {
        console.error("Operation failed:", error.message);
    });
