/**
 * @description This function, processString, takes either a string or an array of strings as input and processes it according to your requirements. It uses a regular expression to remove numbers, spaces, [], (), and (.) from the beginning of the string until it reaches a character. Finally, it trims any leading or trailing spaces from the result.
 */
function processString(input: string | string[]): string {
    const inputString = Array.isArray(input) ? input.join(' ') : input;

    // Remove numbers, spaces, [], (), and (.) from the beginning of the string
    const processedString = inputString.replace(/^[\d\s\[\]\(\).]+/, '');

    return processedString.trim();
}

// Sample input
const input = "[10]. Hulley S, Grady D, Bush T. Randomized trial of estrogen plus progestin for secondary prevention of coronary heart disease in postmenopausal women. heart and estrogen/progestin replacement study (HERS). Research group. JAMA. 1998;280:605-13. ";

// Process the input
const output = processString(input);

// Output the result
console.log(output);
