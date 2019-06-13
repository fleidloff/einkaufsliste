import React, { useReducer } from 'react';
import uuid from 'uuid/v4';

import NewItemForm from '../NewItemForm'
import Items from '../Items'
import { ShoppingList, ShoppingListTitle } from '../Layout/ShoppingList'

import ItemsContext from '../../Context/Items/ItemsContext'
import ItemsReducer from '../../Context/Items/ItemsReducer'

const initialItems = [{
        id: uuid(),
        name: "Milk"
    },{
        id: uuid(),
        name: "Butter"
    }
]

function App() {
    const [items, dispatchItems] = useReducer(ItemsReducer, initialItems);

  return (
      <ItemsContext.Provider value={{ dispatchItems, items }}>
          <ShoppingList>
            <ShoppingListTitle>Einkaufsliste</ShoppingListTitle>
            <NewItemForm />
            <Items />
          </ShoppingList>
      </ItemsContext.Provider>
  );
}

export default App;
