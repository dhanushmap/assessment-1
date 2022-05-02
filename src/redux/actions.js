export const ADD_ITEM = "ADD_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export function addItem(data) {
  return {
    type: ADD_ITEM,
    payload: data,
  };
}

export function updateItem(data) {
  return {
    type: UPDATE_ITEM,
    payload: data,
  };
}

export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    payload: id,
  };
}
