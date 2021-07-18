import React from "react";
import Date from "./Date";
import Card from "../Card/Card";
import { Container, Div1, DIV2, H2 } from "./Slice.style";
const Slice = (props) => {
  return (
    <li>
      <Container>
        <Card>
          <Div1>
            <Date date={props.date}></Date>
            <H2>{props.fullname}</H2>
            <DIV2>{props.score}</DIV2>
          </Div1>
        </Card>
      </Container>
    </li>
  );
};
export default Slice;
