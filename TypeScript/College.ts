/* 
*   @date: Aug, 22, 2023 | G
*   @author: Vedansh
*   @description: This is a University Console Management System designed using TypeScript.
*   @lang: TypeScript v 5.1.6
*/

type Custom = string | undefined| unknown;
const puts = console.log;

interface Student{
    sname: string;
    sid: number | null;
    section: string | unknown;
    branch: string | boolean;
    isRegular: boolean;
}
interface Department{
    name: string;
    identity: string | number | null;
    sections: string | Array<string>;
    totalStudents: number | undefined;
}
interface Teacher{
    uid: number | boolean | null;
    name: string;
    subjects: Array<string>;
    salary: number;
    sections: Array<string>;
}
class University{
    public static college: string = " University";
    public students: Array<Student>;
    public teachers: Array<Teacher>;
    public branch: Array<string> | string;
    public departments: Array<Department>;
    public totalStudents: Array<number> | number;
    public totalDepts: Array<number> | number;

    constructor(college: string){
        University.college = college;
        this.students = [];
        this.teachers = [];
        this.branch = [];
        this.totalStudents = [];
        this.totalDepts = [];
        this.departments = [];
    }
    addStudent(student: Student){
        this.students.push(student);
        puts(`-> ${student.sname} <${student.sid}> added to University.\n`);
    }
    addDepartment(dept: Department){
        this.departments.push(dept);
        puts(`-> ${dept.name} <${dept.identity}> added to University.\n`);
    }
    addTeacher(teacher: Teacher){
        this.teachers.push(teacher);
        puts(`-> ${teacher.name} <${teacher.uid}> added to University.\n`);
    }
    countStudents(): string | Student[]{
        return `Total Number of Students in University : ${this.students.length}\n`;
    }
    countDepartments(): string | Student[]{
        return `Total Number of Departments in University : ${this.departments.length}\n`;
    }
    deleteStudent(Id: number): string {
        const index = this.students.findIndex(student => student.sid === Id);
        if (index !== -1) {
            const deletedStudent = this.students.splice(index, 1)[0];
            return (`-> ${deletedStudent.sname} <${deletedStudent.sid}> removed from University.\n`);
        } else {
            return (`Student with ID ${Id} not found.\n`);
        }
    }

    deleteDepartment(Id: string): string {
        const index = this.departments.findIndex(dept => dept.identity === Id);
        if (index !== -1) {
            const deletedDept = this.departments.splice(index, 1)[0];
            return (`-> ${deletedDept.name} <${deletedDept.identity}> removed from University.\n`);
        } else {
            return (`Department with ID ${Id} not found.\n`);
        }
    }
    deleteTeacher(Id: number): string {
        const index = this.teachers.findIndex(dept => dept.uid === Id);
        if (index !== -1) {
            const deletedTeacher = this.teachers.splice(index, 1)[0];
            return (`-> ${deletedTeacher.name} <${deletedTeacher.uid}> removed from University.\n`);
        } else {
            return (`Teacher with UID ${Id} not found.\n`);
        }
    }
    displayStudents(): Student[] {
        return this.students;
    }
    protected greet(): void{
        puts(`\t ============================== \n`);
        puts(`\n Welcome to ${University.college} !\n`);
    }
}

var Manish: Student = {
    sname : "Manish",
    sid: 10001,
    section : "BCA Full Stack",
    branch: "Computer Science",
    isRegular: true,
};
var Mahak: Student = {
    sname : "Mahak",
    sid: 10002,
    section : "BCA Full Stack",
    branch: "Computer Science",
    isRegular: true,
};
var BCA: Department = {
    name: "Bachelor of Computer Application",
    identity : "BCA-AU-0990",
    sections: ["Full Stack", "Data Science", "Cyber Security", "Android"],
    totalStudents: 100,
};
var BCom: Department = {
    name: "Bachelor of Commerce",
    identity : "BCOM-AU-0880",
    sections: "B.Com",
    totalStudents: 60,
};
var Jiya: Teacher = {
    name: "Jiya Ma'am",
    uid: 9001,
    subjects: ["DSA","CA", "OS"],
    salary: 77000,
    sections: ["BCA-A", "BCA-B", "Ist Year - BCA"],
};
var Arti: Teacher = {
    name: "Jiya Ma'am",
    uid: 9001,
    subjects: ["DSA","CA", "OS"],
    salary: 77000,
    sections: ["BCA-A", "BCA-B", "Ist Year - BCA"],
};
// Real Life Execution :
const Apex = new University("Apex University");
Apex.addStudent(Manish);
Apex.addStudent(Mahak);

Apex.addDepartment(BCA);
Apex.addDepartment(BCom);

Apex.addTeacher(Jiya);
Apex.addTeacher(Arti);

puts(Apex.countStudents());
puts(Apex.countDepartments());

/* The End */