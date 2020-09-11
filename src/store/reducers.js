import { SET_QUERY, ADD_PERSON, CHECK_QUERY } from "./actions";

const initialState = {
  query: "",
  people: [],
  toBeChecked: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUERY:
      return { ...state, query: action.query };
    case ADD_PERSON:
      return { ...state, people: state.people.concat(action.person) };
    case CHECK_QUERY:
      return { ...state, toBeChecked: action.value };
    default:
      return state;
  }
};

export default rootReducer;
