import React from "react";
import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";

import TodoView from "./TodoView";

@observer
class TodoList extends React.Component {
  onNewTodo = () => {
    this.props.store.addTodo(prompt("Enter a new todo:", "coffee plz"));
  };

  render() {
    const store = this.props.store;
    console.log("TodoList render");

    return (
      <div>
        {store.report}
        <ul>
          {store.todos.map((todo, idx) => (
            <TodoView todo={todo} key={idx} />
          ))}
        </ul>
        {store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null}
        <button onClick={this.onNewTodo}>New Todo</button>
        <small> (double-click a todo to edit)</small>
        {/* <RenderCounter /> */}
        <DevTools />
      </div>
    );
  }
}

export default TodoList;
