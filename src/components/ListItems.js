import React from "react";
import Tools from "./Tools";
import { useSelector } from "react-redux";

function ListItems() {
  let itemArray = useSelector((state) => state.todoReducer);
  console.log("itemArray", itemArray);
  return (
    <div className="todo-container container">
      <div className="my-4">
        {itemArray.map((element) => {
          return <Tools key={element.id} items={element} />;
        })}
      </div>
    </div>
  );
}

export default ListItems;
