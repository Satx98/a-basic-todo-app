import { Fragment } from "react";
import Store from "../store/todo-state";

const TodoList = ({ toggleComplete }) => {
  const listOfTodo = Store.useStoreState((state) => state.todos);
  const {
    toggleTodo,
    toggleTwoSecondsLater,
  } = Store.useStoreActions((actions) => ({ ...actions }));
  return (
    <div>
      <ul>
        {listOfTodo.map((todo, index) => (
          <Fragment key={index}>
            <li
              onClick={toggleTodo.bind(this, index)}
              style={{
                cursor: "pointer",
                ...(todo.completed ? { color: "green" } : { color: "red" }),
              }}
            >
              {todo.item}
            </li>
            <button onClick={toggleTwoSecondsLater.bind(this, index)}>
              After 2 secs
            </button>
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
