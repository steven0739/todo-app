import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { Todo } from "./stores/TodoListStore";

const FormItem = Form.Item;

export default class TodoForm extends Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const data = this.props.Store.todos;
        const key = Object.keys(data).length + 1;
        const newtodo = new Todo(key, values.todo);
        data[key] = newtodo;
        this.props.Store.setTodos(data);
      }
    });
  };

  render() {
    const {
      getFieldDecorator,
      getFieldError,
      isFieldTouched
    } = this.props.form;

    // Only show error after a field is touched.
    const todoError = isFieldTouched("todo") && getFieldError("todo");

    const formItemLayout = {
      labelCol: {
        xs: { span: 2, offset: 0 },
        sm: { span: 2, offset: 0 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 }
      }
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 2,
        },
      },
    };

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          label="Todo"
          validateStatus={todoError ? "error" : ""}
          help={todoError || ""}
          {...formItemLayout}
        >
          {getFieldDecorator("todo", {
            rules: [{ required: true, message: "Please input your todo item!" }]
          })(<Input placeholder="todo item" />)}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Add!
          </Button>
        </FormItem>
      </Form>
    );
  }
}
