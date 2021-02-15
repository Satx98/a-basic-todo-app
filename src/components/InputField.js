import React, { useState } from "react";

import Store from '../store/todo-state';

const InputField = (props) => {
  const [todoInputValue, setTodoInputValue] = useState("");

  const addTodo = Store.useStoreActions((actions) => actions.addTodo);

  return (
    <>
      <input
        type="text"
        value={todoInputValue}
        onChange={(e) => setTodoInputValue(e.target.value)}
      />
      <button onClick={() => addTodo(todoInputValue)}>Add Todo</button>
    </>
  );
};

export default InputField;
