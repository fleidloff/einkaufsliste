import styled from "styled-components";

const Input = styled.input`
  border: 1px solid #ccc;
  color: #ccc;
  padding: 5px;
  margin: 5px;
  &:focus {
    border-color: blue;
    color: black;
    font-weight: bold;
  }
`;
export { Input };
