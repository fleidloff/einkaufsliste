import styled from "styled-components";

const Item = styled.tr`
  padding: 10px;
  > .visibleOnHoverShoppingListItem {
    opacity: 0;
  }
  :hover > .visibleOnHoverShoppingListItem {
    opacity: 1;
  }
  td.alignRight {
    text-align: right;
  }
`;
const Unit = styled.div`
  display: inline-block;
  background: lightblue;
  border: 1px solid blue;
  border-radius: 2px;
  padding: 2px;
  margin-right: 5px;
`;

export { Item as ShoppingListItem, Unit };
