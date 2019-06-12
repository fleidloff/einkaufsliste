import React, { useReducer } from 'react';
import styled from 'styled-components'
import uuid from 'uuid/v4';

import NewItemForm from '../NewItemForm'
import Items from '../Items'

import ItemsContext from '../../Context/Items/ItemsContext'
import ItemsReducer from '../../Context/Items/ItemsReducer'

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

function App() {
    const [items, dispatchItems] = useReducer(ItemsReducer, initialItems);

  return (
    <Title>
      <ItemsContext.Provider value={{ dispatchItems, items }}>
          <Header>
            foo
          </Header>
          <NewItemForm />
          <Items />
      </ItemsContext.Provider>
    </Title>
  );
}

export default App;
