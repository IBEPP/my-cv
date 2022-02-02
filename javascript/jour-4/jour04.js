// 01 - Object

let cat = {
    name: 'Garfield',
    age: 3 ,
    isCute: true,
};
console.log(cat);
console.log(cat.age);

isCute = true;
if (isCute === true) {
    console.log("So cute !")
}

// 02 - Combine

let cat2 = {
    name:"Pitch",
    age:10,
    isCute:false,
};
// cat2[0]="Pitch";
// cat2[1]=10;
// cat2[2]=false;

let cats = [cat, cat2];
console.log(cats[0].age)
console.log(cats[1].isCute);

// 03 - Even
function chekIfEven(num) {
    if (num/2===2) {
        console.log("even");
    } else {
        console.log("odd");
    }
}
chekIfEven(4);

// 4 - Compare
function compare (num1, num2) {
    if (num1 >= num2) {
        console.log("num1 is bigger")
    } if (num1 < num2) {
        console.log("num2 is bigger")
    } else if (num1===num2) {
        console.log("both are bigger")
    }
}
compare (10,10);

// 05 - Add Up
function addUp (num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        result = result + i;
    }
    return result
}
console.log(addUp(12));

let heures = "1:";
let minutes = "1:";
let secondes = "40";
num = heures + minutes + secondes;
// function format (num) {
// }
console.log(num)

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


