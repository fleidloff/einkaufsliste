import React from 'react';
import styled from 'styled-components'

const Item = styled.div`
  border-bottom: 1px dotted #CCC;
  width: 100%;
  padding: 10px;
`

const Header = styled.div``

function ShoppingListItem({ name, onDelete }) {
  return (
    <Item>
      { name } <button onClick={onDelete}>X</button>
    </Item>
  );
}

export default ShoppingListItem;
