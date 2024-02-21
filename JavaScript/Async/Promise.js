// Helper function to create a promise that resolves after a given time
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Example promises
const promise1 = delay(2000).then(() => 'Promise 1 resolved');
const promise2 = delay(1000).then(() => 'Promise 2 resolved');
const promise3 = delay(3000).then(() => 'Promise 3 resolved');

// Example using Promise.all()
Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log('Promise.all() result:', results);
    })
    .catch(error => {
        console.error('Promise.all() error:', error);
    });

// Example using Promise.race()
Promise.race([promise1, promise2, promise3])
    .then(winner => {
        console.log('Promise.race() winner:', winner);
    })
    .catch(error => {
        console.error('Promise.race() error:', error);
    });

// Example using Promise.any()
// Note: Promise.any() requires Node.js version 15.0.0 or later, or a browser with support
Promise.any([promise1, promise2, promise3])
    .then(result => {
        console.log('Promise.any() result:', result);
    })
    .catch(errors => {
        console.error('Promise.any() errors:', errors);
    });
