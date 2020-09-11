import Person from "../models/Person";

export const ADD_PERSON = "ADD_PERSON";
export const SET_QUERY = "SET_QUERY";
export const CHECK_QUERY = "CHECK_QUERY";

export const addPerson = (name, age) => {
  const newPerson = new Person();
  newPerson.setName(name);
  newPerson.setAge(age);
  return { type: ADD_PERSON, person: newPerson };
};

export const setQuery = (query) => ({ type: SET_QUERY, query: query });

export const checkQuery = (value) => ({ type: CHECK_QUERY, value: value });
