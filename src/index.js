import React from "react";
import ReactDOM from "react-dom";

import TodoList from "./TodoList";
import TodoStore from "./TodoStore";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

ReactDOM.render(
  <TodoList store={new TodoStore()} />,
  document.getElementById("app")
);
registerServiceWorker();
