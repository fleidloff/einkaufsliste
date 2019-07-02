import React, { useContext } from 'react';

import Item from "./Item"

function Items({ items }) {

    return items.map(item => (
        <Item key={item.id} item={item} />
    ))
}

export default Items;
