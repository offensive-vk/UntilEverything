// Anonymous Class <>
class __{
    static num = 100;
    static display(){
        console.log("\tNumber is : "+this.num);
    }
    display(){
        console.log("\tNon Static Display Function Called! ");
    }
    // display(){
    //     return "\tNon Static Display Function<arguments> Called!, ";
    // }
    constructor(){console.log("\tObject Created !!")}
}

const _ = new __();

__.display(); // Static
_.display(); // non static
// _.display(200);

// console.log(__.prototype.display(250));