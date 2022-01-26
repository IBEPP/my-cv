// 01 - Hello World
console.log("Hello World !");

// 02 - String
var test = "My name is Ibep";

console.log(test);

// 03 - Concaténation
var name = "Ibep";

console.log("Nice to meet you " + name);

// 04 - String Lenght
var testLenght = "I'm very long !";

console.log(testLenght.length);

// 05 - replace
var food = "croissant is meh";

food = food.replace('meh', "so good")

console.log(food);

// 06 - Up an Down
var basic = "This is Cool";

var basicUp = basic.toUpperCase();
var basicUp = basic.toLocaleLowerCase();

var basicDown = "this is cool";

console.log(basic + "\n" + basicUp + "\n" + basicDown);

// 07 - Split
var word = "banana";

var letters = word.split("")

console.log(letters);

// // 08 - Template
var age = 20;

var template = `I'm ${age} years old`;
console.log(template);

var changed = "Bonjour";

var changed1 = "Banjaur";

if (changed <= changed1) {
    console.log(changed1);
  } else {
      console.log(changed1);
  }
