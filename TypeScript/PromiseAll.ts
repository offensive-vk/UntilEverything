/* 
Promise.all() is a high-level method in TypeScript for managing multiple asynchronous operations concurrently. It takes an iterable (usually an array) of promises as input and returns a new promise that fulfills when all the promises in the input iterable are fulfilled. If any of the input promises are rejected, the returned promise is immediately rejected with the reason of the first rejected promise.
*/

(async () => {
    let promise1 = new Promise<string>((resolve) => setTimeout(resolve, 1000, 'Resolves after 1s'));
    let promise2 = new Promise<string>((resolve) => setTimeout(resolve, 2000, 'Resolves after 2s'));
    let promise3 = new Promise<string>((resolve) => setTimeout(resolve, 3000, 'Resolves after 3s'));

    let promises: Array<Promise<string>> = [promise1, promise2, promise3];

    Promise.all(promises)
        .then(values => console.log(values))
        .catch(err => console.log(`Oops ! Error Occurred : ${err} `))
        .finally(() => console.log(`All Promises Fulfilled \n`));

    /* 
    Promise.allSettled()
    It's designed to handle a collection of promises, providing a way to determine the outcome of all promises regardless of whether they fulfill or reject. It takes an iterable (usually an array) of promises as input and returns a new promise that fulfills with an array of objects representing the outcomes of the input promises. Each object in the array contains a status property indicating whether the promise was fulfilled or rejected, and a value or reason property containing the fulfillment value or rejection reason, respectively.
    */
    let promise4 = new Promise<string>((resolve) => setTimeout(resolve, 1000, 'Resolves after 1s'));
    let promise5 = new Promise<string>((resolve) => setTimeout(resolve, 2000, 'Resolves after 2s'));
    let promise6 = new Promise<string>((resolve, reject) => setTimeout(reject, 0, 'Rejects immediately'));

    let _promises: Array<Promise<string>> = [promise4, promise5, promise6];

    Promise.allSettled(_promises)
        .then(results => {
            results.forEach(result => {
                if (result.status === 'fulfilled') {
                    console.log(result.value);
                } else {
                    console.log(`Rejected: ${result.reason}`);
                }
            });
        })
        .finally(() => console.log(`Promises Fulfilled \n`));
})();

/**@end */