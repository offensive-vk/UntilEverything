class Greeter {
    public greet() {
        console.log("Hello, " + this.getName());
    }
    private getAge(){
        console.log("Age: " + this.getAge);
    }
    protected getName() {
        return "Hello from Protected!";
    }
}

const g = new Greeter();
g.greet();
//g.getAge(); // Private 
class SpecialGreeter extends Greeter {
    public howdy() {
        // we can access protected member here
        console.log("Howdy, " + this.getName());
    }
}
const s = new SpecialGreeter();
s.greet(); // OK
s.howdy();
//s.getName(); // error