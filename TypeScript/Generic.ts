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


function Sample<T>(anything?: T): T {
    return anything;
}

let _sample = Sample<string>('TypeScript');
console.log(_sample);