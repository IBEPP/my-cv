// 01 - File System
// var fs = require("fs");

// fs.readFile("jour07.txt", function (err, data) {
//     if (err) {
//        console.error(err);
//        return;
//     }
 
//     console.log("Lecture en différé : " + data.toString());
//  });

// 02 - Map Double
// let num = [1, 2, 3, 4, 5];

// let doubles = num.map(function(num) {
//   return num * 2;
// });
// console.log(doubles);

// 03 - Map Names
// let logNames = [
// 	{
// 		firstName: "Jane",
// 		lastName: "Doe"
// 	},
// 	{
// 		firstName: "John",
// 		lastName: "Smith"
// 	}
// ]

// let shortNames = logNames.map(function(shortNames) {
//     let name = {
//         name : shortNames.firstName + " " +shortNames.lastName
//     }
//     return name
// })

// console.log(shortNames);

// 04 - Filter Numbers
// probleme



// let array = [1, "toto", 34, "javascript", 8];
// let numbers = array.filter((numbers) => {
//     if (typeof(numbers) === "number")
//     return numbers
// })
// console.log(numbers)

// let array = [1, "toto", 34, "javascript", 8];
// let numbers = array.filter(function (array) {
//     return array;
// }
// )
// console.log(numbers)

// 05 - Filter Even
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let even = numbers.filter(function (numbers) {
//     return (numbers % 2 === 0 ) 
// }
// )
// console.log(even);

// let cakes = [
// 	{
// 		name: "cake",
// 		flavor: "vanilla",
// 		status: "available"
// 	},
// 	{
// 		name: "brownie",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// 	{
// 		name: "pie",
// 		flavor: "strawberry",
// 		status: "available"
// 	},
// 	{
// 		name: "muffin",
// 		flavor: "pistachio",
// 		status: "available"
// 	},
// 	{
// 		name: "donut",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// ]

// let array = cakes.filter(function (cakes){
//     // if (cake.flavor === "chocolate" ) {
//     // }
//     // console.log(cake)
//     return (cakes.flavor === "chocolate")
    
// }
// )
// console.log(array);


