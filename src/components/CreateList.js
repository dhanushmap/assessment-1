import React, { useState } from "react";
import { addItem } from "../redux/actions";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
const CreateList = () => {
  const [inputValue, setInputValue] = useState("");
  let dispatch = useDispatch();

  const handleText = (e) => {
    setInputValue(e.target.value);
  };

  const createItem = () => {
    if (inputValue === "") {
      swal({
        title: "Validation",
        text: "Title field is mandatory !",
        icon: "warning",
        dangerMode: true,
      });
    } else {
      dispatch(
        addItem({
          id: Math.floor(Math.random() * 10000),
          name: inputValue,
        })
      );
      setInputValue("");
      swal("Success!", "A new title has been created!", "success");
    }
  };
  return (
    <div className="todo-container container">
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
          <button
            className="btn btn-primary btn-block"
            onClick={() => {
              createItem();
            }}
          >
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateList;
