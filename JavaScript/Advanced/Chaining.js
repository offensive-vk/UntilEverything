// Function returning a function
function createMultiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
console.log(double(5));

// Promise returning a Promise
function fetchUserData(Id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Id === 1) {
                resolve({ id: 1, name: "Alice" });
            } else {
                reject("User not found");
            }
        }, 1000);
    });
}

fetchUserData(1)
    .then(user => {
        console.log("User:", user);
        return fetchUserData(2);
    })
    .catch(error => {
        console.error("Error:", error);
    });
