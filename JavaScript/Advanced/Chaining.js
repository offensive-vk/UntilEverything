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
            if (Id === 101) {
                resolve({ id: 101, name: "Alicia" });
            } else {
                reject("User not found");
            }
        }, 1000);
    });
}

fetchUserData(101)
    .then(user => {
        console.log("User:", user);
        return fetchUserData(2);
    })
    .catch(error => {
        console.error("Error:", error);
    });
