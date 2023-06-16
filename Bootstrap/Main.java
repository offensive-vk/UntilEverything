package Bootstrap;
public class Main{
    class Kid{
        private static final String name = "Vedansh";
        public Kid(){
            System.out.println(name);
        }
    }
    public static void main(String[] args) {
        Kid bruh = new Kid();
        System.out.println(bruh.name);
    }
}
