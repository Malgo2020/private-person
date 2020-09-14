import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQuery } from "../store/actions";
import Card from "./UICard";
import "./Form.css";

const CheckSavingsForm = () => {
  const [queryInput, setQueryInput] = useState("");
  const query = useSelector((state) => state.query);

  const dispatch = useDispatch();

  const handleQueryChange = (event) => {
    dispatch(setQuery(""));
    setQueryInput(event.target.value);
  };

  const handleCheckQuery = () => {
    dispatch(setQuery(queryInput));
  };

  return (
    <Card>
      <label className="Label">
        Amount
        <input
          className="Input"
          name="query"
          type="number"
          value={queryInput}
          onChange={handleQueryChange}
        />
      </label>
      <button
        className="Button"
        type="button"
        onClick={handleCheckQuery}
        disabled={!queryInput || query}
      >
        Check Savings
      </button>
    </Card>
  );
};

export default CheckSavingsForm;
