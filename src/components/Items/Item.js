import React, { useContext, useState } from "react";

import { ShoppingListItem, Unit } from "../Layout/ShoppingListItem";
import { Button } from "../Layout/Button";
import ItemsContext from "../../Context/Items/ItemsContext";

function Item({ item, isLast }) {
  const { unit, name, checked, id } = item;

  const { isHovered, setHovered } = useState(false);
  const { dispatchItems } = useContext(ItemsContext);

  function deleteItem() {
    dispatchItems({ type: "DELETE_ITEM", item });
  }

  function checkItem() {
    dispatchItems({ type: "CHECK_ITEM", item });
  }

  return (
    <ShoppingListItem isLast={isLast}>
      <td>
        <input
          type="checkbox"
          checked={checked}
          onClick={checkItem}
          id={`check_${id}`}
        />
      </td>{" "}
      <td className="alignRight">{unit && <Unit>{unit}</Unit>}</td>
      <td>
        <label htmlFor={`check_${id}`}>{name}</label>
        <br />
        <Button
          link
          className="visibleOnHoverShoppingListItem"
          onClick={deleteItem}
        >
          delete
        </Button>
      </td>
    </ShoppingListItem>
  );
}

export default Item;
