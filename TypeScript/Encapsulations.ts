class Car {
    private make: string;
    private model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }
    public getMake(): string {
        return this.make;
    }

    public getModel(): string {
        return this.model;
    }

    public startEngine(): void {
        console.log(`Starting the engine of ${this.make} ${this.model}.`);
    }

    private drive(): void {
        console.log(`${this.make} ${this.model} is being driven.`);
    }

    protected sit(): void {
        console.log(`Sitting the engine of ${this.make} ${this.model}.`);
    }
}

const myCar = new Car("Lykan", "Hypersport");
console.log(`Make: ${myCar.getMake()}`);
console.log(`Model: ${myCar.getModel()}`);

myCar.startEngine();
//myCar.drive(); // Error: Property 'drive' is private and only accessible within class 'Car'.