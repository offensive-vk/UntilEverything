type Custom = string | boolean | unknown;
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

class University{
    public students: Array<Student>;
    public branch: string[];
    public departments: Array<Department>;
    public totalStudents: number | number[];
    public totalDepts: Array<number> | number;

    constructor(){
        this.students = [];
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
    countStudents(): string | Student[]{
        return `Total Number of Students in University : ${this.students.length}\n`;
    }
    countDepartments(): string | Student[]{
        return `Total Number of Departments in University : ${this.departments.length}\n`;
    }
    // displayData(id: number): Student[] {
    //     return this.students.filter((id) => this.students[id] === id);
    // }
}

var Manish: Student = {
    sname : "Manish",
    sid: 10001,
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
const Apex = new University();
Apex.addStudent(Manish);