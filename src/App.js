import React, { useState } from "react";
import FormWork from "./components/Form/FormWork";
import Slices from "./components/Form/Slices";
const ITEMS_VALUES = [
  {
    id: "e1",
    fullname: "Andrew Robert",
    score: 94,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    fullname: "Pop Cristi",
    score: 799,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    fullname: "Dan Cipri",
    score: 294,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    fullname: "Wok Dan",
    score: 400,
    date: new Date(2019, 5, 12),
  },
];
function App() {
  const [vals, setVals] = useState(ITEMS_VALUES);
  const AddPlayerHandler = (val) => {
    setVals((prevVals) => {
      return [val, ...prevVals];
    });
  };
  return (
    <div>
      <FormWork onAddPlayer={AddPlayerHandler} />
      <Slices items={vals} />
    </div>
  );
}

export default App;
