// Create two promises that resolve after a specified time
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 2 rejected');
    }, 500);

});

// Use Promise.race to determine which promise resolves or rejects first
Promise.race([promise1, promise2])
    .then(result => {
        console.log(result); // This will be the result of the first promise that resolves
    })
    .catch(error => {
        console.error(error); // This will be the error of the first promise that rejects
    });

/**
 * @description Promise.race() is used to return the result or error of the first promise that resolves or rejects.
 */