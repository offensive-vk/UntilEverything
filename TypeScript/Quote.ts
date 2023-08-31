// Profile Program 

interface Life {
    code: Promise<string | boolean>;
    rest: Promise<string | boolean>;
}

const vedansh: Life = {
    async code() {
        return "< Writing code />";
    },
    async rest() {
        return "< Resting />";
    },
};

const myLife: Array<Promise<Life | string | boolean>> = [vedansh.code(), vedansh.rest(), vedansh.code()];
console.log(myLife[0]);
