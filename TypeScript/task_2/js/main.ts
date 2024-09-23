interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Teacher {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }

    toString(): string {
        return 'Teacher';
    }
}

class Director {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Having a break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }

    toString(): string {
        return 'Director';
    }
}

function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

function isDirector(employee: DirectorInterface | TeacherInterface): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: DirectorInterface | TeacherInterface): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

function teachClass(todayClass: string): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else {
        return 'Teaching History';
    }
}

const director = new Director();
const teacher = new Teacher();

console.log(executeWork(createEmployee(200))); // Output: Getting to director tasks
console.log(executeWork(createEmployee(1000)));

console.log(createEmployee(200).toString()); // Output: Teacher
console.log(createEmployee(1000).toString()); // Output: Director
console.log(createEmployee('$1000').toString()); // Output: Director

console.log(teachClass('Math')); // Output: Teaching Math
console.log(teachClass('History')); // Output: Teaching History
