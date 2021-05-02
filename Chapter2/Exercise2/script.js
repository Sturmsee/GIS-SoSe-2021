"use strict";
//Aufgabe 1
//A)
function min(array) {
    let small = array[0];
    for (let index = 0; index < array.length; index++) {
        if (small > array[index]) {
            small = array[index];
        }
    }
    return small;
}
console.log(min([12, 3, 3, 2, 66, 4]));
//B)
function isEven(zahl) {
    let even;
    if (zahl % 2 == 1) {
        even = false;
    }
    else {
        even = true;
    }
    return even;
}
console.log(isEven(1));
/* Bei -1 ist das Ergebnis positiv obwohl die Zahl ungerade ist. Eine Möglichkeit das zu umgehen wäre in fall von negativen Zahlen einen Zwischenschritt einzubauen,
 welcher die Zahlen vorher mit -1 multipliziert um mit positiven Zahlen zu rechnen, da dies nichts am eigentlichen Betrag der Zahlen ändern würde. */
//C)
/* interface Student {
    firstName: string;
    lastName: string;
    age: string;
    course: string;
}

var student1: Student = {firstName: "Hannes", lastName: "Regens", age: "21", course: "WING"};
var student2: Student = {firstName: "Georg", lastName: "Schmitt", age: "26", course: "OMB"};
var student3: Student = {firstName: "Sabine", lastName: "Müller", age: "18", course: "MKB"};


console.log(showInfo(student1));
console.log(showInfo(student2));
console.log(showInfo(student3));
*/
class Student {
    constructor(firstName, lastName, age, course) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.course = course;
    }
    showInfo(student) {
        return student.lastName + ", " + student.firstName + ": " + student.course;
    }
}
//Aufgabe 2
//A)
function backwards(array) {
    var bArray = [];
    var arraySum = array[array.length] + " ";
    for (let index = 0; index <= array.length; index++) {
        bArray[index] = array[array.length - index];
        arraySum += bArray[index] + " ";
    }
    return arraySum;
}
console.log(backwards(["ad profundis", "Kartoffelsack", "Biene", "Dreck"]));
//B)
function join(array1, array2) {
    for (let index = 0; index < array2.length; index++) {
        array1[array1.length] = array2[index];
    }
    return array1;
}
console.log(join(["Fischers ", "Fritz "], ["fischt ", "frische ", "Fische"]));
//# sourceMappingURL=script.js.map