interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    [key: string]: any; // Index signature to allow additional properties
}
const teacher1: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    yearsOfExperience: 12,
    location: 'New York',
    contract: false // Additional property
};

console.log(teacher1);
