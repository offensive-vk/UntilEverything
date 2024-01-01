// Profile Programs

interface Life {
    code: Promise<string | boolean>;
    rest: Promise<string | boolean>;
    learn: Promise<string | boolean>;
}
interface Wasted {
    wasted: Promise<string | boolean>;
    again: Array<Promise<Life>>;
}
const vedansh: Life = {
    async code() {
        return "->< Writing code />";
    },
    async rest() {
        return "->< Resting />";
    },
    async learn(){
        return "->< Learning />";
    }
};

const myLife: Array<Promise<Array<Life> | Array<Wasted>>> = [vedansh.code(), vedansh.rest(), vedansh.learn()];
console.log(...myLife);

// // Another - 3
// interface Life {
//     code: Promise<string>;
//     rest: Promise<string>;
//     learn: Promise<string>;
// }

// const vedansh: Life = {
//     async code() {
//         return "< Writing code />";
//     },
//     async rest() {
//         return "< Resting />";
//     },
//     async learn() {
//         return "< Learning new things />";
//     },
// };

// const myLifeLoop = async () => {
//     while (true) {
//         const activities: Array<Promise<Life | boolean>> = [
//             vedansh.code(),
//             vedansh.rest(),
//             vedansh.learn(),
//         ];

//         for (const activityPromise of activities) {
//             const activity = await activityPromise;
            
//             if (typeof activity === 'boolean') {
//                 console.log('Got a boolean:', activity);
//             } else {
//                 console.log('Got a Life activity:', activity);
//             }
//         }
//     }
// };

// myLifeLoop();

// Last
// interface Life {
//     code: () => Promise<string>;
//     rest: () => Promise<string>;
//     learn: () => Promise<string>;
// }

// interface Wasted {
//     wasted: () => Promise<string>;
//     again: Array<Life>;
// }

// const vedansh: Life = {
//     async code() {
//         return "->< Writing code />";
//     },
//     async rest() {
//         return "->< Resting />";
//     },
//     async learn() {
//         return "->< Learning />";
//     }
// };

// const myLife: Array<Promise<string>> = [vedansh.code(), vedansh.rest(), vedansh.learn()];

// Promise.all(myLife)
//     .then(results => {
//         console.log(...results);
//     })
//     .catch(error => {
//         console.error(error);
//     });

// End