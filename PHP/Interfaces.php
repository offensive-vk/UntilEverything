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
    private $salary = 0;
    public function __construct($name, $id, $Expert){
        parent::__construct($name, $id);
        $this->isExpert = $Expert;
        $this->salary += 0;
    }
    public function getSalary(): void{
        echo "Your Salary: ", $this->salary + (30*8000-5000);
    }
}
// Parent Class
$teacher = new Manish("Manish", 9001);
echo $teacher->getName();
$teacher->teach();

// Child Class:
$another = new AnotherTeacher("Suresh",45661 ,false);
$another->teach();
echo $another->getName();

?>

