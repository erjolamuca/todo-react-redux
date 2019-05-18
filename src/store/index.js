import { createStore, combineReducers } from "redux";
import ToDoReducer from "../reducers/ToDoReducer";

const reducers = combineReducers({
  todo: ToDoReducer
});

const store = createStore(
  reducers,
  JSON.parse(localStorage.getItem("toDo")) === null
    ? {}
    : {
        todo: { todos: JSON.parse(localStorage.getItem("toDo")), filter: "ALL" }
      }
);

export default store;
