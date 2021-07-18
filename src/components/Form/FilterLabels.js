import React from "react";
import Filter from "./Filter";
const FilterLabels = (props) => {
  const filterValues = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
  ];
  for (const val of props.vals) {
    const valMonth = val.date.getMonth();
    filterValues[valMonth].value += val.score;
  }
  return <Filter values={filterValues} />;
};
export default FilterLabels;
