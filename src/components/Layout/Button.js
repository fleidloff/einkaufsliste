import styled from "styled-components";

const Button = styled.button`
  border: ${props => (props.link ? "0" : "1px")} solid
    ${props => (props.active ? "blue" : "#ccc")};
  color: ${props => (props.active ? "white" : "#999")};
  &:hover {
    color: #666;
  }
  text-decoration: underline;
  background: ${props =>
    props.active ? "blue" : props.link ? "white" : "#CCC"};
  padding: ${props => (props.link ? "0" : "5px")};
  margin: ${props => (props.link ? "0" : "5px")};
  cursor: pointer;
`;
export { Button };
