<?php 
echo "== Abstraction is PHP. ==";
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
    abstract function getLength();
    /**
     * @abstract method getItem($index);
     */
    abstract function getItem($index);
}
class NumberContainer extends Container {
    function addItem($item){
        $this->items[] = array_push($this->items, $item);
    }
    /**
     * @abstract method getLength();
     */
    function getLength(){
        echo "The Length of Items is : ".count($this->items);
        return count($this->items);
    }
    /**
     * @abstract method getItem($index);
     */
    function getItem($index){

    }
}
?>