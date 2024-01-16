import * as fs from 'fs';

function listFiles(directoryPath: string): void {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error(`Error reading directory: ${err}`);
            return;
        }

        // Filter out directories and list only files
        const fileNames = files.filter(file => fs.statSync(file).isFile());
        
        console.log('File names:', fileNames);
    });
}

// Replace '.' with the path of the directory you want to list files from
listFiles('.');