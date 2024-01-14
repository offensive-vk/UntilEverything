// Function factory returning closures
function counterFactory() {
    let count = 0;

    function increment() {
        count++;
        console.log(`Count is now: ${count}`);
    }

    function decrement() {
        count--;
        console.log(`Count is now: ${count}`);
    }

    function getCount() {
        console.log(`Current count is: ${count}`);
    }

    return { increment, decrement, getCount };
}
