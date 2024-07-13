/**
 * Prints a welcome pattern based on the provided dimensions.
 * 
 * @param N The total number of rows in the pattern.
 * @param M The total number of characters in each row of the pattern.
 * @returns void
 */
function printWelcomePattern(N: number, M: number): void {
    for (let i = 1; i < N; i += 2) {
        console.log(".".repeat(i).concat("|").repeat(1).concat(".").repeat(i).padStart(M / 2 + i / 2, "-").padEnd(M, "-"));
    }
    console.log("WELCOME".padStart((M - 7) / 2 + 7 / 2, "-").padEnd(M, "-"));
    for (let i = N - 2; i >= 1; i -= 2) {
        console.log(".".repeat(i).concat("|").repeat(1).concat(".").repeat(i).padStart(M / 2 + i / 2, "-").padEnd(M, "-"));
    }
}
// Example usage:
const N: number = 10;
const M: number = 10;
printWelcomePattern(N, M);