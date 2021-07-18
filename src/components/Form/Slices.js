import React, { useState } from "react";
import { Container } from "./Slices.style";
import Dropdown from "./Dropdown";
import DropdownList from "./DropdownList";
import FilterLabels from "./FilterLabels";
import Card from "../Card/Card";
const Slices = (props) => {
  const [selectedYear, setSelectedYear] = useState("2019");
  const changeYear = (year) => {
    setSelectedYear(year);
  };

  const filterByYear = props.items.filter((val) => {
    return val.date.getFullYear().toString() === selectedYear;
  });
  return (
    <Container>
      <Card>
        <Dropdown selected={selectedYear} onChangeYear={changeYear} />
        <FilterLabels vals={filterByYear} />
        <DropdownList items={filterByYear} />
      </Card>
    </Container>
  );
};
export default Slices;
