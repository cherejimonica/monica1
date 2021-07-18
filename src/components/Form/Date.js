import React from "react";
import { Month, Wrapper1, Year, Day } from "./Date.style";
const Date = (props) => {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  return (
    <Wrapper1>
      <Day>{day}</Day>
      <Month>{month}</Month>
      <Year>{year}</Year>
    </Wrapper1>
  );
};
export default Date;
