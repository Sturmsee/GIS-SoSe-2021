"use strict";
//Aufgabe 1
/*
function a1(): void {
    let x: string = "Alles";
    console.log(x);
    func1();
    console.log("Logo!");
}

//a1();

function func1(): void {
    console.log("Klar?");
}
*/
/*
A)
a1 gibt den string x mit dem Wert "alles" in der console aus und führt anschließend die Funktion func1 aus
die Funktion func1 gibt in der Konsole "klar?" aus.
insgesamt wird "Alles Klar? Logo!" in der Konsole ausgegeben

B)
zu allererst wird die funktion a1 initialisiert und ausgeführt. der string x wird sofort anschließend initialisiert.
nun wird x ausgegeben und die funktion func1 wird initialisiert und ausgeführt.
dabei wird der string "klar?" in der konsole ausgegeben. zum schluss folgt noch der "Logo!" in der Konsole, da func1 abgeschlossen ist.

*/
// C)
/*
function func2(): void {
    console.log("Gute!");
}

function b1(): void {
    let y: string = "Alles";
    console.log(y);
    func2();
    console.log(y);
    func1();
    console.log(y);
    console.log("Logo!");
}

//b1();
*/
//Aufgabe 2
/* der Code initialisiert die Funktion a2. Die Funktion initialisiert die Variable i mit dem nummerischen Wert 9.
Anschließend wird a2 solange den aktuellen Wert von i ausgeben, bis dieser in Schritten von -1 den Wert 0 erreicht bzw wird die letzte Ausgabe 1 sein. */
function a2() {
    let i = 9;
    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}
//a2();
//Aufgabe 3
/*
function a3(): void {
    let i: number = i;

    do {
        console.log(i);
        i = i - 1;
    } while ( i < 0);
}

function func3(): void {
    console.log("Gute!");
}

function b2(): void {
    let y: string = Alles";
    console.log(y);
    func2();
    console.log(y)
    func1();
    console.log("y");
    console.log("Logo!");
}
*/
//Aufgabe 4
let x = "Hallo";
/*
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);
*/
function func1(y) {
    y = "Bla";
    console.log(y);
}
/*
function func2 (): void{
    let x: string = "Blubb";
    console.log(x);
}
*/
function func3() {
    x = "Test";
}
/*
 A)
 die variable x wurde doppelt deklariert. im bestfall wird das programm ausgeführt, aber ab der funktion func2 wird x als Blubb ausgegeben und nicht mehr als Hallo.
 Im schlimmsten fall wird das programm gar nicht erst ausgeführt. die bessere möglichkeit wäre es die variable in func2 umzubennen.
 B)
 Normale Variablen sind ein speicherort für zahlen oder buchstabenwerte.
 Währenddessen ist eine funktion eine möglichkeit neben auch weitere befehlen zwischenzuspeichern und immer wieder aufzurufen.
 auf diese weise kann man viel code sparen und ein übersichtlicheres programm schaffen und da auch variable stets anpassbar sind,
 kann man ein flexibles programm schreiben und muss nicht alles hardcoden.
 Variable lassen sich auch aufteilen in Globale und lokale Variablen und übergangsparameter.
 Globale variable lassen sich von allen befehlen und funktionen der datei und seiner nachfahren aufrufen. Lokale variablen allerdings sind auf ihren deklarationsort beschränkt.
 eine variable einer funktion ist auch nur in dieser aufrufbar.
 Übergangsparameter sind variable, welche von einer funktion in die nächste überreicht werden.
 sie sind normalerweise lokal angelegt und lassen sich deshalb auch nur in den betroffenen funktionen aufrufen.
 */
//Aufgabe 5
function multiply(num1, num2) {
    return num1 * num2;
}
function max(para1, para2) {
    if (para1 > para2) {
        return para1;
    }
    else {
        return para2;
    }
}
function count() {
    let counter = 1;
    let sum = 0;
    do {
        sum = sum + counter;
        counter++;
        console.log(sum);
    } while (counter <= 100);
}
function random() {
    for (let index = 0; index < 10; index++) {
        console.log(Math.floor(Math.random() * 101));
    }
}
function factorial(n) {
    let countdown = 1;
    let sum = 1;
    if (n < 1) {
        return 1;
    }
    else {
        do {
            sum = sum * countdown;
            countdown++;
        } while (n >= countdown);
        return sum;
    }
}
function leapyears(year) {
    do {
        if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
            console.log(year + " ist ein Schaltjahr");
        }
        year++;
    } while (year < 2022);
}
/*
console.log(multiply( 7, 68));
console.log(max( 15, 20));
count();
random();
console.log(factorial(9));
leapyears(1900);
*/
//Aufgabe 6
function raute() {
    let counter = 0;
    let zeichen = "#";
    do {
        console.log(zeichen);
        zeichen = zeichen + "#";
        counter++;
    } while (counter < 7);
}
function fizzBuzz() {
    let counter = 1;
    do {
        if (counter % 3 == 0) {
            console.log("Fizz");
        }
        else {
            if ((counter % 5 == 0) && (counter % 3 != 0)) {
                console.log("Buzz");
            }
            else if ((counter % 5 == 0) && (counter % 3 == 0)) {
                console.log("FizzBuzz");
            }
            else {
                console.log(counter);
            }
        }
        counter++;
    } while (counter <= 100);
}
function chess() {
    let board = "";
    for (let index = 0; index <= 8; index++) {
        for (let index1 = 0; index1 < 4; index1++) {
            if (index % 2 == 0) {
                board += " " + "#";
            }
            else {
                board += "#" + " ";
            }
        }
        board += "\n";
    }
    console.log(board);
}
function chessModular(size) {
    let board = "";
    for (let index = 0; index <= size; index++) {
        for (let index1 = 0; index1 < size / 2; index1++) {
            if (index % 2 == 0) {
                board += " " + "#";
            }
            else {
                board += "#" + " ";
            }
        }
        board += "\n";
    }
    console.log(board);
}
//raute();
//fizzBuzz();
//chess();
chessModular(12);
//# sourceMappingURL=script.js.map