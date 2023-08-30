type custom = string | boolean | number;
var random = Math.random();

const x: Array<custom> = new Array();
for(let i = 0; i <= 10; i++){
        x.push(`${Math.random() * 1000}`);
}

console.table(x);

// We can also create custom datatypes in here.
type Human = {
        species: string
        cast: string
        label: string
        planet: string | null
}
interface Women{
        type: Women,
        maxage: 100,
        class: Human,
        maxlife: string | symbol,
        rest: null,
        others: undefined | never | unknown | null
}