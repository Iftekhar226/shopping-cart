import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleDecrement = (counter) => {
    if (counter.value >= 1) {
      const counters = [...this.state.counters];
      let index = counters.indexOf(counter);
      counters[index].value--;
      this.setState({ counters });
    } else {
      alert("negative are not allowed");
    }
  };
  handelReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDelete = (counterId) => {
    //    console.log("hiii i am working ", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  hendleIncrement = (counter) => {
    //consSole.log("increment", counter);
    const counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment className="App">
        <NavBar
          count={this.state.counters.filter((c) => c.value >= 1).length}
        />
        <main class="container">
          <Counters
            onDecrement={this.handleDecrement}
            onIncrement={this.hendleIncrement}
            onReset={this.handelReset}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
