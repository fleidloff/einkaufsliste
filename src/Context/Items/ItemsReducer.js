import uuid from 'uuid/v4';

const ItemsReducer = (state, action) => {
    
  switch (action.type) {
    case 'ADD_ITEM':
      return [{name: action.itemName, id: uuid()}, ...state];
    case 'DELETE_ITEM':
      return state.filter(item => item.id !== action.item.id);
    default:
      throw new Error();
  }
};

export default ItemsReducer;