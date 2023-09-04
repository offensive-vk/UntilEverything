var puts = console.log;
class Game{
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

        puts(`Player Name: ${Player.username}`);
        puts(`Player Health: ${Player.health}`);
        puts(`Player Weapon: ${Player.weapon}`);

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

    Weapon(_name: string, damage: number , recoil: number , isAuto: boolean , isSniper: boolean){
        this.WeaponName = _name;
        this.Damage = damage;
        this.isAuto = isAuto;
        this.isSniper = isSniper;
        this.Recoil = recoil;
    }
    public showWeapon(): void {
        puts(`Weapon Name: ${this.WeaponName}`);
        puts(`Weapon Damage: ${this.Damage}`);
        puts(`Weapon Recoil: ${this.Recoil}`);
        if(this.isAuto == true && this.isSniper == false){
            puts(`Weapon Type: Assault Rifle `);
        }
        else{
            puts(`Weapon Type: Sniper Rifle .`);
        }
    }
}