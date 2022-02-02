// 01 - Number
let integer = 102 ;

let float = 13.9 ;

console.log(integer);
console.log(float);

// 02 - Convert
let basic = 34 ;

let stringified = basic.toString();

console.log(stringified);

// 03 - Round
let num = 1.5;

let rounded = Math.round(num);

console.log(rounded);

// // 04 - Arithmétique
// let test = 12 ;

// let bis = 5 ;

// console.log(test + bis);
// console.log(test - bis);
// console.log(test * bis);
// console.log(test / bis);
// console.log(test ** bis);
// console.log(test % bis);

// 05 - ...
let test = 143 ;

let bis = 219 ;

console.log(test < bis);
console.log(test > bis);
console.log(test >= bis);
console.log(test <= bis);
console.log(test == bis);
console.log(test === bis);
console.log(test != bis);
console.log(test !== bis);

// 06 - Condition
// let limit = 50 ;

// let score = 40 ;

// if (score >= limit) {
//     console.log("Ok good !")
// }
// else {
//     console.log("Oh nooo...");
// };

// // 07 - Condition ||
// let password = "azerty";

// if (password => 5){
//     console.log( "The password is secure");
// }

let limit = 50 ;

let score = 40 ;

let password = "azerty";

// if (limit > score && password.length > 5) {
//     console.log("Everything is good")
// } else if (limit < score || password.length < 5 ) {
//     console.log("Something is good")
// };

// if (limit >= score && password.length > 5) {
//     console.log("Everything is good");
// } if (limit > limit || password.length> 5 ) {
//     console.log("Something is good");
// } if (score < limit && password.length) {
//     console.log("Nothing is good");
// };

let max = 100;

for (let i = 0; i <= max;  i++) {
    console.log(i);
};


let a = 1 ;

let b = 6 ;
let random = Math.floor(Math.random()*(b - a + 1) + a);
console.log(random);



