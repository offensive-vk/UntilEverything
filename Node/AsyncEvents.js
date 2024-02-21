const EventEmitter = require('events');

class AsyncOperation extends EventEmitter {
    async performAsyncOperation() {
        try {
            this.emit('start');
            console.log('Async operation started...');

            // Simulate an asynchronous task (e.g., fetching data from an API)
            await this.simulateAsyncTask();

            this.emit('progress', '50%');
            console.log('Async operation in progress (50%)...');

            // Simulate another asynchronous task
            await this.simulateAsyncTask();

            this.emit('progress', '100%');
            console.log('Async operation completed (100%).');

            this.emit('complete', 'Operation completed successfully.');
        } catch (error) {
            this.emit('error', error);
        }
    }

    simulateAsyncTask() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });
    }
}

async function main() {
    const asyncOperation = new AsyncOperation();

    asyncOperation.on('start', () => {
        console.log('Async operation is starting...');
    });

    asyncOperation.on('progress', (progress) => {
        console.log(`Progress: ${progress}`);
    });

    asyncOperation.on('complete', (message) => {
        console.log(message);
    });

    asyncOperation.on('error', (error) => {
        console.error('Error:', error);
    });

    await asyncOperation.performAsyncOperation();

    console.log('Main program continues...');
}

main();