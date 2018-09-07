import { observable, computed, action } from 'mobx';

export class Todo {
    id = Math.random();
    @observable title = "";
    @observable finished = false;

    constructor(title) {
        this.title = title;
    }
}

export class TodoListStore {
    @observable todos = {};
    @computed get todoList() {
        return Object.values(this.todos);
    }

    @action
    setTodos(todos) {
        this.todos = todos
    }
}

export default TodoListStore;
