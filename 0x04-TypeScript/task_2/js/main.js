"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDirector = isDirector;
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Working from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to director tasks";
    };
    return Teacher;
}());
function createEmployee(income) {
    var salary = Number(income);
    if (salary < 500) {
        return new Teacher();
    }
    return new Director();
}
function isDirector(employee) {
    if (employee === Director) {
        return true;
    }
    return false;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        var employee_1 = new Director();
        return employee_1.workDirectorTasks();
    }
    else {
        var employee_2 = new Teacher();
        return employee_2.workTeacherTasks();
    }
}
console.log(executeWork(createEmployee("200")));
