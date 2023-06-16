package Bootstrap;

import java.io.IOError;

public class Main{

    public static void main(String[] args) {
        Kid bruh = new Kid();
        bruh.display();
    }
}
class Kid{
        private static final String name = "Vedansh";
        public Kid(){
            System.out.println(name);
        }
        protected void display(){
            System.out.println("The name is " + name);
            throw new IOError(null);
        }
}