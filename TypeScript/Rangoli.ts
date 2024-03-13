/**
 * 
 * @param size Number of lines of rangoli to print.
 * @returns void
 */
function printRangoli(size: number): void {
    const alpha: string = 'abcdefghijklmnopqrstuvwxyz';

    const li: string[] = [];
    for (let i = 0; i < size; i++) {
        const s: string = alpha.slice(i, size).split('').join('-');
        li.push((s.split('').reverse().join('') + s.slice(1)).padStart(4 * size - 3, '-'));
    }

    console.log([...li.slice(0, -1).reverse(), ...li].join('\n'));
}


printRangoli(10);