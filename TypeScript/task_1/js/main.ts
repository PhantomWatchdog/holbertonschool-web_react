interface Student {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClass;
}

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    [key: string]: any; // Index signature to allow additional properties
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() {
        return 'Currently working';
    }

    displayName() {
        return this.firstName;
    }
}

const Student: StudentConstructor = StudentClass;

const studentOne = new Student('John', 'Doe');

const teacher1: Teacher = {
    firstName: 'Johnny',
    lastName: 'Bluster',
    fullTimeEmployee: true,
    yearsOfExperience: 12,
    location: 'New York',
    contract: false // Additional property
};

const director1: Directors = {
    firstName: 'Julia',
    lastName: 'Elray',
    fullTimeEmployee: true,
    yearsOfExperience: 18,
    location: 'New York',
    numberOfReports: 4
};

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}.${lastName}`;
};

console.log(studentOne.displayName()); // Output: John
console.log(studentOne.workOnHomework()); // Output: Currently working
console.log(director1);
console.log(printTeacher(teacher1.firstName, teacher1.lastName));
