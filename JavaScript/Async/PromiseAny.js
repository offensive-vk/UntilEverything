/* 
* @description: Promise.any()
It is used to handle a collection of promises and returns a new promise that is fulfilled as soon as any of the input promises is fulfilled. If all the input promises are rejected, the returned promise will be rejected with an AggregateError containing all the rejection reasons.

*/

let promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'Resolves after 1s'));
let promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Resolves after 2s'));
let promise3 = new Promise((resolve, reject) => setTimeout(reject, 0));

let promises = [promise1, promise2, promise3];

Promise.any(promises)
    .then(value => console.log(value)); // Resolves after 1s

// Different Method: 
(async () => {
    try {
        const output = await Promise.any([
            Promise.reject('Error 1'),
            Promise.reject('Error 2'),
            Promise.reject('Error 3'),
        ]);
        console.log(`Output: ${output}`);
    } catch (err) {
        console.log(`Error: ${err.errors}`);
    }
})();
