<?php 
echo "== Abstraction is PHP. ==";
/**
 * @abstract class Container 
 * @global Container class for all child classes.
 */
abstract class Container{
    private $items = [];
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

?>