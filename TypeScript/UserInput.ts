// @ts-ignore
import * as process from 'process';

function getUserInput(question: string): Promise<string> {
    return new Promise((resolve) => {
        process.stdout.write(question);

        process.stdin.once('data', (data: any) => {
            const userInput = data.toString().trim();
            resolve(userInput);
        });
    });
}

async function main() {
    try {
        const name = await getUserInput('Enter your name: ');
        const age = await getUserInput('Enter your age: ');

        process.stdout.write(`Hello, ${name}! You are ${age} years old.\n`);
    } catch (error) {
        process.stderr.write(`An error occurred: ${error instanceof Error? error.message : null}\n`);
        process.exit(1);
    } finally {
        process.stdin.end();
    }
}

main();
export { }