import React from "react";

export default function AddProductForm(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={props.name}
          id="name"
          placeholder="Enter the name"
          className="textfield"
          onChange={props.onNameChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          value={props.description}
          id="description"
          placeholder="Enter the description"
          className="textfield"
          onChange={props.onDescriptionChange}
        />
      </div>
      <div className="form-footer">
        <div className="validation-message"></div>
        <input type="submit" className="btn btn-primary" value="Add product" />
      </div>
    </form>
  );
}
