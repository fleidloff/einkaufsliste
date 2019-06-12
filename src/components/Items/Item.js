import React, { useContext } from 'react';

import ItemsContext from '../../Context/Items/ItemsContext'

function Item({ item }) {
    const { name, id } = item;

    const { dispatchItems } = useContext(ItemsContext)

    function deleteItem() {
        dispatchItems({ type: 'DELETE_ITEM', item });
    }

    return <div key={id}>{name} 
            <span onClick={deleteItem}>X</span>
        </div>
}

export default Item;
