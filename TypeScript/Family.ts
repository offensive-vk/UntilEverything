// Life Cycle Program
class Kid {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getInfo(): string {
        return `${this.name} (${this.age} years old)`;
    }
    gotoSchool(): string{
        return `${this.name} going to School`;
    }
}

class Wife {
    private name: string;
    private age: number;
    private kids: Kid[];
    private husband: Husband | null;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.husband = null;
        this.kids = [];
    }
    marry(husband: Husband): void {
        this.husband = husband;
    }

    addChild(name: string, age: number): void {
        const kid = new Kid(name, age);
        this.kids.push(kid);
    }

    getKidsInfo(): string {
        return this.kids.map(kid => kid.getInfo()).join(", ");
    }

    getInfo(): string {
        return `${this.name} (Wife, ${this.age} years old)`;
    }
}

class Husband {
    private name: string;
    private age: number;
    private wife: Wife | null;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.wife = null;
    }

    marry(wife: Wife): void {
        this.wife = wife;
    }

    getInfo(): string {
        if (this.wife) {
            return `${this.name} (Husband, ${this.age} years old) - Married to ${this.wife.getInfo()}`;
        } else {
            return `${this.name} (Husband, ${this.age} years old) - Single`;
        }
    }
}

const wife = new Wife("Sneha", 27);
const husband = new Husband("Madhav", 30);

husband.marry(wife);
wife.addChild("John", 5);
wife.addChild("Clair", 3);

console.log(husband.getInfo());
console.log(`Children: ${wife.getKidsInfo()}`);