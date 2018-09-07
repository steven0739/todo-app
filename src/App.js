import React, { Component } from "react";
import "./App.css";
import TodoListView from "./TodoListView";
import { Row, Col } from "antd";
import { Layout } from "antd";

class App extends Component {
  render() {
    const { Header, Content } = Layout;
    return (
      <div>
        <Layout>
          <Header><h1 className="header">My Todo List</h1></Header>
          <Content>
            <Row style={{ marginBottom: 40 }}></Row>
            <Row type="flex" justify="center">
              <Col xs={20} sm={20} md={20} lg={20} xl={12}>
                <TodoListView todoListStore={this.props.todoListStore} />
              </Col>
            </Row>
            <Row style={{ marginBottom: 40 }}></Row>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
