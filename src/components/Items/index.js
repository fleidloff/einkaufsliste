import React, { useContext } from "react";

import ItemsContext from "../../Context/Items/ItemsContext";

import Item from "./Item";

function Items() {
  const { items } = useContext(ItemsContext);

  return (
    <table style={{ width: "100%" }}>
      {items.map((item, idx, arr) => (
        <Item key={item.id} item={item} isLast={idx === arr.length - 1} />
      ))}
    </table>
  );
}

export default Items;
