import React, { useState } from 'react';

function NewItemForm({addItem}) { 
  const [item, setItem] = useState('');

  function onSubmit(e) {
    e.preventDefault(); 
    addItem(item); 
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
