import React, { useContext } from 'react';

import ItemsContext from '../../Context/Items/ItemsContext'

import Item from "./Item"

function Items() {

    const { items } = useContext(ItemsContext)

    return items.map(item => (
        <Item key={item.id} item={item} />
    ))
}

export default Items;
