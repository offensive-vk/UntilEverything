package Bootstrap;
public class Main extends Thread{

    public static void main(String[] args) throws Exception{
        Exception rx = new Exception();
        while(true){
            throw new RuntimeException("oops bruv , sorry , can't go on now :)", rx);
        }
    }
    protected final class Small{
        protected void getDefault(){
        }
    }
}