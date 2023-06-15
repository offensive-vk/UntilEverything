package Bootstrap;
public class Main{
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start();
        for(int i = 0; i < 9; i++) {
            System.out.println("Count "+i);
            thread.wait();
        }
    }
}
class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("MyThread is running");
        // sleep(2000, 1000);
    }
}