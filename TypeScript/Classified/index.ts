const log = console.log;
const table = console.table;

interface Vehicle{
    tyres:  number;
    doors: number | boolean;
    color: string | string[];
    brand: string;
    seats: number;
    name: string | string[];
    start(): void;
    stop(): void;
    speed(): void;
}

class FourWheeler implements Vehicle{
    tyres: number;
    doors: number | boolean;
    color: string | string[];
    brand: string;
    seats: number;
    name: string | string[];

    constructor(tyres: number,doors: number, color: string | string[], brand: string, seats: number, name: string | string[]){
        this.tyres = tyres;
        this.doors = doors;
        this.color = color;
        this.brand = brand;
        this.seats = seats;
        this.name = name;
        this.getDetails();
    }
    public start(): void{
        log(`${this.name} is starting up.`);
    }
    public stop(): void{
        log(`${this.name} is stopping.`);
    }
    public speed(): void{
        log(`Current Speed : ${Math.floor(Math.random() * 900) + 100}km/h`);
    }
    public getDetails(): void{
        log(`Number of Doors : ${this.doors}`);
        log(`Number of Seats : ${this.seats}`);
        log(`Number of Tyres : ${this.tyres}`);
        log(`Brand Name : ${this.brand}`);
        log(`Vehicle Color : ${this.color}`);
    }
}
// With Constructor
// We'll use our traditional constructor approach
var Supra = new FourWheeler(4, 2, "Green", "Toyota", 2, "Supra");
Supra.start();
Supra.speed();
Supra.stop();

// Without constructor
// 1. We can also initialize the members of the class by manually assigning values;
// var Audi = new FourWheeler();
// Audi.brand = "Audi RS6";
// Audi.color = "Black";
// log(`Brand Name : ${Audi.brand}`);
// log(`Color Name : ${Audi.color}`);
// End so on one by one ......................

function displayObj(value: FourWheeler): void{
    log(`${value} is an object of ${FourWheeler} class.`);
    value.start();
    value.speed();
    value.stop();
}

displayObj(Supra);
interface Train extends FourWheeler{
    // Future Uses
}