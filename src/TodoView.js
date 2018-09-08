import React, { Component } from "react";
import { observer } from "mobx-react";
import "./TodoView.css";
import { List, Checkbox } from "antd";

@observer
export default class TodoView extends Component {
  render() {
    const { todo } = this.props;

    return (
      <List.Item>
        <Checkbox onChange={() => (todo.finished = !todo.finished)}>
          <span className={todo.finished ? "strike todo" : "todo"}>{todo.title}</span>
        </Checkbox>
      </List.Item>
    );
  }
}
