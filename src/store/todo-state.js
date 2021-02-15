import { createContextStore, action, thunk } from "easy-peasy";

const store = createContextStore({
  todos: [],
  addTodo: action((state, todoItem) => {
    state.todos.push({item: todoItem, completed: false});
  }),
  toggleTodo: action((state, index) => {
    state.todos[index].completed = !state.todos[index].completed;
  }),
  toggleTwoSecondsLater: thunk(async (actions, index) => {
    setTimeout(() => {
      actions.toggleTodo(index);
    }, 2000)
  }),
});

export default store;
