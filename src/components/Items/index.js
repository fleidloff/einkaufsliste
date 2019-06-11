import React from 'react';

function Items({ items }) {
  return (
    <div>
        {items.map(item => (
            <div key={item.id}>{item.name}</div>
        ))}
    </div>
  );
}

export default Items;
