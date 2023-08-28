function showLoadingEffect(loadingTime: number) {
    const loadingAnimation = ["|", "/", "-", "\\"];
    let animationIndex = 0;

    const loadingInterval = setInterval(() => {
        process.stdout.write(`~ [\r${loadingAnimation[animationIndex]}] Loading ...`);
        animationIndex = (animationIndex + 1) % loadingAnimation.length;
    }, 100);

    return new Promise((resolve) => {
        setTimeout(() => {
            clearInterval(loadingInterval);
            process.stdout.write("\rLoading complete.     \n");
            resolve();
        }, loadingTime);
    });
} // export it and use it for fun !

async function main() {
    console.log("Start loading...");

    // Set the loading time in milliseconds
    const loadingTime = 3000; // 3 seconds
    await showLoadingEffect(loadingTime);

    console.log("Loading finished!");
}

main();
