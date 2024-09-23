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

const teacher1: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
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

console.log(director1);
