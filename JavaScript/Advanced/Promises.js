// Promises using Dominos Pizza Store.
const { puts } = require('./functions.js');

function orderPizza() {
    puts("\t < Welcome To Nominos Pizza ! />\n");
    puts("\t ================================\n");
    puts("[ Ordering a pizza... ]");

    const orderPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const isPizzaAvailable = Math.random() >= 0.3;
            if (isPizzaAvailable) {
                puts("Pizza is ready!");
                resolve("Delicious Pizza");
            } else {
                puts("Sorry, the pizza is not available right now.");
                reject("[ No Pizza ]");
            }
        }, 2000);
    });

    return orderPromise;
}

function bakePizza(pizza) {
    puts(`Baking the ${pizza}...`);

    return new Promise(resolve => {
        setTimeout(() => {
            puts(`${pizza} is baked and ready!`);
            resolve(`${pizza} (Baked)`);
        }, 3000);
    });
}

function deliverPizza(pizza) {
    puts(`Delivering the ${pizza}...`);

    return new Promise(resolve => {
        setTimeout(() => {
            puts(`${pizza} is delivered! Enjoy your meal.`);
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
        puts(`<Promise chain completed: ${deliveredPizza} />`);
    })
    .catch(handleError);

    // i Like Pizza.