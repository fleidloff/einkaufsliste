import React, { useState } from 'react';

function NewItemForm({addItem}) { 
  const [item, setItem] = useState('');

  console.log("define onSubmit")
  function onSubmit(e) {
    e.preventDefault(); 
    addItem(item); 
    setItem("")
  }

  return (
    <form onSubmit={onSubmit}>
        <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
        <input type="submit" />
    </form>
  );
}

export default NewItemForm;
