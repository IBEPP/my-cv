// let num = 50;
// while (num <= 200) {
//     if (num % 2 === 0) {
//         console.log(num)
//     }
//     num++
// }

// 02 - Try again
let dice = null;
let count = 0;

let max = 6;
let min = 1;

while (dice !== 6) {
    dice = Math.floor(Math.random() * (max - min +1) +min );
    // console.log(dice);
    count++
}
console.log("voila", count);

