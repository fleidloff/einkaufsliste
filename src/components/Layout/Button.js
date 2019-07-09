import styled from "styled-components";

const Button = styled.button`
  border: 1px solid ${props => (props.active ? "blue" : "#ccc")};
  color: ${props => (props.active ? "white" : "#999")};
  background: ${props => (props.active ? "blue" : "#CCC")};
  padding: 5px;
  margin: 5px;
`;
export { Button };
