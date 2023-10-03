/* 
The fs module (File System module) in Node.js is a built-in module that provides a set of functions for interacting with the file system. These functions allow you to perform various file-related operations such as reading, writing, deleting, and manipulating files and directories.
*/

const fs = require('fs');

// Reading Files (Asynchronous)
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('Asynchronous Read:\n', data);

    // Writing Files (Asynchronous)
    fs.writeFile('example-copy.txt', data, 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('Asynchronous Write: File written successfully.');

        // Appending to Files (Asynchronous)
        fs.appendFile('example-copy.txt', '\nAppended text', 'utf8', (err) => {
            if (err) {
                console.error('Error appending to file:', err);
                return;
            }
            console.log('Asynchronous Append: Data appended successfully.');

            // File Information
            fs.stat('example-copy.txt', (err, stats) => {
                if (err) {
                    console.error('Error getting file information:', err);
                    return;
                }
                console.log('File Information:\n', stats);

                // Working with Directories (Creating and Reading)
                fs.mkdir('new_directory', (err) => {
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
                        console.log('Contents of the current directory:\n', files);

                        // File Renaming
                        fs.rename('example-copy.txt', 'renamed-example.txt', (err) => {
                            if (err) {
                                console.error('Error renaming file:', err);
                                return;
                            }
                            console.log('File renamed successfully.');

                            // Deleting Files
                            fs.unlink('renamed-example.txt', (err) => {
                                if (err) {
                                    console.error('Error deleting file:', err);
                                    return;
                                }
                                console.log('File deleted successfully.');

                                // Removing Directories
                                fs.rmdir('new_directory', (err) => {
                                    if (err) {
                                        console.error('Error removing directory:', err);
                                        return;
                                    }
                                    console.log('Directory removed successfully.');
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});

// Watching Files and Directories
fs.watch('.', (event, filename) => {
    console.log(`File ${filename} has been ${event}`);
});
