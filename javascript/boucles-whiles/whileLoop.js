// let num = 50;
// let max = 200;
// while (num <= 200) {
//     if (num % 2 === 0) {
//         console.log(num)
//     }
//     num++
// }

// 02 - Try again
// let dice = null;
// let count = 0;

// let max = 6;
// let min = 1;

// while (dice !== 6) {
//     dice = Math.floor(Math.random() * (max - min +1) +min );
//     count++
// }
// // console.log(dice)
// console.log("Je de lancer", count , "fois");

let usainBolt = 0;
let tysonGay = 0;
let min = 1;
let max = 10;

for ( let num = 99; usainBolt < num && tysonGay < num; ) {
    let usain = Math.floor(Math.random() * (max - min +1) +min );
    let tyson = Math.floor(Math.random() * (max - min +1) +min );
    usainBolt = usainBolt + usain;
    tysonGay = tysonGay + tyson;
}

if (usainBolt > tysonGay) {
    console.log("Le vainqueur est Usain Bolt avec un score de" , usainBolt);
} else if (tysonGay > usainBolt) {
    console.log("Le vainqueur est Tyson Gay avec un score de" ,tysonGay);
} else {
    console.log(" Egalité !");
}