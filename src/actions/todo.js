export const addTodo = (item) => {
  return { type: "ADD_TODO", item: item };
};

export const deleteTodo = (id) => {
  return { type: "DELETE_TODO", id: id };
};
