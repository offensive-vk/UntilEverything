const log = console.log;
/**
 * @interface Vehicle
 * @satisfies All The Vehicles.
 * @author Vedansh
 */
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

interface Bike extends Omit<Vehicle, "doors"> {}
class TwoWheeler implements Bike {
    /**
     * Represents a two-wheeled vehicle.
     * 
     * @param tyres - The number of tyres of the two-wheeler.
     * @param color - The color of the two-wheeler. It can be a single string or an array of strings.
     * @param brand - The brand of the two-wheeler.
     * @param seats - The number of seats of the two-wheeler.
     * @param name - The name of the two-wheeler. It can be a single string or an array of strings.
     */
    constructor(
        public tyres: number,
        public color: string | string[],
        public brand: string,
        public seats: number,
        public name: string | string[]
    ) { }

    /**
     * Prints a message indicating that the vehicle is starting up.
     */
    public start(): void {
        log(`${this.name} is starting up.`);
    }

    /**
     * Prints a message indicating that the vehicle is stopping.
     */
    public stop(): void {
        log(`${this.name} is stopping.`);
    }

    /**
     * Prints a random speed in kilometers per hour.
     */
    public speed(): void {
        log(`Current Speed : ${Math.floor(Math.random() * 900) + 100}km/h`);
    }

    /**
     * Prints the number of doors, seats, tires, brand, and color of the vehicle.
     */
    public getDetails(): void{
        log(`Number of Seats : ${this.seats}`);
        log(`Number of Tyres : ${this.tyres}`);
        log(`Brand Name : ${this.brand}`);
        log(`Vehicle Name : ${this.name}`);
        log(`Vehicle Color : ${this.color}`);
    }
}

class FourWheeler implements Vehicle {
    tyres: number;
    doors: number | boolean;
    color: string | string[];
    brand: string;
    seats: number;
    name: string | string[];

    /**
     * Initializes a new instance of the FourWheeler class with the specified number of tires, doors, color, brand, seats, and name.
     * @param tyres - The number of tires of the vehicle.
     * @param doors - The number of doors of the vehicle.
     * @param color - The color of the vehicle.
     * @param brand - The brand of the vehicle.
     * @param seats - The number of seats of the vehicle.
     * @param name - The name of the vehicle.
     */
    constructor(tyres: number, doors: number, color: string | string[], brand: string, seats: number, name: string | string[]){
        this.tyres = tyres;
        this.doors = doors;
        this.color = color;
        this.brand = brand;
        this.seats = seats;
        this.name = name;
        this.getDetails();
    }

    /**
     * Prints a message indicating that the vehicle is starting up.
     */
    public start(): void{
        log(`${this.name} is starting up.`);
    }

    /**
     * Prints a message indicating that the vehicle is stopping.
     */
    public stop(): void{
        log(`${this.name} is stopping.`);
    }

    /**
     * Prints a random speed in kilometers per hour.
     */
    public speed(): void{
        log(`Current Speed : ${Math.floor(Math.random() * 900) + 100}km/h`);
    }

    /**
     * Prints the number of doors, seats, tires, brand, and color of the vehicle.
     */
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
var Supra = new FourWheeler(4, 2, "Skyblue", "Toyota", 2, "Supra");
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

function displayObj(value: FourWheeler | TwoWheeler): void{
    log(`\n=============================\n`);
    value.start();
    value.speed();
    value.stop();
    log(`\n=============================\n`);
}
displayObj(Supra);

// Two Wheeler :  Bike
var Honda = new TwoWheeler(2, "Black", "Hero Honda", 2, "CD Deluxe");
Honda.getDetails();
displayObj(Honda);
