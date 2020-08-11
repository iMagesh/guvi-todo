const intialState = [
  { id: 1, title: "Watch a movie on Netflix" },
  { id: 2, title: "Practice React code" },
  { id: 3, title: "Don't sleep" },
];

const todoReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const id = Math.floor(Math.random() * 100) + 1;
      const todoObj = { id: id, title: action.item };
      return [...state, todoObj];
    case "DELETE_TODO":
      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
};

export default todoReducer;
