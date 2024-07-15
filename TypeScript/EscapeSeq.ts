function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animate() {
    const frames = ['|', '/', '-', '\\']; 
    let currentFrameIndex = 0;
    while (true) {
        // Clear the console (works in Node.js)
        console.clear();

        // Output the current frame
        console.log(frames[currentFrameIndex]);

        // Move to the previous frame or wrap around
        currentFrameIndex = (currentFrameIndex + 1) % frames.length;
        await sleep(100);
    }
}
animate();