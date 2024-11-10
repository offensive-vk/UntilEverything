/**
 * Represents a child with a name, age, and a list of friends.
 */
class Kid {
  public name: string;
  public age: number;
  public friends: Array<string>;

  /**
   * Spawns a new Kid with the given name and age.
   * @param name The Name of the Newborn Child.
   * @param age The Age of the Newborn Child.
   */
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.friends = [];
  }

  /**
   * Retrieves information about the child, including name and age.
   * @returns {string} A string representing the child's name and age.
   */
  getInfo(): string {
    return `${this.name} (${this.age} years old)`;
  }

  /**
   * Simulates the child going to school.
   * @returns {string} A message indicating the child is going to school.
   */
  gotoSchool(): string {
    return `${this.name} going to School.`;
  }

  /**
   * Simulates the child doing homework.
   * @returns {string} A message indicating the child is doing homework.
   */
  doHomework(): string {
    return `${this.name} doing Homework.`;
  }

  /**
   * Simulates the child using a computer.
   * @returns {string} A message indicating the child is using the computer.
   */
  useComputer(): string {
    return `${this.name} using Computer.`;
  }

  /**
   * Adds a new friend for the child.
   * @param {string} FriendName - The name of the friend to add.
   * @returns {string} A message indicating the new friendship.
   */
  makeFriends(FriendName: string): string {
    return `${FriendName} is now a friend of ${this.name}`;
  }

  /**
   * Simulates the child playing a game.
   * @template T - Type of game, either 'indoor' or 'outdoor'.
   * @param {T} type - The type of game the child is playing.
   * @returns {string} A message indicating the child is playing an indoor or outdoor game.
   */
  play<T = "indoor" | "outdoor">(type: T): string {
    return `${this.name} is playing ${type} game.`;
  }
}

/**
 * Represents a wife with a name, age, and a list of children.
 * Can be married to a husband.
 */
class Wife {
  public name: string;
  private age: number;
  protected kids: Kid[];
  public husband: Husband | null;

  /**
   * Initializes a new instance of the Wife class.
   * @param {string} name - The name of the wife.
   * @param {number} age - The age of the wife.
   */
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.husband = null;
    this.kids = [];
  }

  /**
   * Marries this wife to a husband and ensures the husband is also linked to this wife.
   * @param {Husband} husband - The husband to marry.
   */
  marry(husband: Husband): void {
    this.husband = husband;
    if (!husband.wife) {
      husband.marry(this);
    }
  }

  /**
   * Adds a child to this wife and her husband, if any.
   * @param {string} name - The name of the child.
   * @param {number} age - The age of the child.
   * @returns {string} A message indicating the child has been added.
   */
  addChild(name: string, age: number): string {
    const kid = new Kid(name, age);
    this.kids.push(kid);
    return `${kid.name} added as a child of ${this.name} & ${this.husband?.name}.`;
  }

  /**
   * Retrieves information about all the kids.
   * @returns {string} A comma-separated string of each kid's info.
   */
  getKidsInfo(): string {
    return this.kids.map((kid) => kid.getInfo()).join(", ");
  }

  /**
   * Retrieves information about the wife, including marital status.
   * @returns {string} A string with the wife's name, age, and marital status.
   */
  getInfo(): string {
    const maritalStatus = this.husband
      ? `Married to ${this.husband.name}`
      : "Single";
    return `${this.name} (Wife, ${this.age} years old) - ${maritalStatus}`;
  }

  /**
   * Orders a specified kid to perform an activity.
   * @template T - Activity method name from the Kid class.
   * @param {string} name - The name of the child to order.
   * @param {T} activity - The name of the activity to perform.
   * @param {any[]} args - Optional arguments for certain activities (e.g., 'play' type).
   * @returns {string | null} A message from the activity or null if the kid or activity is not found.
   */
  orderKid<T extends keyof Kid>(
    name: string,
    activity: T,
    ...args: T extends "play" ? [type: "indoor" | "outdoor"] : []
  ): string | null {
    const kid = this.kids.find((kid) => kid.name === name);
    if (kid && typeof kid[activity] === "function") {
      return (kid[activity] as unknown as any)(...args);
    }
    return null;
  }
}


/**
 * Represents a husband with a name, age, and a wife.
 * Can be married to a wife and interact with children through the wife.
 */
class Husband {
  public name: string;
  private age: number;
  public wife: Wife | null;

  /**
   * Initializes a new instance of the Husband class.
   * @param {string} name - The name of the husband.
   * @param {number} age - The age of the husband.
   */
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.wife = null;
  }

  /**
   * Marries this husband to a wife and ensures the wife is also linked to this husband.
   * @param {Wife} wife - The wife to marry.
   */
  marry(wife: Wife): void {
    this.wife = wife;
    if (!wife.husband) {
      wife.marry(this);
    }
  }

  /**
   * Retrieves information about the husband, including marital status.
   * @returns {string} A string with the husband's name, age, and marital status.
   */
  getInfo(): string {
    const maritalStatus = this.wife ? `Married to ${this.wife.name}` : "Single";
    return `${this.name} (Husband, ${this.age} years old) - ${maritalStatus}`;
  }

  /**
   * Orders a specified kid (through the wife) to perform an activity.
   * @template T - Activity method name from the Kid class.
   * @param {string} name - The name of the child to order.
   * @param {T} activity - The name of the activity to perform.
   * @param {any[]} args - Optional arguments for certain activities (e.g., 'play' type).
   * @returns {string | null} A message from the activity or null if the wife or kid is not found.
   */
  orderKid<T extends keyof Kid>(
    name: string,
    activity: T,
    ...args: T extends "play" ? [type: "indoor" | "outdoor"] : []
  ): string | null {
    return this.wife ? this.wife.orderKid(name, activity, ...args) : null;
  }
}

// Spawn Players
const wife = new Wife("Sneha", 25);
const husband = new Husband("Madhav", 30);

// Establish Marriage
wife.marry(husband);

// Add Kids
console.log(wife.addChild("John", 5));
console.log(wife.addChild("Clair", 3));

// Test Functions
console.log(husband.getInfo());
console.log(wife.getInfo());

// Kid activities through orders
console.log(husband.orderKid("John", "gotoSchool"));
console.log(wife.orderKid("Clair", "play", "outdoor"));

/**
 * @author Vedansh (offensive-vk)
 * @lang TypeScript v5.8.0-dev edition
 * @since Beginning of the Time
 * @description Demonstrates the use of TypeScript to create a family tree.
 * @version Final
 * @uses Family - Wife, Husband, Kids
 */