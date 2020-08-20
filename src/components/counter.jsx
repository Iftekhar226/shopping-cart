import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
  };
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
          className="btn btn-secondary btn-sm"
          onClick={this.handelIncrement}
        >
          Increment
        </button>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.handelDecrement}
        >
          Decrement
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }
  handelIncrement = () => {
    // console.log("dsdfsef", this.state.count);
    this.setState({
      count: this.state.count + 1,
    });
  };
  handelDecrement = () => {
    if (this.state.count >= 1) this.setState({ count: this.state.count - 1 });
  };
  getBadgeClasses() {
    let classes = " badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  forCounter() {
    const { count } = this.state;
    return count === 0 ? "ZERO" : count;
  }
}
export default Counter;
