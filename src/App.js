import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import Todo from "./components/Todo";
import { Provider } from "react-redux";
import store from "./app/store";
function App() {
  return (
    <Provider store={store}>
      <div style={{ margin: 10 }}>
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
