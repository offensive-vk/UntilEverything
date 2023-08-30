// 

let promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'Resolves after 1s'));
let promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Resolves after 2s'));
let promise3 = new Promise((resolve) => setTimeout(resolve, 3000, 'Resolves after 3s'));

let promises = [promise1, promise2, promise3];

Promise.all(promises)
    .then(values => console.log(values))
    .catch(err => console.log(`Oops ! Error Occurred : ${err} `))
    .finally(() => console.log(`All Promises Fulfilled \n`));

// Promise.allSettled() 
let promise4 = new Promise((resolve) => setTimeout(resolve, 1000, 'Resolves after 1s'));
let promise5 = new Promise((resolve) => setTimeout(resolve, 2000, 'Resolves after 2s'));
let promise6 = new Promise((resolve, reject) => setTimeout(reject, 0, 'Rejects immediately'));

let _promises = [promise4, promise5, promise6];

Promise.allSettled(promises)
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
