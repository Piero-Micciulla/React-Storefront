import React, { useState } from "react";
import Product from "./Product.js";

export default function StoreFront() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [validation, setValidation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      setValidation("Please enter a name");
      return;
    }
    if (!description) {
      setValidation("Please enter a description");
      return;
    }
    setProducts([
      ...products,
      {
        id: products.length + 1,
        name: name,
        description: description,
      },
    ]);
    setName("");
    setDescription("");
    setValidation("");
  }

  function handleDeleteProduct(id) {
    setProducts(products.filter((product) => product.id !== id));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            id="name"
            placeholder="Enter the name"
            className="textfield"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            value={description}
            id="description"
            placeholder="Enter the description"
            className="textfield"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-footer">
          <div className="validation-message"></div>
          <input
            type="submit"
            className="btn btn-primary"
            value="Add product"
          />
        </div>
      </form>
      <div>{products.length === 0 && <p>Add your first product</p>}</div>
      <ul className="store-front">
        {products.map((product) => (
          <li key={product.id}>
            <Product details={product} />
            <button
              className="btn-outline btn-delete"
              onClick={() => handleDeleteProduct(product.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
