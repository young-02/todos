import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { TodoState } from "./types";

export const initialState: TodoState = {
  todoList: [
    {
      id: "1",
      content: "redux ",
      completed: false,
      editing: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<ITodoItem>) => {
        state.todoList.push(action.payload);
      },
      prepare: (content: string) => {
        const id = nanoid();
        return {
          payload: {
            id: id,
            content: content,
            completed: false,
            editing: false,
          },
        };
      },
    },
    checkTodo(state, action: PayloadAction<{ id: string }>) {
      const id = action.payload.id;
      const todo = state.todoList.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editModeTodo(state, action: PayloadAction<{ id: string }>) {
      const id = action.payload.id;

      for (const todo of state.todoList) {
        if (todo.id === id) continue;
        if (todo.editing === true) todo.editing = false;
      }
      const todo = state.todoList.find((todo) => todo.id === id);
      if (todo) {
        todo.editing = !todo.editing;
      }
    },
    editTodo(state, action: PayloadAction<{ id: string; content: string }>) {
      const id = action.payload.id;
      const content = action.payload.content;

      const todo = state.todoList.find((todo) => todo.id === id);
      if (todo) {
        todo.content = content;
      }
    },
    deleteTodo(state, action: PayloadAction<{ id: string }>) {
      const id = action.payload.id;
      const filteredTodos = state.todoList.filter((todo) => todo.id !== id);
      state.todoList = filteredTodos;
    },
  },
});

export const { addTodo, checkTodo, editTodo, deleteTodo, editModeTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
