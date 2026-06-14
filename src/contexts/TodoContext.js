import { createContext, useContext } from "react";

// This is our global todo box.
// Components can read todos and use todo functions from here.
export const TodoContext = createContext({
  todos: [],

  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleComplete: () => {},
});

// Custom hook for easy access to TodoContext.
export const useTodo = () => {
  return useContext(TodoContext);
};

// Provider gives todo data/functions to child components.
export const TodoProvider = TodoContext.Provider;