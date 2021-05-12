//Aufgabe 1
//A)
function min(...array: number[]): number {
    let small: number = array[0];
    for (let index: number = 0; index < array.length; index++) {
        if (small > array[index]) {
            small = array[index];
        }
    }
    return small;
}

console.log(min(12, 3, 3, 2, 66, 4, 3, 2, 1));

//B)
function isEven(zahl: number): boolean {
    let even: boolean;
   /* if (zahl % 2 == 1)  {
        even = false;
    }
    else {
        even = true;
    }
    return even; */

    if (zahl == 0) {
        return true;
    }
    if (zahl == 1) {
        return false;
    }
    even = isEven(zahl - 2);
    return even;
}

console.log(isEven(66));

/* Bei -1 ist das Ergebnis positiv obwohl die Zahl ungerade ist. Eine Möglichkeit das zu umgehen wäre in fall von negativen Zahlen einen Zwischenschritt einzubauen,
 welcher die Zahlen vorher mit -1 multipliziert um mit positiven Zahlen zu rechnen, da dies nichts am eigentlichen Betrag der Zahlen ändern würde. */

function isEvenFix(zahl: number): boolean {
    let even: boolean;
    if (zahl < 0) {
        zahl = zahl * -1;
    }

    if (zahl == 0) {
        return true;
    }
    if (zahl == 1) {
        return false;
    }
    even = isEven(zahl - 2);
    return even;
}

console.log(isEvenFix(-49));

//C)
interface StudentInfo {
    firstName: string;
    lastName: string;
    age: number;
    course: string;
} 
//Erstellen und ausgeben der Studierenden
let student1: StudentInfo = {firstName: "Hannes", lastName: "Regens", age: 21, course: "WING"};
let student2: StudentInfo = {firstName: "Georg", lastName: "Schmitt", age: 26, course: "OMB"};
let student3: StudentInfo = {firstName: "Sabine", lastName: "Müller", age: 18, course: "MKB"};

let studentInfoArray: StudentInfo[] = [student1, student2];
studentInfoArray[studentInfoArray.length] = ({ firstName: "Simon", lastName: "Butterbach", age: 24, course: "MIB" });
studentInfoArray[studentInfoArray.length] = student3;
//Alternativ
studentInfoArray.push({firstName: "Luisa", lastName: "Frank", age: 19, course: "MIB"});

console.log(studentInfoArray[3].course);

function showInfo(student: StudentInfo): string {
        return student.lastName + ", " + student.firstName + ": " + student.course ;
}

for (let student of studentInfoArray) {
    console.log(showInfo(student));
}

class Student {
    firstName: string;
    lastName: string;
    age: number;
    course: string;
    
    constructor(firstName: string, lastName: string, age: number, course: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.course = course;
    }
    showInfo(): void {
        console.log("Name: " + this.firstName + " " + this.lastName + ", " + "Kurs: " + this.course + ", " + "Alter: " + this.age);
    }
} 

let student1Alt: Student = new Student("Greg", "Schneider", 19, "OMB");
let student2Alt: Student = new Student("Fabienne", "Reber", 20, "MKB");
let student3Alt: Student = new Student("Nils", "Holgerson", 23, "MIB");

let studentArray: Student[] = [student1Alt, student2Alt, student3Alt];
studentArray.push(new Student("Hanna", "Zügel", 22, "OMB" ));

for (let studentAlt of studentArray) {
    studentAlt.showInfo();
}



//Aufgabe 2
//A)
function backwards(array: string[]): string {
    var bArray: string[] = [];
    var arraySum: string = array[array.length] + " ";
    for (let index: number = 0; index <= array.length; index++) {
        bArray[index] = array[array.length - index];
        arraySum += bArray[index] + " "; 
    }
    return arraySum;
}

function backwardsFix(array: number[]): number[] {
    let reversed: number[] = [];
    for (let index: number = 0; index < array.length; index++) {
        reversed.push(array[array.length - index - 1]);
    }
    return reversed;
}

console.log(backwardsFix([1, 2, 3, 4, 5, 6, 7]));

//B)
function join(array1: string[], array2: string[]): string[] {
    for (let index: number = 0; index < array2.length; index++) {
        array1[array1.length] = array2[index];
    }
    return array1;
}
//alternative
function joinAlt(array1: number[], array2: number[]): number[] {
    for (let index: number = 0; index < array2.length; index++) {
        array1.push(array2[index]);
    }
    return array1;
}
console.log(joinAlt([2, 3, 44, 69], [12, 242, 42, 1]));

console.log(join(["Fischers ", "Fritz "], ["fischt ", "frische ", "Fische"]));

//C)
function split(arr1: number[], index1: number, index2: number): number[] {
    var between: number[] = [];
    if (index1 < index2) {
         for (let index: number = 0; index < index2 - index1; index++) {
            between[index] = arr1[index1 + index];
        }
    } else {
        for (let index: number = 0; index < index1 - index2; index++) {
            between[index] = arr1[index2 + index];
        }
    }
    return between;
}
console.log(split(joinAlt([666, 24, 5], [89, 72, 64]), 2, 5));


