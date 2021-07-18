import React from "react";
import { Container, Wrapper, Label, Select, Option } from "./Dropdown.style";
const Dropdown = (props) => {
  const dropdownHandler = (event) => {
    props.onChangeYear(event.target.value);
  };

  return (
    <Container>
      <Wrapper>
        <Label>Search after year</Label>
        <Select value={props.selected} onChange={dropdownHandler}>
          <Option value={2017}>2017</Option>
          <Option value={2018}>2018</Option>
          <Option value={2019}>2019</Option>
          <Option value={2020}>2020</Option>
          <Option value={2021}>2021</Option>
        </Select>
      </Wrapper>
    </Container>
  );
};
export default Dropdown;
