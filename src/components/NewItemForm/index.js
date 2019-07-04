import React, { useState, useContext } from 'react';

import ItemsContext from '../../Context/Items/ItemsContext'

import { Input } from '../Layout/Input'
import { Button } from '../Layout/Button'


function NewItemForm() { 
  const [item, setItem] = useState('');
  const defaultPlaceholder = 'add item'
  const [placeholder, setPlaceholder] = useState(defaultPlaceholder);

  const { dispatchItems } = useContext(ItemsContext)

  function onSubmit(e) {
      e.preventDefault(); 
      if (item === '') {
        return;
      }
      dispatchItems({ type: 'ADD_ITEM', itemName: item });
      setItem("")
  }

  function onChange(e) {
    setItem(e.target.value)
  }

  function onFocus() {
    setPlaceholder("")
  }

  function onBlur() {
    setPlaceholder(defaultPlaceholder)
  }

  return (
        <form onSubmit={onSubmit}>
            <Input type="text" value={item} onChange={onChange} onFocus={onFocus} onBlur={onBlur} placeholder={placeholder} />
            <Button onClick={onSubmit} active={item !== ""}>add item</Button>
        </form>
  );
}

export default NewItemForm;
