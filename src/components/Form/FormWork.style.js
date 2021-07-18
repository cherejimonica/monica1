import styled from "styled-components";
export const Container = styled.div`
  background-color: grey;
  padding: 1rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 6px;
  text-align: center;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
`;
export const Button = styled.div`
  font: inherit;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 1px solid black;
  background-color: grey;
  color: black;
  border-radius: 6px;
  margin-right: 1rem;
  :hover {
    background-color: blue;
    border-color: blueviolet;
  }
  :active  {
    background-color: blue;
    border-color: blueviolet;
  }
`;
