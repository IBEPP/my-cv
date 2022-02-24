import React from "react";
import Counter from "./components/Counter";
import "./App.css";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

  }

   decrementCount = () => {
     let oldDecrement = this.state.count;
     this.setState({
        count: oldDecrement - 1 
      })
    }

    incrementCount = () => {
      let oldIncrement = this.state.count;
     this.setState({
        count: oldIncrement + 1,
      })
    }
  
  render() {
    
    return (
      <div>
        <h1> Counter </h1>
      <Counter count={this.state.count} addFunction={this.incrementCount} removeFunction={this.decrementCount} />
      </div>
    )
  }
}

export default App;