import { Todo, TodoListStore } from './TodoListStore';

const todos = {
  1: new Todo(1, 'Justo nunc vel elit nullam taciti sem pretium curabitur'),
  2: new Todo(2, 'Amet velit feugiat lectus potenti ut purus'),
  3: new Todo(3, 'Quisque rutrum consectetur purus tortor mattis curae'),
  4: new Todo(4, 'Tortor lorem est donec scelerisque erat libero'),
  5: new Todo(5, 'Maecenas a phasellus risus luctus feugiat orci nunc interdum'),
  6: new Todo(6, 'Netus proin et leo placerat hac metus dapibus ad ultrices'),
  7: new Todo(7, 'Enim sem bibendum tortor viverra aptent vulputate inceptos vel habitant'),
  8: new Todo(8, 'Pulvinar ut facilisis neque cubilia commodo porta nisl lacus'),
  9: new Todo(9, 'Cras viverra nisl vehicula posuere vel sed consectetur donec')
};

const dummyStore = new TodoListStore();
dummyStore.setTodos(todos);

export { dummyStore };
