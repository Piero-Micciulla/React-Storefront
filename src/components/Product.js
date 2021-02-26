import React, { useState } from "react";

export default function Product(props) {
  const [adding, setAdding] = useState(0);

  function handleDecrementClick() {
    if (adding > 0) {
      setAdding(adding - 1);
    }
  }

  function handleIncrementClick() {
    setAdding(adding + 1);
  }

  return (
    <>
      <div className="product">
        <img width="50" alt="" src={props.details.image} />
        <div className="product-info">
          <h2>{props.details.name}</h2>
          <p>{props.details.description}</p>
        </div>
        <div className="product-buttons">
          <button
            className="product-sub"
            onClick={handleDecrementClick}
            disabled={adding === 0}
          >
            -
          </button>
          <h3 className="product-count">{adding ? adding : ""}</h3>
          <button className="product-add" onClick={handleIncrementClick}>
            +
          </button>
        </div>
      </div>
    </>
  );
}
