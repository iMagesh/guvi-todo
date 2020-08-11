import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            My Todo App
          </a>
        </nav>
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
