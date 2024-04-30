// Interface for Student
interface Student {
    sname: string;
    sid: number;
}

// Class for RegularStudent implementing Student interface
class RegularStudent implements Student {
    constructor(public sname: string, public sid: number) {}
}

// Class for SpecialStudent implementing Student interface
class SpecialStudent implements Student {
    constructor(public sname: string, public sid: number) {}
}

// Function to fetch student data using promises
function fetchStudentData(studentId: number): Promise<Student> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (studentId === 123) {
                resolve(new RegularStudent("Rohan", 123));
            } else if (studentId === 456) {
                resolve(new SpecialStudent("Krishna", 456));
            } else {
                reject(new Error("Student data not found"));
            }
        }, 2500);
    });
}

// Asynchronous function to fetch an array of students
async function fetchStudentArray(ids: number[]): Promise<Array<Student>> {
    const studentPromises = ids.map(fetchStudentData);
    const students = await Promise.all(studentPromises);
    return students;
}

// Entry point
(async () => {
    try {
        const studentIds = [123, 456];
        const students = await fetchStudentArray(studentIds);

        console.log("Fetched Students:");
        students.forEach(student => {
            console.log("Student Name:", student.sname, "Student ID:", student.sid);
            if (student instanceof RegularStudent) {
                console.log("Student Type: Regular");
            } else if (student instanceof SpecialStudent) {
                console.log("Student Type: Special");
            }
        });
    } catch (error) {
        console.error("Error:", error);
    }
})();
export { };