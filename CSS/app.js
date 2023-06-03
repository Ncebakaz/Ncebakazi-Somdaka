console.log("Hello world!");
console.log("let's code guys");

window.alert("we gotta code fellas");

// A variable is a container for storing data
//A variable behaves as if it was the value that it contains

// two steps:
// 1. Declaration (var, let, const)
//2. Assignment (= assignment operator)

let firstName = "Kazi"; // string
age = 21; // numbers
let student = false; // booleans

age = age + 1;

console.log(age);
console.log("Hello", firstName);
console.log("Enrolled", student);

document.getElementById("p1").innerHTML = "Hello" + firstName;
document.getElementById("p2").innerHTML = "You are" + age + "years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;

/*arithmetic expression is a combination of...
operands (values, variables, etc.)
operators (+ - * / %)
that can be evaluated to a value
ex. y = x + 5;

*/

let students = 21;

//students = students + 1;
//students = students -1;
//students = students * 2;
//students = students / 2;
//let extraStudents = students % 2;

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;

/*
operator precedence
1. parenthesis()
2. exponents
3. multiplication & division
4. addition & subtraction
 */

let result = 1+2*(3+4);

console.log(result);

console.log(extraStudents);

// how to accept user input

// Easy WAY with a window prompt

let username = window.prompt("what's your name?");
//console.log(username);

// DIFFICULT WAY HTML textbox

document.getElementById("myButton").onclick = function(){
  username = document.getElementById("myText").ariaValueMax;
  console.log(username);
  document.getElementById("myLabel").innerHTML = "Hello" + username;
}

// Type Conversion = change the data type of a value to another
//                 (String, number, booleans)
/*
let age = window.prompt("How old are you?");

console.log(typeof age);
age = Number(age);
age += 1;

console.log("Happy birthday! You are", age, "years old");
*/

let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("pizza");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

//const = a variable that cant be changed

const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

//PI = 420.69;

circumference = 2*PI*radius;

console.log("The circumference is:", circumference);

// Math = An intrinsic object that provides basic mathematics functionality and constants.

let x = 3.14;
let y = 5;
let z = 9;
let maximum;
let minimum;

//x = Math.round(x);
//x = Math.floor(x);
//x = Math.ceil(x);
//x = Math.pow(x, 2);
//x = Math.sqrt(x);
//x = Math.abs(x);
//maximum = Math.max(x, y, z);
//minimum = Math.min(x, y, z);
x = Math.PI;

console.log(maximum);

// 

let a;
let b;
let c;
/*
a = window.prompt("Enter side A");
a = Number(a);

b = window.prompt("Enter side B");
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) +Math.pow(b, 2));
*/
console.log("side c:", c);



