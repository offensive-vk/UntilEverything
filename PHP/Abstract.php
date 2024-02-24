<?php 
echo "== Abstraction in PHP. == \n";

/**
 * @abstract class Container 
 * @global Container class for all child classes.
 */
abstract class Container {
    /**
     * @code Simple Class Members.
     */
    protected $items = [];
    protected static $className = 'Container';

    /**
     * @abstract method addItem();
     */
    abstract function addItem($item);

    /**
     * @abstract method getLength();
     */
    abstract function getLength(): int;

    /**
     * @abstract method getItem($index);
     */
    abstract function getItem(int $index);
}

class ParentContainer extends Container {
    public function __construct() {
        $this->items = [];
    }

    public function addItem($item) {
        array_push($this->items, $item);
    }

    /**
     * @abstract method getLength();
     */
    public function getLength(): int {
        return count($this->items);
    }
    /**
     * @return array
     */
    public function getArray() {
        return $this->items;
    }

    /**
     * @abstract method getItem($index);
     */
    function getItem(int $index) {
        return $this->items[$index];
    }
}
interface IContainer {
    function get(): void;
    function set(): void;
}

$num = new ParentContainer();
$num->addItem(5000);
$num->addItem(6000);
$num->addItem(7000);
$num->addItem(8000);

$arr = $num->getArray();
for($i = 0; $i < $num->getLength(); $i++){
    echo $arr[$i] . " ";
}
?>