class MathUtils {
    static square(x) {
        return x * x;
    }

    static cube(x) {
        return x * x * x;
    }
}

console.log(MathUtils.square(5)); // Output: 25
console.log(MathUtils.cube(3)); // Output: 27


/* 
Another example for static
*/

class StringUtils {
    static reverseString(string) {
        return string.split('').reverse().join('');
    }

    static countOccurrences(string, target) {
        let count = 0;
        let index = string.indexOf(target);

        while (index !== -1) {
            count++;
            index = string.indexOf(target, index + 1);
        }

        return count;
    }
}

const reversed = StringUtils.reverseString("Hello, World!");
console.log(reversed); // Output: "!dlroW ,olleH"

const occurrences = StringUtils.countOccurrences("abracadabra", "a");
console.log(occurrences); // Output: 5
