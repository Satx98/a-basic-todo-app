import React, { useState } from "react";

const InputField = (props) => {
  const [todoInputValue, setTodoInputValue] = useState("");

  return (
    <>
      <input
        type="text"
        value={todoInputValue}
        onChange={(e) => setTodoInputValue(e.target.value)}
      />
      <button onClick={() => props.clicked(todoInputValue)}>Add Todo</button>
    </>
  );
};

export default InputField;
