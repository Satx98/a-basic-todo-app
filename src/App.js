import React, { useState } from "react";

import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addInputHandler = (todoItem) => {
    setTodoList((curState) => [
      ...curState,
      { item: todoItem, completed: false },
    ]);
  };

  const toggleCompleteTodo = (index) => {
    setTodoList((curState) => {
      const newState = [...curState];
      newState[index] = {
        ...newState[index],
        completed: !newState[index].completed,
      };
      return newState;
    });
  };

  return (
    <>
      <InputField clicked={addInputHandler} />
      <TodoList listOfTodo={todoList} toggleComplete={toggleCompleteTodo} />
    </>
  );
};

export default App;
