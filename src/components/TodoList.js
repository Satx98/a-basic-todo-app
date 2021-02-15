const todoList = ({ listOfTodo, toggleComplete }) => (
  <div>
    <ul>
      {listOfTodo.map((todo, index) => (
        <li
          key={index}
          onClick={toggleComplete.bind(this, index)}
          style={{
            cursor: "pointer",
            ...(todo.completed ? { color: "green" } : { color: "red" }),
          }}
        >
          {todo.item}
        </li>
      ))}
    </ul>
  </div>
);

export default todoList;
