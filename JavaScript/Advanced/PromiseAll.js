// 

let promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'Resolves after 1s'));
let promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Resolves after 2s'));
let promise3 = new Promise((resolve) => setTimeout(resolve, 3000, 'Resolves after 3s'));

let promises = [promise1, promise2, promise3];

Promise.all(promises)
    .then(values => console.log(values))
    .catch(err => console.log(`Oops ! Error Occurred : ${err} `))
    .finally(() => console.log(`All Promises Fulfilled \n`));