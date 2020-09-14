import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Card from "./UICard";
import "./PersonDisplay.css";

const DisplayPerson = (props) => {
  const { person } = props;
  const checkQuery = useSelector((state) => state.toBeChecked);
  const query = useSelector((state) => state.query);

  const [savingsMessage, setSavingsMessage] = useState("");
  const [paycheckMessage, setPaycheckMessage] = useState("");

  const [paycheckCount, setPaycheckCount] = useState(0);
  const [isRed, setIsRed] = useState(false);

  useEffect(() => {
    if (checkQuery) {
      const result = person.hasEnoughSavings(query);
      setIsRed(!result);
      result
        ? setSavingsMessage(`${person.getName()} has enough savings`)
        : setSavingsMessage(`${person.getName()} does not have enough savings`);
    }
  }, [checkQuery, query, person, paycheckCount]);

  const givePaycheck = () => {
    person.givePaycheck();
    setIsRed(false);
    setPaycheckCount(paycheckCount + 1);
    paycheckCount > 0
      ? setPaycheckMessage(`${paycheckCount + 1} paychecks have been given.`)
      : setPaycheckMessage("Paycheck has been given.");
  };

  return (
    <Card>
      <div className="Row">
        <p>
          {person.getName()} ({person.getAge()})
        </p>
        {checkQuery && savingsMessage && (
          <p className={isRed ? "Red" : "Green"}>{savingsMessage}</p>
        )}
      </div>
      <div className="Row">
        <button className="Button" type="button" onClick={givePaycheck}>
          Give Paycheck
        </button>
        {paycheckMessage && <p>{paycheckMessage}</p>}
      </div>
    </Card>
  );
};

export default DisplayPerson;
