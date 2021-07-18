import React from "react";
import { Container, Wrapper, Div1, Div2 } from "./FilterColumn.style";
const FilterColumn = (props) => {
  let ColumnHeight = "0%";
  if (props.maxValue > 0) {
    ColumnHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <Container>
      <Wrapper>
        <Div1 style={{ height: ColumnHeight }}></Div1>
      </Wrapper>
      <Div2>{props.label}</Div2>
    </Container>
  );
};
export default FilterColumn;
