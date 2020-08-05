import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import axios from "axios";

class App extends React.Component {
  state = {
    items: [],
  };

  componentDidMount = () => {
    axios
      .get("http://localhost:8000/tasks")
      .then((response) => {
        this.setState({
          items: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  addTodo = (itemStr) => {
    const id = Math.floor(Math.random() * 100) + 1;
    const todoObj = { id: id, title: itemStr };
    this.setState({
      items: [...this.state.items, todoObj],
    });
  };

  deleteTodo = (id) => {
    const updatedItems = [...this.state.items].filter((item) => item.id !== id);
    this.setState({ items: updatedItems });
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            My Todo App
          </a>
        </nav>
        <TodoForm addTodo={this.addTodo} />
        <TodoList tasks={this.state.items} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
