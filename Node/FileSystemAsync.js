const fs = require('fs');

// Reading Files (Asynchronous)
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('Asynchronous Read:\n', data);

    // Writing Files (Asynchronous)
    const writeFileData = 'Data to be written asynchronously.';
    fs.writeFile('example-write-async.txt', writeFileData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('Asynchronous Write: File written successfully.');

        // Appending to Files (Asynchronous)
        const appendData = '\nAppended text asynchronously.';
        fs.appendFile('example-write-async.txt', appendData, 'utf8', (err) => {
            if (err) {
                console.error('Error appending to file:', err);
                return;
            }
            console.log('Asynchronous Append: Data appended successfully.');

            // File Information (Asynchronous)
            fs.stat('example-write-async.txt', (err, stats) => {
                if (err) {
                    console.error('Error getting file information:', err);
                    return;
                }
                console.log('File Information (Asynchronous):\n', stats);

                // Working with Directories (Creating and Reading) (Asynchronous)
                fs.mkdir('new_directory_async', (err) => {
                    if (err) {
                        console.error('Error creating directory:', err);
                        return;
                    }
                    console.log('Directory created successfully.');

                    fs.readdir('.', (err, files) => {
                        if (err) {
                            console.error('Error reading directory:', err);
                            return;
                        }
                        console.log('Contents of the current directory (Asynchronous):\n', files);

                        // File Renaming (Asynchronous)
                        fs.rename('example-write-async.txt', 'renamed-example-async.txt', (err) => {
                            if (err) {
                                console.error('Error renaming file:', err);
                                return;
                            }
                            console.log('File renamed successfully (Asynchronous).');

                            // Deleting Files (Asynchronous)
                            fs.unlink('renamed-example-async.txt', (err) => {
                                if (err) {
                                    console.error('Error deleting file:', err);
                                    return;
                                }
                                console.log('File deleted successfully (Asynchronous).');

                                // Removing Directories (Asynchronous)
                                fs.rmdir('new_directory_async', (err) => {
                                    if (err) {
                                        console.error('Error removing directory:', err);
                                        return;
                                    }
                                    console.log('Directory removed successfully (Asynchronous).');
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});

// Watching Files and Directories (Asynchronous)
const watcher = fs.watch('.', { recursive: true }, (event, filename) => {
    console.log(`File ${filename} has been ${event}`);
});

// Close the watcher after some time
setTimeout(() => {
    watcher.close();
    console.log('Watcher closed.');
}, 10000); // Close after 10 seconds