import React, { Component } from "react";
import Counter from "./counter";
export class Counters extends Component {
  render() {
    const { onReset, onIncrement, onDecrement, onDelete, counter } = this.props;
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
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
