import { createContextStore } from "easy-peasy";

const store = createContextStore({
  todos: [],
  addTodo: action((state, component) => {
    state.todos.push({component: component, completed: false});
  })
});

export default store;
