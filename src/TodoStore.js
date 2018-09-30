import { autorun, observable, computed } from "mobx";

class TodoStore {
  constructor() {
    autorun(() => console.log(this.report));
  }

  @observable
  todos = [];

  _countCompleted = (acc, item) => (item.completed ? acc + 1 : acc);

  @computed
  get completedTodosCount() {
    return this.todos.reduce(this._countCompleted, 0);
  }

  @computed
  get report() {
    if (!this.todos.length) {
      return "<none>";
    }

    return (
      `Next todo: ${this.todos[0].task}` +
      `. Progress: ${this.completedTodosCount / this.todos.length}`
    );
  }

  addTodo(task) {
    this.todos.push({
      task,
      completed: false,
      assigne: null
    });
  }
}

export default TodoStore;
