import { SET_QUERY, ADD_PERSON } from "./actions";

const initialState = {
  query: "",
  people: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUERY:
      return { ...state, query: action.query };
    case ADD_PERSON:
      return { ...state, people: state.people.concat(action.person) };
    default:
      return state;
  }
};

export default rootReducer;
