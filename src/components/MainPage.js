import React from "react";
import { useSelector } from "react-redux";

import AddPersonForm from "./AddPersonForm";
import DisplayPerson from "./PersonDisplay";
import CheckSavingsForm from "./CheckSavingsForm";

const MainPage = () => {
  const people = useSelector((state) => state.people);

  return (
    <div className="AppScreen">
      <h4>Add new person:</h4>
      <AddPersonForm />

      {people.length > 0 ? (
        <>
          <CheckSavingsForm />
          <h4>Manage people:</h4>
          {people.map((person) => (
            <DisplayPerson person={person} />
          ))}
        </>
      ) : (
        <h4>Please add new person!</h4>
      )}
    </div>
  );
};

export default MainPage;
