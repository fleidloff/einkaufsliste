import React from 'react';
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`
const List = styled.div`
  background: white;
  border: 1px solid #CCC;
  max-width: 600px;
  margin: 10px auto;
  padding: 10px 20px;
`

const Header = styled.div``

function ShoppingList({ children }) {
  return (
    <List>
      <Title>Shopping List</Title>
      { children }
    </List>
  );
}

export default ShoppingList;
