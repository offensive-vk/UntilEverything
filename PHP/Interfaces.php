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
$teacher = new Manish("Manish", 9001);
echo $teacher->name();

?>

