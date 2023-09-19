var puts = console.log;
interface _Server {
    country: string;
    continent: string;
    address: Array<string> | string;
    totalPlayers?: Array<Player> | number;
    isOnline(): boolean | null;
    wake(): void;
    reset(): void;
    restart(): void;
    shutdown(): void;
}
/**
 * The `Server` class represents a server in a game.
 */
class Server implements _Server {
    /**
     * Creates a new instance of the `Server` class.
     * @param country - The country of the server.
     * @param continent - The continent of the server.
     * @param address - The address(es) of the server.
     * @param range - The range of the server's IP addresses.
     * @param totalPlayers - The total players online.
     */
    constructor(
        public country: string | undefined,
        public continent: string | undefined,
        public address: string | Array<string> = [],
        public range: string | Array<string> = [],
        public totalPlayers?: Array<Player> | number
    ) { }

    /**
     * Prints the details of the server, including country, continent, address, and total players online.
     */
    public getServerDetails(): void {
        console.log("\n===============================\n");
        console.log(":: Showing Server Details ::");
        console.log(`Server Country: ${this.country}`);
        console.log(`Server Continent: ${this.continent}`);
        console.log(`Server Addresses: ${this.address}`);
        console.log(`Total Players Online: ${this.totalPlayers}`);
        console.log("\n===============================\n");
    }

    /**
     * Checks if the server is online.
     * @returns A boolean value indicating if the server is online.
     */
    isOnline(): boolean | null {
        const is = [true, false, null];
        return is[Math.floor(Math.random() * 1)];
    }

    wake(): void {
        setTimeout(() => {
            console.log("Starting the Server...");
            console.log(`${this.country} Server is online.`);
            console.log(`${this.address} is online.`);
            console.log(`${this.range} Range is online.`);
            console.log(`There are ${this.totalPlayers} players are online. `);
        }, 1500);
    }
    reset(): void {
        setTimeout(() => {
            console.log(`Clearing All Data From ${this.address}...`);
            console.log(`${this.address} is offline.`);
        }, 3000);
    }

    restart(): void {
        setTimeout(() => {
            console.log(`Restarting ${this.address}...`);
            console.log(`${this.address} is online.`);
        }, 4500);
    }

    shutdown(): void {
        setTimeout(() => {
            console.log("Server is Shutting Down...");
        }, 1500);
    }
}

class Player {
    public username: string;
    public health: number;
    public weapon: Weapon | null;

    constructor(username: string) {
        this.username = username;
        this.health = 100;
        this.weapon = null;
    }
    public getPlayer(): void {
        puts(`\n===============================\n`);
        puts(`\n:: Showing Player Details ::\n `);
        puts(`Player Name: ${this.username}`);
        puts(`Player Health: ${this.health}`);
        puts(`Player Weapon: ${this.weapon}`);
        puts(`\n===============================\n`);

    }
    public getReady(): void {
        puts(`${this.username} is ready .`);
    }
    public Attack(): void {
        setTimeout(() => {
            puts(`Attacks Incoming from ${this.username}... `);
        }, 2500);
    }
    public StopAttack(): void {
        setTimeout(() => {
            puts(`Stopping All Attacks from ${this.username}... `);
        }, 2500);
    }
    public showWeapon(): void | null{
        if(this.weapon!= null){
            puts(`${this.username} Does not have a weapon. `);
        }
        else{
            puts(`${this.username} has ${this.weapon} weapon. `);
        }
    }
}
/*
 * The `Weapon` class represents a weapon in a game.
 */
class Weapon {

    public WeaponName: string;
    public Damage: number;
    public isAuto: boolean;
    public isSniper: boolean;
    public Recoil?: number;
    /**
     * Creates a new instance of the `Weapon` class.
     * @param _name - The name of the weapon.
     * @param damage - The damage inflicted by the weapon.
     * @param recoil - The recoil of the weapon (optional).
     * @param isAuto - A boolean value indicating if the weapon is automatic.
     * @param isSniper - A boolean value indicating if the weapon is a sniper rifle.
     */
    constructor(_name: string, damage: number, isAuto: boolean, isSniper: boolean, recoil?: number) {
        this.WeaponName = _name;
        this.Damage = damage;
        this.isAuto = isAuto;
        this.isSniper = isSniper;
        this.Recoil = recoil;
    }
    /**
     * Displays the details of the weapon, including the name, damage, recoil, and type.
     */
    public showWeapon(): void {
        console.log("\n===============================\n");
        console.log("\n :: Showing Weapon Details ::\n");
        console.log(`Weapon Name: ${this.WeaponName}`);
        console.log(`Weapon Damage: ${this.Damage}`);
        console.log(`Weapon Recoil: ${this.Recoil}`);
        if (this.isAuto && !this.isSniper) {
            console.log(`Weapon Type: Assault Rifle`);
        } else if (!this.isAuto && this.isSniper) {
            console.log(`Weapon Type: Sniper Rifle`);
        } else {
            console.log(`Weapon Type: Unknown`);
        }
        console.log("\n===============================\n");
    }
    public SpawnWeapon(): void {
        setTimeout(() => {
            this.showWeapon();
            console.log("Spawning All Weapons...\nPlease Wait...");
            console.log(`${this.WeaponName} has been spawned...`);
        }, 3500);
    }
}
/**
 * This class represents the main game object in the program.
 */
class Game {
    public Players: Array<Player> | null;
    public Weapons: Array<Weapon> | null;
    public Servers: Array<Server> | null;
    public static Name: string | null | 'Unknown Game'; 
    /**
     * Initializes a new instance of the Game class with the given name.
     * @param _name - The name of the game.
     */
    constructor(_name: string) {
        Game.Name = _name;
        console.log(`Initializing a new Game: ${Game.Name}\n`);
        this.Players = [];
        this.Weapons = [];
        this.Servers = [];
    }
    /**
     * Starts the game by waking up servers, spawning weapons, and getting players ready.
     */
    public async StartGame(): Promise<void> {
        const Start = new Game('New Game');
        const Players = new Player('Player');
        const Weapons = new Weapon('AKM', 80, true, false);
        const Servers = new Server('Singapore', 'Asia', ['127.0.0.1 ', '127.0.0.2 ', '127.0.0.3 '], '127.0.0.1/48 ', 0);

        Servers.wake();
        Weapons.SpawnWeapon();
        Players.getReady();
    }

    /**
     * Loads the game from a saved state.
     */
    public async LoadGame(): Promise<void> {
        // TODO: Implement game loading logic
    }

    /**
     * Saves the current game state.
     */
    public async SaveGame(): Promise<void> {
        // TODO: Implement game saving logic
    }
    /**
     * Exits the game.
     */
    public async ExitGame(): Promise<void> {
        // TODO: Implement game exit logic
    }
}

// async function main(): Promise<void> {
//     const P = new Player('Player');
//     const G = new Game('New Game');
//     const W = new Weapon('AKM', 80, true, false);
//     const S = new Server('Singapore', 'Asia', ['127.0.0.1', '127.0.0.2', '127.0.0.3'], '127.0.0.1/48');

// }

// main();

const _G = new Game('New Game');
_G.StartGame();