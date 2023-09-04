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
    
    public PrimaryWeapon(): void{
        
    }
}