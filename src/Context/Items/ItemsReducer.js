import uuid from "uuid/v4";
import extractUnit from "./extractUnit";

const ItemsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      // todo: extract unit and name here
      return [
        extractUnit({
          name: action.item.name,
          id: uuid(),
          unit: action.item.unit
        }),
        ...state
      ];
    case "DELETE_ITEM":
      return state.filter(item => item.id !== action.item.id);
    case "CHECK_ITEM":
      return state.map(item => {
        if (item.id === action.item.id) {
          item.checked = !item.checked;
        }
        return item;
      });
    default:
      throw new Error();
  }
};

export default ItemsReducer;
