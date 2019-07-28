import styled from "styled-components";

const Meta = styled.div`
  font-style: italic;
  color: #555;
  > * {
    cursor: pointer;
  }
  &:hover {
    color: black;
  }
  hr {
    background-color: #ccc;
    border-width: 0px;
    height: 1px;
  }
`;

export { Meta };
