import React, { useContext, useState } from 'react';

import { ShoppingListItem, Unit } from '../Layout/ShoppingListItem'
import { Button } from '../Layout/Button'
import ItemsContext from '../../Context/Items/ItemsContext'

function Item({ item, isLast }) {
    const { unit, name, checked, id } = item;

    const { isHovered, setHovered } = useState(false)
    const { dispatchItems } = useContext(ItemsContext)

    function deleteItem() {
        dispatchItems({ type: 'DELETE_ITEM', item });
    }

    function checkItem() {
        dispatchItems({ type: 'CHECK_ITEM', item });
    }

    return (
      <ShoppingListItem isLast={isLast}>
        <input type="checkbox" checked={checked} onClick={checkItem} id={`check_${id}`} />
        {" "}
        <label htmlFor={`check_${id}`}>
          {unit && <Unit>{unit}</Unit>}
          {name}
        </label> 
        <Button active className="visibleOnHoverShoppingListItem" onClick={deleteItem}>X</Button>
      </ShoppingListItem>
    ) 
}

export default Item;
