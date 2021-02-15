import React, { useState } from "react";

import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

import Store from "./store/todo-state";

import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <>
      <Store.Provider>
        <InputField />
        <TodoList />
      </Store.Provider>
    </>
  );
};

export default App;
