import React from "react";
import { useState } from "react";
import CreateList from "./CreateList";
import Tools from "./Tools";
import swal from "sweetalert";
function TodoBox() {
  const [lists, setLists] = useState([]);
  const addList = (list) => {
    const newLists = [list, ...lists];
    setLists(newLists);
    console.log([lists, ...lists]);
  };

  const completeAction = (id) => {
    let updateAction = lists.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    setLists(updateAction);
  };

  const removeList = (id) => {
    console.log("idddd", id);
    swal("Success", "All fields are mandatory. Please fill them.");

    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this item?",
      icon: "warning",
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const removedArr = [...lists].filter((el) => el.id !== id);
        setLists(removedArr);
        console.log("lists===", lists);
        swal("Deleted!", "Selected item has been deleted!", "success");
      }
    });
  };

  const updateList = (itemId, newValue) => {
    setLists((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div className="todo-container container">
      <CreateList onSubmit={addList} />
      <Tools
        tools={lists}
        completeAction={completeAction}
        removeList={removeList}
        updateList={updateList}
      />
    </div>
  );
}

export default TodoBox;
