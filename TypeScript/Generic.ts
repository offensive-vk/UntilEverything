class XGlobal<T>{
    private value: T | undefined;
    private reg: T | undefined;
    static check: boolean | string = false;

    constructor(
        public id: number,
        public salary: number,
        public name: string
    ) { }

    public showPrivateData(): T | void {
        console.log(`${this.value}\n ${this.reg}\n`);
    }
    public showPublicData(): T | void {
        console.log(`${this.id}\n ${this.salary}\n ${this.name}\n`);
    }
}

const G: XGlobal<number> = new XGlobal<number>(9001, 87000, 'Manish');
G.showPrivateData();
G.showPublicData();
XGlobal.check = true;

console.log(`\n =================== \n`);
function Sample<T>(anything: T): T {
    return anything;
}

let _sample = Sample<string>('TypeScript');
console.log(`String Value : ${_sample}`);

let sample_ = Sample<boolean>(true);
console.log(`Boolean Value : ${sample_}`);

// Generic function that takes an array of any type and returns the first element
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}

const _numbers = [1, 2, 3, 4, 5];
const firstNumber = getFirstElement(_numbers); 

const _names = ["Manish", "Ram", "Don"];
const firstName = getFirstElement(_names); 

console.log(firstNumber);
console.log(firstName); 
