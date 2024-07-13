/**
 * Defines a type UserData with generic parameter T.
 * @template T - The type of the username and email.
 * @property {number} id - The ID of the user.
 * @property {T} username - The username of the user.
 * @property {T} email - The email of the user.
 */
type UserData<T extends string> = {
    id: number,
    username: T,
    email: T
}

/**
 * Retrieves user details based on the provided username and email.
 * 
 * @param {string} username - The username of the user.
 * @param {string} email - The email of the user.
 * @returns {UserData<string> | void} - The user details object containing the assigned ID, username, and email. Returns void if input is invalid.
 */
function getDetails(username: string, email: string): UserData<string> | void {
    if (!username || !email) {
        console.error("Invalid input for getDetails function");
        return; // Return void if input is invalid
    }

    var id = Math.floor(Math.random() * 9999);
    console.log(`\n Assigned a New ID : ${id}`);
    console.log(`\n Username : ${username}\n Email: ${email}`);

    return {
        id: id,
        username: username,
        email: email
    };
}

const dataArray: Array<Partial<UserData<string>>> = [
    {username: 'sample1', email: 'sample1@1.com'},
    {username: 'sample2', email: 'sample1@2.com'},
    {username: 'sample3', email: 'sample1@3.com'},
    {username: 'sample4', email: 'sample1@4.com'},
    {username: 'sample5', email: 'sample1@5.com'},
];

// Create a 2D array to store the results
const resultArray: UserData<string>[][] = [];

// Loop through each item in dataArray
for(let i = 0; i < dataArray.length; i++) {
    const userData = dataArray[i];
    // Check if username and email are defined
    if (userData.username !== undefined && userData.email !== undefined) {
        // Call getDetails and store the result in resultArray
        const result = getDetails(userData.username, userData.email);
        if (result) {
            resultArray.push([result]);
        }
    }
}

// Print the resultArray
console.log(resultArray);

export { }