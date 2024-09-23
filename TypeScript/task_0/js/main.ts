interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Mike',
    lastName: 'Spencer',
    age: 45,
    location: 'Paris'
};

const student2: Student = {
    firstName: 'Maria',
    lastName: 'Garcia',
    age: 30,
    location: 'Rome'
};

const studentsList: Student[] = [student1, student2];

console.log(studentsList);
