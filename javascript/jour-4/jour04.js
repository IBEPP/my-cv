// // 01 - Object

// let cat = {
//     name: 'Garfield',
//     age: 3 ,
//     isCute: true,
// };
// console.log(cat);
// console.log(cat.age);

// isCute = true;
// if (isCute === true) {
//     console.log("So cute !")
// }

// // 02 - Combine

// let cat2 = {
//     name:"Pitch",
//     age:10,
//     isCute:false,
// };
// // cat2[0]="Pitch";
// // cat2[1]=10;
// // cat2[2]=false;

// let cats = [cat, cat2];
// console.log(cats[0].age)
// console.log(cats[1].isCute);

// // 03 - Even
// function chekIfEven(num) {
//     if (num/2===2) {
//         console.log("even");
//     } else {
//         console.log("odd");
//     }
// }
// chekIfEven(4);

// // 4 - Compare
// function compare (num1, num2) {
//     if (num1 >= num2) {
//         console.log("num1 is bigger")
//     } if (num1 < num2) {
//         console.log("num2 is bigger")
//     } else if (num1===num2) {
//         console.log("both are bigger")
//     }
// }
// compare (10,10);

// // 05 - Add Up
// function addUp (num) {
//     let result = 0;
//     for (let i = 1; i <= num; i++) {
//         result = result + i;
//     }
//     return result
// }
// console.log(addUp(12));

// let heures = "1:";
// let minutes = "1:";
// let secondes = "40";
// num = heures + minutes + secondes;
// // function format (num) {
// // }
// console.log(num)

// function format(num){
//     let hours = 0;
//     let minutes = 0;
//     let secondes = 0;

//     // 3700 secondes dans un heure
//     // 60 secondes dans une minute
//     // 60*2 dans 2 minutes
//     // 60*3 dans 3 minutes
//     // 60*4 dans 4 minutes
//     // 60*4 dans 4 minutes
//     // 60*60 dans 60 minutes ---> 3600
//     let rest = num % 3600; //si num === 3700 secondes le reste 100 secondes
//     console.log(num % 3600) // let rest2 = rest % 60; si restM = === 100s le reste 40 secondes
//     return 
// }
// format(3700);

// let hours = 3600;
// let minutes = 60;
// let secondes = 40;
// let full = hours + minutes + secondes;

// function format(num) {
//     hours = Math.floor(num/3600);

// }
// console.log(full)
// format(3700);
// function mehdiFormat(num) {
//     var hours = Math.floor(num / 3600);
//     var rest = num - hours * 3600;
//     var minutes = Math.floor(rest / 60);
//     var seconds = rest - minutes * 60;
//     console.log(`${hours} : ${minutes} : ${seconds}`);
// }

// // format(3700);
// // formatWithoutMaths(3700);
// mehdiFormat(3700);
// function formatWithoutMaths(num) {
//     var days = 0;
//     var hours = 0;
//     var minutes = 0;
//     var seconds = 0;
//     for (var i = 0; i < num; i++) {
//         seconds++;
//         if (seconds === 60) {
//             minutes++;
//             seconds = 0;
//         }
//         if (minutes === 60) {
//             hours++;
//             minutes = 0;
//         }
//         if (hours === 24) {
//             days++;
//             hours = 0;
//         }
//     }
//     console.log(`${hours} : ${minutes} : ${seconds}`);
// }
// formatWithoutMaths(3700)


// let max = 15;
// let min = 0;       
// let password = Math.floor(Math.random() * (max - min +1 ) + max);
// function generatePassword(num) {

//     return  Math.floor(Math.random() * (max - min +1) + max);
// }
// console.log(password);

// generatePassword("")

// function generatePassword(num) {
//     var max = 122;
//     var min = 48;
//     var password = "";
//     for (var i = 0; i < num; i++) {
//         var randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
//         while (randomIndex >= 58 && randomIndex <= 64) {
//             randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
//         }
//         var letter = String.fromCharCode(randomIndex);
//         password += letter;
//     }

//     console.log(password);
// }

// generatePassword(10);

//Another solution
// var lettres = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// function generatePassword(num) {
//     var password = []
//     if (num < 6 || num > 15) {
//         return "erreur";

//     }
//     else{
//         for (var i = 0; i <= num; i++) {

//             var max = lettres.length - 1
//             var b = Math.floor(Math.random() * (max + 1))

//             password.push(lettres[b])
//         }

//         return password.join("")
//     }

// }

// var final= generatePassword(6)
// console.log(final)


function launchDice(numberOfDice) {
    var min = 1;
    var max = 6;
    var sum = 0;

    for (var i = 0; i < numberOfDice; i++) {
        var dice = Math.floor(Math.random() * (max - min + 1) + min);

        sum += dice;
    }

    return sum;
}

var joueur1 = launchDice(5);
var joueur2 = launchDice(5);

if (joueur1 > joueur2) {
    console.log("Joueur 1 a gagné")
} else if (joueur1 < joueur2) {
    console.log("Joueur 2 a gagné")
} else {
    console.log("Egalité");
}