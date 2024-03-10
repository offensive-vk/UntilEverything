<?php

class Animal {
    public function __construct() {
        echo "Animal constructor called\n";
    }

    public function __destruct() {
        echo "Animal destructor called\n";
    }

    public function speak() {
        echo "Animal speaks\n";
    }
}

class Dog extends Animal {
    public function __construct() {
        parent::__construct();
        echo "Dog constructor called\n";
    }

    public function __destruct() {
        echo "Dog destructor called\n";
        parent::__destruct();
    }

    public function bark() {
        echo "Dog barks\n";
    }
}

class Labrador extends Dog {
    public function __construct() {
        parent::__construct();
        echo "Labrador constructor called\n";
    }

    public function __destruct() {
        echo "Labrador destructor called\n";
        parent::__destruct();
    }

    public function fetch() {
        echo "Labrador fetches\n";
    }
}

// Creating an instance of Labrador
$labrador = new Labrador();

// Calling methods
$labrador->speak();
$labrador->bark();
$labrador->fetch();

