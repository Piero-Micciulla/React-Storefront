import React, { useState } from "react";
import Product from "./Product.js";
import AddProductForm from "./AddProductForm";
import ProductsList from "./ProductsList";

export default function StoreFront() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [validation, setValidation] = useState("");

  function handleFormSubmit(e) {
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
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleDeleteProduct(id) {
    setProducts(products.filter((product) => product.id !== id));
  }

  return (
    <>
      <AddProductForm
        onFormSubmit={handleFormSubmit}
        name={name}
        description={description}
        validation={validation}
        onNameChange={handleNameChange}
        onDescriptionChange={handleDescriptionChange}
      />
      <ProductsList products={products} onDeleteClick={handleDeleteProduct} />
    </>
  );
}
