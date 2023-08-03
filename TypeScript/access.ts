// class Greeter {
//     public greet() {
//         console.log("hi!");
//     }
// }



class Greeter {
    public greet() {
        console.log("Hello, " + this.getName());
    }
    private getAge(){
        console.log("Age: " + this.getAge);
    }
    protected getName() {
        return "hi";
    }
}
const g = new Greeter();
g.greet();
class SpecialGreeter extends Greeter {
    public howdy() {
        // OK to access protected member here
        console.log("Howdy, " + this.getName());
    }
}
const s = new SpecialGreeter();
s.greet(); // OK
//s.getName(); // error