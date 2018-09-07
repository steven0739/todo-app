import React, { Component } from "react";
import { observer } from "mobx-react";
import { List } from "antd";
import TodoView from './TodoView';

@observer
export default class TodoListView extends Component {
  renderTodo = item => <TodoView todo={item} />

  render() {
    const { todoList } = this.props.todoListStore;

    return <List bordered dataSource={todoList} renderItem={this.renderTodo} />;
  }
}
