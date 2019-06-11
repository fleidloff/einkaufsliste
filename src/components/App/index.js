import React, { useState } from 'react';
import styled from 'styled-components'
import uuid from 'uuid/v4';

import NewItemForm from '../NewItemForm'
import Items from '../Items'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Header = styled.div`
    text-decoration: underline;
`

const initialItems = [
{
    id: uuid(),
    name: "Milk"
},
{
    id: uuid(),
    name: "Butter"
}
]

function App() {
    const [items, setItems] = useState(initialItems);

  return (
    <Title>
      <Header>
        foo
      </Header>
      <NewItemForm addItem={(item) => setItems([{name: item, id: uuid()}, ...items])} />
      <Items items={items} />
    </Title>
  );
}

export default App;
