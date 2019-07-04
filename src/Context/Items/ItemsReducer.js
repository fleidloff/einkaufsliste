import uuid from 'uuid/v4';

const ItemsReducer = (state, action) => {
    
  switch (action.type) {
    case 'ADD_ITEM':
      // todo: extract unit and name here
      return [{name: action.itemName, id: uuid()}, ...state];
    case 'DELETE_ITEM':
      return state.filter(item => item.id !== action.item.id);
    case 'CHECK_ITEM':
      return state.map(item => {
        if(item.id === action.item.id) {
          item.checked = !item.checked;
        }
        return item;
      });
    default:
      throw new Error();
  }
};

export default ItemsReducer;