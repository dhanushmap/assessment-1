import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from "./actions";

const items = [
  {
    id: 1,
    name: "Title One",
  },
  {
    id: 2,
    name: "Title Two",
  },
  {
    id: 3,
    name: "Title Three",
  },
];

export function todoReducer(state = items, action) {
  let newItems;
  switch (action.type) {
    case ADD_ITEM:
      newItems = [...state];
      newItems.push(action.payload);
      return newItems;
    case DELETE_ITEM:
      newItems = [...state];
      newItems = newItems.filter((el) => el.id != action.payload);
      return newItems;
    case UPDATE_ITEM:
      newItems = [...state];
      let index = -1;
      for (let i = 0; i < newItems.length; i++) {
        index++;
        if (newItems[i].id == action.payload.id) {
          break;
        }
      }
      if (index != -1) {
        newItems[index] = action.payload;
        return newItems;
      }
  }
  return state;
}
