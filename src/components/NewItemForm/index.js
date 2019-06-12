import React, { useState, useContext } from 'react';

import ItemsContext from '../../Context/Items/ItemsContext'


function NewItemForm() { 
  const [item, setItem] = useState('');

  const { dispatchItems } = useContext(ItemsContext)

  function onSubmit(e) {
      e.preventDefault(); 
      dispatchItems({ type: 'ADD_ITEM', itemName: item });
      setItem("")
  }

  function onChange(e) {
    setItem(e.target.value)
  }

  return (
        <form onSubmit={onSubmit}>
            <input type="text" value={item} onChange={onChange} />
            <input type="submit" />
        </form>
  );
}

export default NewItemForm;
