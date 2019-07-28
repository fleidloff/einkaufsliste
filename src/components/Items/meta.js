import React, { useContext } from "react";

import { Meta } from "../Layout/ShoppingListMeta";
import ItemsContext from "../../Context/Items/ItemsContext";

function Items() {
  const { items, dispatchItems } = useContext(ItemsContext);

  const hasUncheckedItem = Boolean(items.find(item => !item.checked));

  function checkUncheckAll() {
    if (hasUncheckedItem) {
      dispatchItems({ type: "CHECK_ALL_ITEMS" });
    } else {
      dispatchItems({ type: "UNCHECK_ALL_ITEMS" });
    }
  }

  return (
    <Meta>
      <input
        type="checkbox"
        checked={!hasUncheckedItem}
        onClick={checkUncheckAll}
        id="check_uncheck_all_items"
      />{" "}
      <label htmlFor="check_uncheck_all_items">
        {hasUncheckedItem ? "check all items" : "uncheck all items"}
      </label>
      <hr />
    </Meta>
  );
}

export default Items;
