import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Carts from "./components/carts";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0, item: "Shoes", price: 75 },
      { id: 2, value: 0, item: "Shirt", price: 35 },
      { id: 3, value: 0, item: "Hat", price: 25 },
      { id: 4, value: 0, item: "Pants", price: 100 }
    ],
    totalCost: 0
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    const totalCost = counters.reduce((accumulator, {value, price}) => {
      return accumulator + (value * price);
    }, 0);
    this.setState({ counters, totalCost });
  };

  handleDelete = id => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
          totalCost={this.state.totalCost}
        />
        <main className="container">
          <div className="row">
            <div className="col-md-12">
              <Carts
                counters={this.state.counters}
                onReset={this.handleReset}
                onIncrement={this.handleIncrement}
                onDelete={this.handleDelete}
              />
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
