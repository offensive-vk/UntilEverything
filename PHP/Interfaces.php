<?php 
interface Teacher{
    public function name();
    public function teach();
}

class Manish implements Teacher{

    public function __construct(public string $name, public int $id){}
    public function name(): string{
        return $this->name;
    }
    public function teach(): void{
        echo $this->name,` is Teaching ...`;
    }
}
class AnotherTeacher extends Manish implements Teacher{
    public function __construct($name, $id, public $isExpert){
        parent::__construct($name, $id);
        $this->isExpert = true;
    }
}
$teacher = new Manish("Manish", 9001);
echo $teacher->name();
$teacher->teach();


?>

