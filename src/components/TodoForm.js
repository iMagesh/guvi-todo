import React, { Component } from "react";
import { addTodo } from "../actions/todo";
import { connect } from "react-redux";

class TodoForm extends Component {
  state = { inputVal: "" };

  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      inputVal: e.target.value,
    });
  };

  handleSubmit = () => {
    this.props.addTodo(this.state.inputVal);
    this.setState({
      inputVal: "",
    });
  };

  render() {
    return (
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          onChange={this.handleChange}
          value={this.state.inputVal}
        ></input>
        <button
          className="btn btn-primary btn-block"
          onClick={this.handleSubmit}
        >
          Add
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: (item) => {
      dispatch(addTodo(item));
    },
  };
};

export default connect(null, mapDispatchToProps)(TodoForm);
