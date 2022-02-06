// // 01 - Array
// let fruits = ["mango", "lemon", "blueberry",];
// console.log(fruits);
// console.table(fruits)

// // 02 - Access
// let ingredients = ["eggs", "milk", "butter",];
// console.log(ingredients[1]);
// console.log(ingredients.indexOf("butter"));

// // 03 - Add and Remove
// let objects = ["pen", "book", "lamp"];
// objects.pop("lamp");
// objects.push("latop");
// console.log(objects);

// // 04 - Order
// let numbers = [4, 10, 8, 12, 6];
// numbers.reverse()
// console.log(numbers);
// numbers.sort();
// console.log(numbers.sort());

// // 05 - Boucle
// let total = 0 ;
// let limit = 10 ;
// for (let i = 0; i <= limit; i++) {
//     total = total + i;
// }
// console.log(total);

// // 06 - Reverse
// let result = "";
// let sentence = "Hello Konexio !";
//  for (let i = sentence.length -1 ; i >= 0; i--) {
//     result = result + sentence[i];
// }  
// console.log(result);

// // ⭐ Bonus
// let fb = "fizzbuzz";
// for (i = 0 ; i <= 100 ; i++) {
//     if (i%3===0) {
//         console.log("fizz");
//     } 
//     if (i%5===0) {
//         console.log("buzz");
//     } 
//     if (i%3 == 0 && i%5 ===0) {
        
//         console.log( fb );
//     } 
//     if (i%7 === 0) {
//        console.log();
//     } 
// };

// // ⭐⭐ Bonus II
// let mest1 = 100;
// let a = 0;
// while (a < mest1) {
//     a++;
//     if (a % 3 === 0) {
//         console.log("fizz");
//     };
//     if (a % 5 === 0) {
//         console.log("buzz");
//     };
//     if (a % 3 && a % 5 === 0) {
//         console.log("fizzbuzz");
//     };
//     if (a % 7 === 0) {
//         console.log();
//     };
// }

// // ⭐⭐⭐ Bonus III
// let CamaradeDeClass = ["Ibra", "Abder", "Lies", "Omar", "Tenzin", "Naim", "Joel", "Chams", "Mateo", "Ethan", "Ismail", "Erfan", "Marvin", "Alexandre C","Yanis", "Alexandre D",];
// let mest = CamaradeDeClass [Math.floor(Math.random()* CamaradeDeClass.length)]
// console.log(mest);

// ⭐⭐⭐⭐ Bonus IV
let max = 100 ;
let min = 0;
let tab = [];
let random = 0;
for ( let f = 0; f < 20 ; f++ ) {
    random = Math.floor(Math.random() * (max - min + 1));

    if (tab.indexOf(random) === -1) {
        tab.push(random);
    } else {
        f--;
    }
    // tab = random;
    // console.log(random);
};
console.table(tab);

let numMax = tab[0]; 

for (let i = 1; i < tab.length; i++) {
    let item = tab[i];

    if (item > numMax) {
        numMax = item;
    } 
}

console.log(numMax);

