import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "./store/reducers";

import MainPage from "./components/MainPage";
import "./App.css";

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
