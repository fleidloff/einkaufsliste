import React, { useContext } from 'react';

import { ShoppingListItem } from '../Layout/ShoppingListItem'
import { Button } from '../Layout/Button'
import ItemsContext from '../../Context/Items/ItemsContext'

function Item({ item, isLast }) {
    const { name, checked } = item;

    const { dispatchItems } = useContext(ItemsContext)

    function deleteItem() {
        dispatchItems({ type: 'DELETE_ITEM', item });
    }

    function checkItem() {
        dispatchItems({ type: 'CHECK_ITEM', item });
    }

    return (
      <ShoppingListItem isLast={isLast}>
        <input type="checkbox" checked={checked} onClick={checkItem} />
        {" "}
        {name} 
        <Button active onClick={deleteItem}>X</Button>
      </ShoppingListItem>
    ) 
}

export default Item;
