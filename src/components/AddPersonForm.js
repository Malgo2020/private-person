import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Card from "./UICard";
import { addPerson } from "../store/actions";
import "./Form.css";

const AddPersonForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "age":
        setAge(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    dispatch(addPerson(name, age));
    setName("");
    setAge("");
  };

  return (
    <Card>
      <form className="Form">
        <label className="Label">
          Name
          <input
            className="Input"
            name="name"
            type="text"
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <label className="Label">
          Age
          <input
            className="Input"
            name="age"
            type="number"
            value={age}
            onChange={handleInputChange}
          />
        </label>
        <button
          className="Button"
          type="button"
          onClick={handleSubmit}
          disabled={!name || !age}
        >
          Add new person
        </button>
      </form>
    </Card>
  );
};

export default AddPersonForm;
