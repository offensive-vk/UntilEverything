var puts = console.log;
interface _Server{
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
        public country: string,
        public continent: string,
        public address: Array<string> | string = [],
        public range: Array<string> = [],
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
            console.log(`${this.address} is online.`);
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
class Game{
    public Players: Array<Player> | null = [];
    public Weapons: Array<Weapon> | null = [];
    public Servers: Array<Server> | null = [];

    Game(){
        this.Players = [];
        this.Weapons = [];
        this.Servers = [];
    }
    public async StartGame(): Promise<void>{
        const Servers = new Server();
        const Weapons = new Weapon();
        const Players = new Player();

        Servers.wake();
        Weapons.SpawnWeapon();
        Players.getReady();

    }
    public async LoadGame(): Promise<void>{
        
    }
    public async SaveGame(): Promise<void>{
        
    }    
    public async ExitGame(): Promise<void>{
        
    }
}

class Player{
    public static username: string;
    public static health: number;
    public static weapon: Weapon | null;

    Player(username: string){
        Player.username = username;
        Player.health = 100;
        Player.weapon = null;
    }
    public getPlayer(): void{
        puts(`\n===============================\n`);
        puts(`\n:: Showing Player Details ::\n `);
        puts(`Player Name: ${Player.username}`);
        puts(`Player Health: ${Player.health}`);
        puts(`Player Weapon: ${Player.weapon}`);
        puts(`\n===============================\n`);

    } 
    public getReady(): void{
        puts(`${Player.username} is ready .`);
    }
    public Attack(): void{
        setTimeout(()=>{
            puts(`Attacks Incoming from ${Player.username}... `);
        }, 2500);
    }
    public StopAttack(): void{
        setTimeout(()=>{
            puts(`Stopping All Attacks from ${Player.username}... `);
        }, 2500);
    }
}

class Weapon{
    public WeaponName: string;
    public Damage: number;
    public Recoil?: number;
    public isAuto: boolean | undefined;
    public isSniper: boolean | undefined;

    Weapon(_name: string, damage: number , recoil?: number , isAuto: boolean , isSniper: boolean){
        this.WeaponName = _name;
        this.Damage = damage;
        this.isAuto = isAuto;
        this.isSniper = isSniper;
        this.Recoil = recoil;
    }
    public showWeapon(): void {
        puts(`\n===============================\n`);
        puts("\n :: Showing Weapon Details ::\n");
        puts(`Weapon Name: ${this.WeaponName}`);
        puts(`Weapon Damage: ${this.Damage}`);
        puts(`Weapon Recoil: ${this.Recoil}`);
        if(this.isAuto == true && this.isSniper == false){
            puts(`Weapon Type: Assault Rifle `);
        }
        else if(this.isAuto == false && this.isSniper == true){
            puts(`Weapon Type: Sniper Rifle .`);
        }
        else{
            puts(`Weapon Type: Unknown `);
        }
        puts(`\n===============================\n`);
    }
    public SpawnWeapon(): void {
        setTimeout(() => {
            this.showWeapon();
            puts(`Spawning All Weapons... \n Please Wait .. `);
            puts(`${this.WeaponName} has been spawned ... `);
        }, 3500);
    }
}

async function main(): Promise<void> {
    const P = new Player();
    const G = new Game();
    const W = new Weapon();
    const S = new Server();

}

main();