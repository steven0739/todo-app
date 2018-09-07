import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer 
export default class TodoListView extends Component {
    render() {
        return(
            <div>
                {this.props.todoListStore.todoList.map(todo => <TodoView todo={todo} key={todo.id}/>)}
            </div>
        );
    }
}

const TodoView = observer(({todo}) =>
    <li>
        <input
            type="checkbox"
            checked={todo.finished}
            onClick={() => todo.finished = !todo.finished}
        />{todo.title}
    </li>
)
