import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteItem, updateItem } from "../redux/actions";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit, TiTick } from "react-icons/ti";
import swal from "sweetalert";
function Tools({ items }) {
  const [name, setName] = useState(items.name);
  const [edit, setEdit] = useState(false);
  let dispatch = useDispatch();

  const removeList = (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this item?",
      icon: "warning",
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteItem(id));
        swal("Deleted!", "Selected title has been deleted!", "success");
      }
    });
  };
  return (
    <div className="list-items col">
      <div className="col">
        {edit ? (
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        ) : (
          <p>{items.name}</p>
        )}
      </div>

      <div className="action-icons">
        {edit ? (
          <TiTick
            onClick={() => {
              dispatch(
                updateItem({
                  ...items,
                  name: name,
                })
              );
              if (edit) {
                setName(items.name);
              }
              setEdit(!edit);
            }}
            className="edit-icon"
          />
        ) : (
          <TiEdit
            onClick={() => {
              dispatch(
                updateItem({
                  ...items,
                  name: name,
                })
              );
              if (edit) {
                setName(items.name);
              }
              setEdit(!edit);
            }}
            className="edit-icon"
          />
        )}
        <RiCloseCircleLine
          onClick={() => removeList(items.id)}
          className="delete-icon"
        />
      </div>
    </div>
  );
}

export default Tools;
