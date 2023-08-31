interface Life {
    code: Promise<string | boolean>;
    rest: Promise<string | boolean>;
    learn: Promise<string | boolean>;
}

const vedansh: Life = {
    async code() {
        return "< Writing code />";
    },
    async rest() {
        return "< Resting />";
    },
    async learn() {
        return "< Learning new things />";
    },
};

const myLifeLoop = async () => {
    while (true) {
        const activities: Array<Promise<Life | boolean>> = [
            vedansh.code(),
            vedansh.rest(),
            vedansh.learn(),
        ];

        for (const activityPromise of activities) {
            const activity = await activityPromise;
            
            if (typeof activity === 'boolean') {
                console.log('Got a boolean:', activity);
            } else {
                console.log('Got a Life activity:', activity);
            }
        }
    }
};
myLifeLoop();