import React, { Component } from "react";
import Counter from "./counter";
export class Counters extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-primary m-2 btn-sm"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
