import React from "react";
import Product from "./Product.js";

export default function StoreFront() {
  const products = [
    {
      name: "Cheese",
      description: "200g cheese block",
      image:
        "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZXNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
    },
    {
      name: "Milk",
      description: "1L of milk",
      image:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWlsa3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
    },
  ];

  return (
    <div className="store-front">
      <Product details={products[0]} />
      <Product details={products[1]} />
    </div>
  );
}
