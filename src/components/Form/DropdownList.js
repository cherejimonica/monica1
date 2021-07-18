import React from "react";
import { H2, Ul } from "./DropdownList.style";
import Slice from "./Slice";
const DropdownList = (props) => {
  if (props.items.length === 0) {
    return <H2>Results no found</H2>;
  }

  return (
    <Ul>
      {props.items.map((val) => (
        <Slice
          key={val.id}
          fullname={val.fullname}
          score={val.score}
          date={val.date}
        />
      ))}
    </Ul>
  );
};
export default DropdownList;
