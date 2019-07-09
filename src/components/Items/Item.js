import React, { useContext, useState } from "react";

import { ShoppingListItem } from "../Layout/ShoppingListItem";
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
      <td className="alignRight">
        {unit && <label htmlFor={`check_${id}`}>{unit}</label>}
      </td>
      <td>
        <label htmlFor={`check_${id}`}>{name}</label>
      </td>
      <td>
        <Button
          active
          className="visibleOnHoverShoppingListItem"
          onClick={deleteItem}
        >
          X
        </Button>
      </td>
      <td></td>
    </ShoppingListItem>
  );
}

export default Item;
