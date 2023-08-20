// Function returning a function
function createMultiplier(factor: number): (number: number) => number {
    return function (number: number): number {
        return number * factor;
    };
}

const double = createMultiplier(2);
console.log(double(5));

// Promise returning a Promise
interface UserData {
    id: number;
    name: string;
}

function fetchUserData(Id: number): Promise<UserData> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Id === 101) {
                resolve({ id: 101, name: "Alicia" });
            } else {
                reject("User not found");
            }
        }, 1000);
    });
}

fetchUserData(101)
    .then((user: UserData) => {
        console.log("User:", user);
        return fetchUserData(2);
    })
    .catch((error: string) => {
        console.error("Error:", error);
    });
