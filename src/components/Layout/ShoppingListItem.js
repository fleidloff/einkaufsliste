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
  &:not(:last-child) td {
    border-bottom: 1px dotted #ccc;
  }
`;

export { Item as ShoppingListItem };
