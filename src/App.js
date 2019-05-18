import React from "react";
import "./App.css";
import AddToDoComponent from "./components/AddToDoComponent";
import ListComponent from "./components/ListComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
      <Col md={{ span: 6, offset: 3 }}>
        <Container className="mainContainer">
          <Row>
            <AddToDoComponent />
            <ListComponent />
          </Row>
        </Container>
      </Col>
    </div>
  );
}

export default App;
