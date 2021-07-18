import React from "react";
import { Container } from "./Filter.style";
import FilterColumn from "./FilterColumn";
const Filter = (props) => {
  const dataValues = props.values.map((value) => value.value);
  const maximum = Math.max(...dataValues);
  return (
    <Container>
      {props.values.map((value) => (
        <FilterColumn
          key={value.label}
          value={value.value}
          maxValue={maximum}
          label={value.label}
        />
      ))}
    </Container>
  );
};
export default Filter;
