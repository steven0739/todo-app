import { observable, computed, action } from 'mobx';

export class Todo {
    id = Math.random();
    @observable title = "";
    @observable finished = false;

    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
}

export class TodoListStore {
    @observable todos = {};
    @computed get todoList() {
        return Object.values(this.todos);
    }

    @computed get unfinishedtodo() {
        return Object.values(this.todos).filter(todo => !todo.finished );
    }

    @action
    setTodos(todos) {
        this.todos = todos
    }

}

export default TodoListStore;
