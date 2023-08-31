<?php 
interface Teacher{
    public function getName();
    public function teach();
}

class Manish implements Teacher{

    public function __construct(public string $name, public int $id){}
    public function getName(): string{
        return $this->name;
    }
    public function teach(): void{
        echo $this->name,` is Teaching ...`;
    }
}
class AnotherTeacher extends Manish implements Teacher{
    public $isExpert = false;
    public function __construct($name, $id, $isExpert){
        parent::__construct($name, $id);
        $this->isExpert = true;
    }
    
}
$teacher = new Manish("Manish", 9001);
echo $teacher->getName();
$teacher->teach();

$another = new AnotherTeacher("Suresh",45661 ,false);
$another
?>

