import React from "react";
import { connect } from "react-redux";
import { deleteAll } from "../actions/index";
import { searchToDo, setFilter } from "../actions/index";
import SingleToDoComponent from "./SingleToDoComponent";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function filterToDos(todos, type) {
  switch (type) {
    case "ALL":
      return todos;
    case "COMPLETED":
      return todos.filter(todo => todo.completed === true);
    case "ACTIVE":
      return todos.filter(todo => todo.completed === false);
    default:
      return todos;
  }
}

class ListComponent extends React.Component {
  state = {
    search: ""
  };

  handleChange = async e => {
    await this.setState({
      search: e.target.value
    });
    this.props.searchToDo(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row className="searchRow">
          <Col md={12}>
            <span>Search:</span>
            <input
              type="text"
              className="searchText"
              onChange={e => this.handleChange(e)}
              value={this.state.search}
            />
            <Button
              variant="outline-danger"
              className="buttonDelete"
              onClick={() => this.props.deleteAll()}
            >
              Delete All
            </Button>
          </Col>
        </Row>

        <Row className="filterRow">
          <Col md={4}>
            <Button
              variant="link"
              onClick={() => this.props.setFilter("ACTIVE")}
            >
              Show active
            </Button>
          </Col>

          <Col md={4}>
            <Button
              variant="link"
              onClick={() => this.props.setFilter("COMPLETED")}
            >
              Show Completed
            </Button>
          </Col>

          <Col md={4}>
            <Button variant="link" onClick={() => this.props.setFilter("ALL")}>
              Show All
            </Button>
          </Col>
        </Row>

        <Row>
          <ListGroup>
            {this.props.toDoList.map((toDo, index) => {
              return (
                <SingleToDoComponent
                  key={toDo.id}
                  toDo={toDo}
                  index={index + 1}
                />
              );
            })}
          </ListGroup>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    toDoList: filterToDos(state.todo.todos, state.todo.filter)
  };
};

export default connect(
  mapStateToProps,
  { deleteAll, searchToDo, setFilter }
)(ListComponent);
