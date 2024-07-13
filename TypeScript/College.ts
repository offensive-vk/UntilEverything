/**
 * @author Vedansh
 * @description This is a University Console Management System designed using TypeScript.
 */

const puts = console.log;
const tb = console.table;

interface Student {
    sname: string;
    sid: number | null;
    section: string | unknown;
    branch: string | boolean;
    isRegular: boolean;
    isHead?: boolean;
}
interface Department {
    name: string;
    identity: string | number | null;
    sections: string | Array<string>;
    totalStudents: number | undefined;
}
interface Teacher {
    uid: number | boolean | null;
    name: string;
    subjects: Array<string> | string;
    salary: number;
    sections: Array<string>;
}
interface HOD extends Teacher {
    post: Array<String>,
    isTeacher: boolean | null,
    isHOD: boolean | null,
}
class University {
    public static college: string = " University";
    public students: Array<Student>;
    public teachers: Array<Teacher>;
    public branch: Array<string> | string;
    public departments: Array<Department>;
    public totalStudents: Array<number> | number;
    public totalDepts: Array<number> | number;
    private HeadOfDept?: HOD | null;

    constructor(college: string) {
        University.college = college;
        this.greet();
        this.students = [];
        this.teachers = [];
        this.branch = [];
        this.totalStudents = [];
        this.totalDepts = [];
        this.departments = [];
        this.HeadOfDept = null;
    }
    addStudent(student: Student): void {
        this.students.push(student);
        puts(`-> ${student.sname} <${student.sid}> added to University.\n`);
    }
    addDepartment(dept: Department): void {
        this.departments.push(dept);
        puts(`-> ${dept.name} <${dept.identity}> added to University.\n`);
    }
    addTeacher(teacher: Teacher): void {
        this.teachers.push(teacher);
        puts(`-> ${teacher.name} <${teacher.uid}> added to University.\n`);
    }
    countStudents(): string | Student[] {
        return `Total Number of Students in University : ${this.students.length}\n`;
    }
    countTeachers(): string | Teacher[] {
        return `Total Number of Teachers in University : ${this.teachers.length}\n`;
    }
    countDepartments(): string | Department[] {
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
    public displayStudents(): Array<Student> {
        puts(`\n-> Displaying All Students in ${University.college} : \n`);
        return this.students;
    }
    public displayTeachers(): Array<Teacher> {
        puts(`\n-> Displaying All Teachers in ${University.college} : \n`);
        return this.teachers;
    }
    public displayDepartments(): Array<Department> {
        puts(`\n-> Displaying All Departments in ${University.college} : \n`);
        return this.departments;
    }
    protected greet(): void | undefined {
        puts(`\t ============================== \n`);
        puts(`\n Welcome to ${University.college} !\n`);
        return;
    }
    public addHOD(Head: HOD): void {
        this.HeadOfDept = Head;
        puts(`\n-> Assigned New Head of Department : ${Head.name} <${Head.uid}> \n`);
    }
}

// End of Class <University>
// Real Life Execution :

/* Students */
const Manish: Student = {
    sname: "Manish",
    sid: 10001,
    section: "BCA Full Stack",
    branch: "Computer Science",
    isRegular: true,
    isHead: true,
};
const Mahak: Student = {
    sname: "Mahak",
    sid: 10002,
    section: "BCA Full Stack",
    branch: "Computer Application",
    isRegular: true,
};
const Sourabh: Student = {
    sname: "Sourabh",
    sid: 10003,
    section: "BCA Data Science",
    branch: "Computer Science",
    isRegular: false,
};
var Del: Student = {
    sname: "DeleteMe",
    sid: 11,
    section: "XYZ",
    branch: " XYZ",
    isRegular: false,
}
/* Departments */
const BCA: Department = {
    name: "Bachelor of Computer Application",
    identity: "BCA-AU-0990",
    sections: ["Full Stack", "Data Science", "Cyber Security", "Android"],
    totalStudents: 100,
};
const BCom: Department = {
    name: "Bachelor of Commerce",
    identity: "B.COM-AU-0880",
    sections: "B.Com",
    totalStudents: 60,
};
/* Teachers */
const Jiya: Teacher = {
    name: "Jiya Ma'am",
    uid: 9001,
    subjects: ["DSA", "CA", "OS"],
    salary: 77000,
    sections: ["2nd Year", "BCA-A & B", "Ist Year - BCA"],
};
const Arti: Teacher = {
    name: "Arti Ma'am",
    uid: 9002,
    subjects: "English",
    salary: 90000,
    sections: ["2nd Year - BCA", "3rd Year - BCA"],
};
// Head of Department
const Head: HOD = {
    name: "Dr. Keshav Dev Gupta",
    post: ["HOD | Senior Assistant Professor"],
    subjects: ["PHP", "Java", "C/C++", "SQL"],
    sections: ["BCA", "MCA", "PGDCA", "B. Tech"],
    salary: 100000,
    uid: 1,
    isTeacher: true,
    isHOD: true,
};

const Apex = new University("Apex University");
Apex.addStudent(Manish);
Apex.addStudent(Mahak);

Apex.addStudent(Del);
puts(Apex.deleteStudent(11));

Apex.addDepartment(BCA);
Apex.addDepartment(BCom);

Apex.addTeacher(Jiya);
Apex.addTeacher(Arti);

Apex.addHOD(Head);

// puts(Apex.countStudents());
// puts(Apex.countDepartments());
// puts(Apex.displayStudents());
// puts(Apex.displayTeachers());
// puts(Apex.displayDepartments());

puts(`=========================`);
puts(`\n\t :: The End :: \n\t`);
export { };
/* The End */