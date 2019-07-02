import styled from 'styled-components'

const Item = styled.div`
  border-bottom: ${props => props.isLast ? 0 : "1px dotted #CCC"};
  padding: 10px;
`

export { Item as ShoppingListItem };
