var puts = console.log;
interface Server{
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
class Game{
    public Players: Array<Player> | null = [];
    public Weapons: Array<Weapon> | null = [];
    public Servers: Array<Server> | null = [];

    Game(){
        this.Players = [];
        this.Weapons = [];
        this.Servers = [];
    }
    public StartGame(): void{
        
    }
    public LoadGame(): void{
        
    }
    public SaveGame(): void{
        
    }    
    public ExitGame(): void{
        
    }
}

class Player{
    public static username: string;
    public static health: number;
    public static weapon: number | null;

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
    public Attack(): void{

    }
    public StopAttack(): void{
        
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
}