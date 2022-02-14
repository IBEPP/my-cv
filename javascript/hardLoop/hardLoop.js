// // 01 - Sum
// let numbers = [];
// let min = 0;
// let max = 100;
// let random = 0;
// for (let i = 1; i < 50; i++) {
//     random = Math.floor(Math.random() * max - min +1  )
//     numbers.push(random)
//     // random = numbers;
//     // console.table(random);
// }

// let total = 0;


// for (let i = 0; i <= numbers.length - 1; i++) {
//     total = total + numbers[i];
//     // console.log("i:", i);
// }

// console.log("Total:", total);

//// 02 - Max
// let tab = [];
// let max = 200;
// let min = 50;
// let random = 0;
// for(let i = 0; i <= 50; i++ ) {
//     random = Math.floor(Math.random() * max - min + 1 )
//     tab.push(random);
// }
// console.table(tab);

// let result = 0;

// for (let j = 0; j <= tab.length - 1; j++) {

//     if (result < tab[j]) {
//         result = tab[j];
//     }

// }

// console.log(result)

// var funcGetMax = require("./outils/getMax");

// var numbers = [];
// var randomNumber = 0;

// for (var i = 0; i <= 50; i++) {

//     randomNumber = Math.floor(Math.random() * (200 - 50 + 1) + 50);

//     numbers.push(randomNumber);
// }

// // console.table(numbers);

// console.log("Final result", funcGetMax(numbers));

// 03 - Unique
let numbers = [];
let max = 200;
let min = 50;
let random = 0;
for (let i = 0; i <= 50; i++) {
    random = Math.floor(Math.random() * max - min + 1)
    numbers.push(random);
}
console.table(numbers);

let i = 0;
let table = numbers.shift();
console.table(table)

let result = 0;

while (!(result >= 75 && result <= 100)) {
    result = numbers.shift();
}

console.table(result);

