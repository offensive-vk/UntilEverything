//1. Creating object by new Object() constructor.

var Student = new Object();
Student.name = 'Manish';
Student.rollno = '0235';
Student.age = 23;

//2. Creating object assigning them to a variable
const Cars = {
    brand: 'Audi',
    model: 'RS6',
    cost: 9032001
};

//3. Creating object by a function
function Teacher(name, subject, salary) {
    this.name = name;
    this.subject = subject;
    this.salary = salary;
}

// Creating a variable and calling the function
var Teacher1 = new Teacher('Rakesh', 'Maths', 12000);

// Showing data
console.log(Teacher1.name)
console.log(Teacher1.subject)
console.log(Teacher1.salary);

// Complete object
console.dir(Teacher1);