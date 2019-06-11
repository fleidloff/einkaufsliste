import React from 'react';

import ItemContext from '../../ItemContext'


function Items({ items  }) {
    function deleteItem(item, dispatchItems) {
        return () => dispatchItems({ type: 'DELETE_ITEM', item });
    }

  return (
    <ItemContext.Consumer>
    {({ dispatchItems }) => (
        <div>
            {items.map(item => (
                <div key={item.id}>{item.name} <div onClick={deleteItem(item, dispatchItems)}>X</div></div>
            ))}
        </div>
        )}
        
    </ItemContext.Consumer>
  );
}

export default Items;
