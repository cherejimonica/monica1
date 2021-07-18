import React, { useState } from "react";
import Form from "./Form";
import { Container, Button } from "./FormWork.style";

const FormWork = (props) => {
  const [isWriting, setIsWriting] = useState(false);
  const saveDataHandler = (writeData) => {
    const fullForm = {
      ...writeData,
      id: Math.random().toString(),
    };
    props.onAddPlayer(fullForm);
    setIsWriting(false);
  };
  const startWriting = () => {
    setIsWriting(true);
  };
  const stopWriting = () => {
    setIsWriting(false);
  };

  return (
    <Container>
      {!isWriting && <Button onClick={startWriting}>Add player</Button>}
      {isWriting && (
        <Form onSaveData={saveDataHandler} onCancel={stopWriting} />
      )}
    </Container>
  );
};
export default FormWork;
