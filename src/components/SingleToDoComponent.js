import React from "react";
import { connect } from "react-redux";
import { removeToDo, completeToDo } from "../actions/index";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

class SingleToDoComponent extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <ListGroup.Item>
              <Row>
                <Col md={{ md: 7, offset: 1 }} className="listItemColToDo">
                  <Button
                    className="itemCompleteButton"
                    onClick={() => this.props.completeToDo(this.props.toDo.id)}
                  >
                    <i className="fa fa-check" />
                  </Button>

                  <span
                    style={{
                      textDecoration: this.props.toDo.completed
                        ? "line-through"
                        : "none"
                    }}
                  >
                    {" "}
                    {this.props.index}.{this.props.toDo.text}{" "}
                    {this.props.toDo.completed === true ? "(completed)" : ""}{" "}
                  </span>
                </Col>
                <Col md={4} className="listItemColDelete">
                  <Button
                    variant="btn btn-outline-danger"
                    className="itemDeleteButton"
                    onClick={() => this.props.removeToDo(this.props.toDo.id)}
                  >
                    <i className="fa fa-trash" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(
  null,
  { removeToDo, completeToDo }
)(SingleToDoComponent);
