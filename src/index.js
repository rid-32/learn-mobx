import React from "react";
import ReactDOM from "react-dom";

// import TodoList from "./TodoList";
// import TodoStore from "./TodoStore";
import TemperatureApp, { TemperatureStore } from './Temperature.js'
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

const t = new TemperatureStore

ReactDOM.render(
  <TemperatureApp temperature={t} />,
  document.getElementById("app")
);

// ReactDOM.render(
//   <TodoList store={new TodoStore()} />,
//   document.getElementById("app")
// );
registerServiceWorker();
