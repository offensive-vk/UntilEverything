// Define an abstract class 'Person' with common properties and a method
abstract class Person {
    protected name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Abstract method for displaying information
    abstract displayInfo(): void;

    // Getters and setters
    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }
}

// Define a concrete class 'Student' that extends 'Person'
class Student extends Person {
    private studentId: number;

    constructor(name: string, age: number, studentId: number) {
        super(name, age);
        this.studentId = studentId;
    }

    displayInfo(): void {
        console.log(`Student - Name: ${this.getName()}, Age: ${this.getAge()}, Student ID: ${this.studentId}`);
    }

    // Additional method specific to students
    getStudentId(): number {
        return this.studentId;
    }
}

// Define another concrete class 'Teacher' that extends 'Person'
class Teacher extends Person {
    private subject: string;

    constructor(name: string, age: number, subject: string) {
        super(name, age);
        this.subject = subject;
    }

    displayInfo(): void {
        console.log(`Teacher - Name: ${this.getName()}, Age: ${this.getAge()}, Subject: ${this.subject}`);
    }

    // Additional method specific to teachers
    getSubject(): string {
        return this.subject;
    }
}

// Usage of the classes
const student = new Student("Alice", 18, 101);
const teacher = new Teacher("Mr. Smith", 35, "Math");

student.displayInfo();
teacher.displayInfo();

console.log(`Student ID: ${student.getStudentId()}`);
console.log(`Subject: ${teacher.getSubject()}`);
