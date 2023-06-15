package Bootstrap;
public class Main{
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        MyRunnable run = new MyRunnable(new Runnable());
        thread.start();
        for(int i = 0; i < 9; i++) {
            System.out.println("Count "+i);
        }
    }
}
class MyThread extends Thread {
    @Override
    public void run() {
        for(int i = 0; i < 9; i++) {
            System.out.println("Count Thread"+i*989210);    
        }
        System.out.println("MyThread is running");
        // sleep(2000, 1000);
    }
}
class MyRunnable implements Runnable {
    public void run(){
        System.out.println("Count");    
    }
}