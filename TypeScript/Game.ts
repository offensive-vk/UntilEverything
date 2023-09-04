class Game{

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
}

class Weapon{

}