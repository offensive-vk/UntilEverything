function mostFrequent(numbers: Array<number>): number {
    if (numbers.length === 0) {
        console.log(`Empty Array: ${numbers}\n`);
        return 0;
    }

    // To count the occurrences of each element
    const elementCounts = new Map<number, number>();

    let maxCount = 0;
    let mostFrequent = 0;

    let secondMaxCount = 0;
    let secondMostFrequent = 0;

    for (const num of numbers) {
        const count = (elementCounts.get(num) || 0) + 1;
        elementCounts.set(num, count);

        if (count > maxCount) {
            secondMaxCount = maxCount;
            secondMostFrequent = mostFrequent;
            maxCount = count;
            mostFrequent = num;
        } else if (count > secondMaxCount) {
            secondMaxCount = count;
            secondMostFrequent = num;
        }
    }
    console.log(`Most Frequent Element: ${mostFrequent}`);
    console.log(`Second Most Frequent Element: ${secondMostFrequent}`);
    return mostFrequent;
}

const _Arr: Array<number> = [10, 20, 70, 90, 55, 10, 20, 90];
const Result: number = mostFrequent(_Arr);
