import React, { useContext } from 'react';

import { ShoppingListItem } from '../Layout/ShoppingListItem'
import ItemsContext from '../../Context/Items/ItemsContext'

function Item({ item }) {
    const { name, id } = item;

    const { dispatchItems } = useContext(ItemsContext)

    function deleteItem() {
        dispatchItems({ type: 'DELETE_ITEM', item });
    }

    return <ShoppingListItem>{name} <button onClick={deleteItem}>X</button></ShoppingListItem>
}

export default Item;
