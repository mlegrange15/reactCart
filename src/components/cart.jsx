import React, { Component } from "react";

class Cart extends Component {
  render() {
    const { counter, item } = this.props; 

    return (
      <div>
        <span style={{ fontSize: 20 }}>
          {item}
        </span>
        <span style={{ fontSize: 20 }} className={this.setBadgeClass()}>
          {this.formatValue()}
        </span>
        <button
          onClick={() => this.props.onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          Add
        </button>
        <button
          onClick={() => this.props.onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Remove
        </button>
        <span style={{ fontSize: 20 }}>
         = {this.itemPrice()}
        </span>
      </div>
    );
  }

  setBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? "0" : value;
  }

  itemPrice() {
    const itemPrice = this.props.price * this.props.counter.value;
    return itemPrice;
  }
}

export default Cart;
