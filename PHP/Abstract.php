<?php 
echo "== Abstraction is PHP. == \n";
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
class ParentContainer extends Container {
    public function addItem($item){
        $this->items[] = array_push($this->items, $item);
    }
    /**
     * @abstract method getLength();
     */
    public function getLength(){
        echo "The Length of Items is : ".count($this->items);
        return count($this->items);
    }
    public function getArray() {
        return $this->items;
    }
    /**
     * @abstract method getItem($index);
     */
    function getItem($index){

    }
}
$num = new ParentContainer();
$num->addItem(5000);
$num->addItem(6000);
$num->addItem(7000);
$num->addItem(8000);
$num->getLength();
$arr = $num->getArray();
for($i = 0; $i < $num->getLength(); $i++){
    echo $arr[$i] ."";
}
?>