//Defining object
let person = {
    firstName: "Zeynep",
    age: 25
}
console.log(person);

let people = [
    {
        firstName: "Zeynep",
        age: 25,
        hobbies: ["cycling", "studying", "ice cream"]
    },
    {
        firstName: "Ayhan",
        age: 59
    }
]

console.log(people);

let date = new Date();
console.log(date);
console.log(typeof date);

function merhaba() {
    console.log("Merhaba");
}
merhaba();

let x = 10;
let y = x;

console.log(x, y);
x = 20;
console.log(x, y);//Numbers are primitive datas

var xx = [1, 2, 3];
var yy = xx;
console.log(xx, yy);//Arrays are by reference
xx.push(4);
console.log(xx, yy);



/*var,let,const */

//var
var name1 = "Zeynep Kucur";
console.log(name1);
var name1="Zeynep";
console.log(name1);

//let. Can not redeclare
let name2 ="Zeynep Kucur";
console.log(name2);
name2="Zeynep";
console.log(name2);

// //const 
// const name3 = "Zeynep Kucur";
// console.log(name3);
// name3="Zeynep"; //Uncaught typeError: Assignment to constant variable.

// const v;//'const' declarations must be initialized.
// v=1;
// console.log(v);//Uncaught SyntaxError: Missing initializer in const declaration

