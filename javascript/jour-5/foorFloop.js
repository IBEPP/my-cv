// // // 03 - Chanceux
// let pop = 0;
// for (i = 5; i <= 10; i++) {
//     pop += i**2;
// }
// console.log(pop);

// // 02 - Comptons
// let max = 1000;
// let min = 100;
// let num1 = 7;
// let result = 0;

//  for (let i = min; i <= max; i++ ) {
//     if (i % num1 === 0) {
//         result ++
//     }
//  }
//  console.log(result);

// 03 - Chanceux
// let max = 6;
// let min = 1;
// let result = "";
// let chiffres = Math.floor(Math.random() * (max - min +1) +min );
// console.log(chiffres);



let max = 6;
let min = 1;
let result = "";
let dir = 0;

for (let i = 1; i <= 100; i++) {
    let diceRoll = Math.floor(Math.random() * (max - min +1) +min );
    if (diceRoll >=5 ) {
        dir = dir + diceRoll;
    }
}
console.log(dir)




