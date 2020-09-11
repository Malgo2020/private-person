import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQuery, checkQuery } from "../store/actions";
import Card from "./UICard";
import "./Form.css";

const CheckSavingsForm = (props) => {
  const query = useSelector((state) => state.query);
  const querySet = useSelector((state) => state.toBeChecked);

  const dispatch = useDispatch();

  const handleQueryChange = (event) => {
    dispatch(checkQuery(false));
    dispatch(setQuery(event.target.value));
  };

  const handleCheckQuery = () => {
    dispatch(checkQuery(true));
  };

  return (
    <Card>
      <label className="Label">
        Check amount:
        <input
          className="Input"
          name="query"
          type="number"
          value={query}
          onChange={handleQueryChange}
        />
      </label>
      <button
        className="Button"
        type="button"
        onClick={handleCheckQuery}
        disabled={!query || querySet}
      >
        Check Savings
      </button>
    </Card>
  );
};

export default CheckSavingsForm;
