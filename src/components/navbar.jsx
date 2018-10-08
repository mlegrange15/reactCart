import React from "react";

const Navbar = ({ totalCounters, totalCost }) => {
  
  console.log("Total: ", totalCost);

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Items in cart:{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
        Total:{" "}
        <span className="badge badge-pill badge-secondary">{totalCost}</span>
      </a>
    </nav>
  );
};

export default Navbar;
