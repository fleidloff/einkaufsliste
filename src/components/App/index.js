import React, { useReducer } from "react";
import uuid from "uuid/v4";

import NewItemForm from "../NewItemForm";
import Items from "../Items";
import ItemsMeta from "../Items/meta";
import { Box, Title } from "../Layout/Basics";

import ItemsContext from "../../Context/Items/ItemsContext";
import ItemsReducer from "../../Context/Items/ItemsReducer";

const initialItems = [
  {
    id: uuid(),
    unit: "100 L",
    name: "Milk",
    checked: false
  },
  {
    id: uuid(),
    unit: "2x",
    name: "Butter",
    checked: true
  }
];

function App() {
  const [items, dispatchItems] = useReducer(ItemsReducer, initialItems);

  return (
    <ItemsContext.Provider value={{ dispatchItems, items }}>
      <Box>
        <Title>Einkaufsliste</Title>
      </Box>
      <Box>
        <NewItemForm />
      </Box>
      {Boolean(items.length) && (
        <Box>
          <ItemsMeta />
          <Items />
        </Box>
      )}
    </ItemsContext.Provider>
  );
}

export default App;
