import React, { useState, useReducer } from 'react';
import styled from 'styled-components'
import uuid from 'uuid/v4';

import NewItemForm from '../NewItemForm'
import Items from '../Items'

import ItemContext from '../../ItemContext'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Header = styled.div`
    text-decoration: underline;
`


const initialItems = [{
        id: uuid(),
        name: "Milk"
    },{
        id: uuid(),
        name: "Butter"
    }
]

const itemsReducer = (state, action) => {
    
  switch (action.type) {
    case 'ADD_ITEM':
      return [{name: action.itemName, id: uuid()}, ...state];
    case 'DELETE_ITEM':
      return state.filter(item => item.id !== action.item.id);
    default:
      throw new Error();
  }
};

function App() {
    const [items, dispatchItems] = useReducer(itemsReducer, initialItems);

    function addItem(itemName) {
        dispatchItems({ type: 'ADD_ITEM', itemName });
    }

  return (
    <Title>
      <ItemContext.Provider value={{ dispatchItems }}>
          <Header>
            foo
          </Header>
          <NewItemForm addItem={addItem} />
          <Items items={items} />
      </ItemContext.Provider>
    </Title>
  );
}

export default App;
