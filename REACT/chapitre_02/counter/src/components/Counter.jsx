import React from "react";

export default class Counter extends React.Component {
      render() {
    return (
    <div>
      <button style={{background: "green"}} onClick={this.props.count !== 0 ? this.props.removeFunction : 0}>-</button>
      <h2 >{this.props.count} </h2>
      <button style={{background: "red"}} onClick={this.props.addFunction}>+</button>
    </div>
)
}
}




