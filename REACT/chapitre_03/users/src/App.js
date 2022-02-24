import React from "react";
import Data from "./components/users.json"

function App() {
  
  // let numbers = [];
  // const map = numbers.map( (Data) => {

  //   if (Data.length > numbers) {

  //     numbers.push(Data.name, Data.email)
  //   }

  // })
  // console.log(numbers)

  let numbers = [];
  // let map = numbers.map(() => {})

  let map = numbers.map(function(Data) {
    if (Data.length > numbers) {
      numbers.push({Data.name} {Data.email})
  };
    
  }, {});
  
  
  // let  test = numbers.map(function(data) {
  //   console.log(data)
  //   return (Data.length > numbers)
  // });
  return (
    <div>
      {/* <p>{array}</p> */}
    </div>
  );
}

export default App;


  // let array = []
  // for(let i=0; i < Data.length; i++){
  //   array.push(<p>{Data[i].name} {Data[i].email}</p>)
  // }
  // console.log(array)