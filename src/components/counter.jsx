import React, { Component } from "react";

class Counter extends Component {
  style = {
    fontSize: 15,
    fontWeight: "bold",
  };
  //   constructor() {
  //     super();
  //     this.handelIncrement = this.handelIncrement.bind(this);
  //   }
  render() {
    // console.log(this.props);
    return (
      <div>
        <span style={this.style} className={this.getBadgeClasses()}>
          {this.forCounter()}
        </span>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          Decrement
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = " badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  forCounter() {
    let count = this.props.counter.value;
    return count === 0 ? "ZERO" : count;
  }
}
export default Counter;
