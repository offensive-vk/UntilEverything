class Global<T>{
    private value: T | undefined;
    private reg: T | undefined;
    static check: boolean | string;

    constructor (
        public id: number,
        public salary: number,
        public name: string
    ) {}

    public showPrivateData(): void{
        console.log(`${this.value}\n ${this.reg}\n`);
    }
    public showPublicData(): void{
        console.log(`${this.id}\n ${this.salary}\n ${this.name}\n`);
    }
}

const G: Global<Number> = new Global<Number>(9001, 87000, 'Manish');
G.showPrivateData();
G.showPublicData();

console.log(`\n =================== \n`);
function Sample<T>(anything: T): T {
    return anything;
}

let _sample = Sample<string>('TypeScript');
console.log(`String Value : ${_sample}`);

let sample_ = Sample<boolean>(true);
console.log(`Boolean Value : ${sample_}`);