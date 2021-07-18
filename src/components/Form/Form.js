import React, { useState } from "react";
import { Wrapper1, Wrapper2, Button, Each, Label, Input } from "./Form.style";
const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredScore, setEnteredScore] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const changeNameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const changeScoreHandler = (event) => {
    setEnteredScore(event.target.value);
  };
  const changeDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitButton = (event) => {
    event.preventDefault();

    const fullForm = {
      fullname: enteredName,
      score: enteredScore,
      date: new Date(enteredDate),
    };
    props.onSaveData(fullForm);
    setEnteredName("");
    setEnteredScore("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitButton}>
      <Wrapper1>
        <Each>
          <Label>Full name</Label>
          <Input type="text" value={enteredName} onChange={changeNameHandler} />
        </Each>
        <Each>
          <Label>Score</Label>
          <Input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredScore}
            onChange={changeScoreHandler}
          />
        </Each>
        <Each>
          <Label>Date of registration</Label>
          <Input
            type="date"
            min="2015-01-01"
            max="2021-12-31"
            value={enteredDate}
            onChange={changeDateHandler}
          />
        </Each>
      </Wrapper1>
      <Wrapper2>
        <Button type="button" onClick={props.onCancel}>
          Exit
        </Button>
        <Button type="submit">Add player</Button>
      </Wrapper2>
    </form>
  );
};
export default Form;
