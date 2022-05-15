//The global method Number() can convert strings to numbers.

let pi = "3.14";
console.log(pi, typeof pi);
pi = Number("3.14");
console.log(pi, typeof pi);

pi = String(3.14);
console.log(pi, typeof pi);

/*If the variable cannot be converted, 
it will still become a number, but with the value NaN (Not a Number):*/
pi = Number("üç.ondört"); 
console.log(pi, typeof pi);// NAN 'number'

pi = Number(true);
console.log(pi, typeof pi);
pi = Number(false);
console.log(pi, typeof pi);

pi = String(true);
console.log(pi, typeof pi);
pi = String(false);
console.log(pi, typeof pi);

pi = (3.14).toString();
console.log("pi:",pi,typeof pi);


let value;
value = [1,2,3];
console.log(value);
value = String([1,2,3]);
console.log(value);
