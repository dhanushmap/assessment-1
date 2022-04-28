import React, { useState } from "react";
const CreateList = (props) => {
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
      <h5 style={{ textAlign: "left" }}>Create List</h5>
      <form className="form-inline" onSubmit={handleAddItem}>
        <div className="row">
          <div className="col-sm-10">
            <input
              type="text"
              placeholder="Title"
              name="text"
              value={inputValue}
              onChange={handleText}
              className="form-control"
            />
          </div>
          <div className="col-sm-2">
            <button className="btn btn-primary btn-block">Add Item</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateList;
