import React, { Component } from "react";
import Cart from "./cart";

class Carts extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Cart
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            item={counter.item}
            price={counter.price}
          />
        ))}
      </div>
    );
  }
}

export default Carts;
