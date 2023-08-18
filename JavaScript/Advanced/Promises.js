
// Promises using Dominos Pizza Store.
function orderPizza() {
    console.log("[ Ordering a pizza... ]");

    const orderPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const isPizzaAvailable = Math.random() >= 0.3;
            if (isPizzaAvailable) {
                console.log("Pizza is ready!");
                resolve("[ Delicious Pizza ]");
            } else {
                console.log("Sorry, the pizza is not available right now.");
                reject("[ No Pizza ]");
            }
        }, 2000);
    });

    return orderPromise;
}

function bakePizza(pizza) {
    console.log(`Baking the ${pizza}...`);

    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`${pizza} is baked and ready!`);
            resolve(`${pizza} (Baked)`);
        }, 3000);
    });
}

function deliverPizza(pizza) {
    console.log(`Delivering the ${pizza}...`);

    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`${pizza} is delivered! Enjoy your meal.`);
            resolve(`${pizza} (Delivered)`);
        }, 1500);
    });
}

function handleError(error) {
    console.error("Error:", error);
}

orderPizza()
    .then(pizza => {
        return bakePizza(pizza);
    })
    .then(bakedPizza => {
        return deliverPizza(bakedPizza);
    })
    .then(deliveredPizza => {
        console.log(`Promise chain completed: ${deliveredPizza}`);
    })
    .catch(handleError);

    // i Like Pizza.