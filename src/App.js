import React, { Component } from "react";
import "./App.css";
import TodoListView from "./TodoListView";
import { Row, Col, Layout, Form } from "antd";
import TodoForm from "./TodoForm";

class App extends Component {
  render() {
    const { Header, Content } = Layout;
    const MyTodoForm = Form.create()(TodoForm);
    return (
      <div>
        <Layout>
          <Header>
            <h1 className="header">My Todo List</h1>
          </Header>
          <Content>
            <Row style={{ marginBottom: 40 }} />
            <Row type="flex" justify="center">
              <Col xs={20} sm={20} md={20} lg={20} xl={12}>
                <TodoListView todoListStore={this.props.todoListStore} />
              </Col>
            </Row>
            <Row style={{ marginBottom: 40 }} />
            <Row type="flex" justify="center">
              <Col xs={20} sm={20} md={20} lg={20} xl={12}>
                <MyTodoForm Store={this.props.todoListStore} />
              </Col>
            </Row>
            <Row style={{ marginBottom: 40 }} />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
