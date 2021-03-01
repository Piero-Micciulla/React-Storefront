import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  return (
    <>
      <div>{props.products.length === 0 && <p>Add your first product</p>}</div>
      <ul className="store-front">
        {props.products.map((product) => (
          <li key={product.id}>
            <Product details={product} />
            <button
              className="btn-outline btn-delete"
              onClick={() => props.onDeleteClick(product.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
