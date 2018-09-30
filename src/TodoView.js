import React from "react";

class TodoView extends React.Component {
  onToggleCompleted = () => {
    const todo = this.props.todo;
    todo.completed = !todo.completed;
  };

  onRename = () => {
    const todo = this.props.todo;
    todo.task = prompt("Task name", todo.task) || "";
  };

  render() {
    const todo = this.props.todo;
    console.log("TodoView render");
    return (
      <li onDoubleClick={this.onRename}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={this.onToggleCompleted}
        />
        {todo.task}
        {todo.assignee ? <small>{todo.assignee.name}</small> : null}
        {/* <RenderCounter /> */}
      </li>
    );
  }
}

export default TodoView;
