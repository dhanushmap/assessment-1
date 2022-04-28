import React, { useState } from "react";
const UpdateItem = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleText = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (inputValue === "") return false;

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: inputValue,
    });
    setInputValue("");
  };
  return (
    <div>
      <h5 style={{ textAlign: "left" }}>Update List</h5>
      <form className="form-inline" onSubmit={handleAddItem}>
        <div className="row">
          <div className="col-sm-8">
            <input
              type="text"
              placeholder="Title"
              name="text"
              value={inputValue}
              onChange={handleText}
              className="form-control"
            />
          </div>
          <div className="col-sm-4">
            <button className="btn btn-primary">Update Item</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateItem;
