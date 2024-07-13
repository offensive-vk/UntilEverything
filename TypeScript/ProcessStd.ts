// @ts-ignore
import * as process from 'process';

function askQuestion(question: string): Promise<string> {
    return new Promise((resolve) => {
        process.stdout.write(question);

        process.stdin.once('data', (data: any) => {
            const input = data.toString().trim();
            resolve(input);
        });
    });
}

async function main() {
    try {
        const name = await askQuestion('Enter your name: ');
        process.stdout.write(`Hello, ${name}!\n`);

        const age = await askQuestion('Enter your age: ');
        const parsedAge = parseInt(age, 10);

        if (isNaN(parsedAge)) {
            process.stderr.write('Invalid age. Please enter a valid number.\n');
            process.exit(1);
        }

        process.stdout.write(`You are ${parsedAge} years old.\n`);
    } catch (error: any) {
        process.stderr.write(`An error occurred: ${error.message}\n`);
        process.exit(1);
    } finally {
        process.stdin.end();
    }
}

main();