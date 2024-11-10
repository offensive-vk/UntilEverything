// Life Cycle Program
class Kid {
  public name: string;
  public age: number;
  public friends: Array<string>;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.friends = [];
  }

  getInfo(): string {
    return `${this.name} (${this.age} years old)`;
  }
  gotoSchool(): string {
    return `${this.name} going to School.`;
  }
  doHomework(): string {
    return `${this.name} doing Homework.`;
  }
  useComputer(): string {
    return `${this.name} using Computer.`;
  }
  makeFriends(FriendName: string): string {
    return `${FriendName} is now a friend of ${this.name}`;
  }
  play<T = 'indoor' | 'outdoor'>(type: T): string {
    return `${this.name} is playing ${type} game.`;
  }
}

class Wife {
  private name: string;
  private age: number;
  protected kids: Kid[];
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

  addChild(name: string, age: number): typeof Kid.name {
    const kid = new Kid(name, age);
    this.kids.push(kid);
    this.kids.length++;
    return kid.name;
  }

  getKidsInfo(): string {
    return this.kids.map((kid) => kid.getInfo()).join(", ");
  }

  getInfo(): string {
    return `${this.name} (Wife, ${this.age} years old)`;
  }

  order<T extends () => string>(command: T): string {
      return command();
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
const x = wife.addChild("Clair", 3);

console.log(husband.getInfo());
console.log(`Children: ${wife.getKidsInfo()}`);
