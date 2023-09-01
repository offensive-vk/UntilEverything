<?php 
class Counter {
    private static $count = 0;

    public static function increment() {
        self::$count++;
    }

    public static function getCount() {
        return self::$count;
    }
}

// Using static properties and methods
Counter::increment();
Counter::increment();
Counter::increment();

echo "Count: " . Counter::getCount() . "\n"; // Outputs: Count: 3

// Inheritance with static properties and methods
class ChildCounter extends Counter {
    public static function incrementTwice() {
        parent::increment();
        parent::increment();
    }
}

ChildCounter::incrementTwice();

echo "Child Count: " . ChildCounter::getCount() . "\n"; // Outputs: Child Count: 5

?>
