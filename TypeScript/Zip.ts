import * as fs from 'fs';
import * as path from 'path';
import AdmZip from 'adm-zip';

// Function to create a ZIP file and add files to it
const createZipFile = (zipFilePath: string, files: string[]) => {
    const zip = new AdmZip();

    files.forEach(file => {
        if (fs.existsSync(file)) {
            zip.addLocalFile(file);
        } else {
            console.error(`File not found: ${file}`);
        }
    });

    zip.writeZip(zipFilePath);
    console.log(`ZIP file created at ${zipFilePath}`);
};

// Function to extract all files from a ZIP file
const extractZipFile = (zipFilePath: string, outputDir: string) => {
    if (!fs.existsSync(zipFilePath)) {
        console.error(`ZIP file not found: ${zipFilePath}`);
        return;
    }

    const zip = new AdmZip(zipFilePath);
    zip.extractAllTo(outputDir, true);
    console.log(`ZIP file extracted to ${outputDir}`);
};

// Function to list contents of a ZIP file
const listZipContents = (zipFilePath: string) => {
    if (!fs.exists(zipFilePath)) {
        console.error(`ZIP file not found: ${zipFilePath}`);
        return;
    }

    const zip = new AdmZip(zipFilePath);
    const zipEntries = zip.getEntries();

    console.log(`Contents of ${zipFilePath}:`);
    zipEntries.forEach(entry => {
        console.log(entry.entryName);
    });
};

// Example usage
const zipFilePath = path.join(__dirname, 'example.zip');
const filesToZip = [path.join(__dirname, 'file1.txt'), path.join(__dirname, 'file2.txt')];
const outputDir = path.join(__dirname, 'output');

// Create a ZIP file
createZipFile(zipFilePath, filesToZip);

// List contents of the ZIP file
listZipContents(zipFilePath);

// Extract the ZIP file
extractZipFile(zipFilePath, outputDir);
