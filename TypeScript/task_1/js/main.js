var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var Student = StudentClass;
var studentOne = new Student('John', 'Doe');
var teacher1 = {
    firstName: 'Johnny',
    lastName: 'Bluster',
    fullTimeEmployee: true,
    yearsOfExperience: 12,
    location: 'New York',
    contract: false // Additional property
};
var director1 = {
    firstName: 'Julia',
    lastName: 'Elray',
    fullTimeEmployee: true,
    yearsOfExperience: 18,
    location: 'New York',
    numberOfReports: 4
};
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ".").concat(lastName);
};
console.log(studentOne.displayName()); // Output: John
console.log(studentOne.workOnHomework()); // Output: Currently working
console.log(director1);
console.log(printTeacher(teacher1.firstName, teacher1.lastName));
