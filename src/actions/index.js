import uuid from "uuid";

export const addToDo = text => {
  return {
    type: "ADD_TODO",
    id: uuid(),
    text,
    completed: false
  };
};

export const removeToDo = id => {
  return {
    type: "REMOVE_TODO",
    id
  };
};

export const deleteAll = () => {
  return {
    type: "DELETE_ALL"
  };
};

export const searchToDo = value => {
  return {
    type: "SEARCH_TODO",
    value
  };
};

export const completeToDo = id => {
  return {
    type: "COMPLETE_TODO",
    id
  };
};

export const setFilter = filter => {
  return {
    type: "SET_FILTER",
    payload: filter
  };
};
