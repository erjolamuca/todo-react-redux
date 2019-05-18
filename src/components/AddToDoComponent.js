import React from "react";
import { connect } from "react-redux";
import { addToDo } from "../actions/index";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import logo from "../logo.svg";

class AddToDoComponent extends React.Component {
  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleCancelButton = () => {
    this.setState({
      text: ""
    });
  };

  handleAddButton = text => {
    this.props.addToDo(text);
    this.setState({
      text: ""
    });

    // localStorage.setItem("toDoList", JSON.stringify(this.state.text));
    // console.log(JSON.stringify(this.state.text));
  };

  render() {
    return (
      <Container>
        <Row className="headerRow">
          <Col md={{ span: 8, offset: 2 }}>
            <p className="title">
              {" "}
              <img src={logo} className="App-logo" alt="logo" />
              To Do App React{" "}
            </p>
          </Col>
        </Row>

        <Row className="addRow">
          <Col md={12}>
            <span>Add To Do:</span>
            <input
              type="text"
              onChange={this.handleChange}
              className="toDoText"
              value={this.state.text}
            />
            <Button
              variant="secondary"
              className="buttonAdd"
              onClick={() => this.handleAddButton(this.state.text)}
            >
              Add
            </Button>
            <Button
              variant="outline-danger"
              className="buttonCancel"
              onClick={this.handleCancelButton}
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(
  null,
  { addToDo }
)(AddToDoComponent);
