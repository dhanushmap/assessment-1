import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateList from "./CreateList";
import UpdateItem from "./UpdateItem";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
function Tools({ tools, completeAction, removeList, updateList }) {
  const [edit, setEdit] = useState({ id: null, value: "" });

  const submitUpdate = (value) => {
    updateList(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  if (edit.id) {
    return <UpdateItem edit={edit} onSubmit={submitUpdate} />;
  } else {
    return tools.map((item, index) => (
      <div className="list-items" key={index}>
        <p key={item.id} onClick={() => completeAction(item.id)}>
          {item.text}
        </p>

        <div className="action-icons">
          <RiCloseCircleLine
            onClick={() => removeList(item.id)}
            className="delete-icon"
          />
          <TiEdit
            onClick={() => setEdit({ id: item.id, value: item.text })}
            className="edit-icon"
          />
        </div>
      </div>
    ));
  }
}

export default Tools;
