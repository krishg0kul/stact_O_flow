import React, { Component } from "react";
import Nav from "./newNav";
import { Button, Row, Col, Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import ChildComponent from "./childComponent";
export default class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qustion: [],
      modalOpen: false,
      currentQuestion: -1,
      currentAnswer: "",
      receivedValue: ""
    };
    this.passingValuetoProps = this.passingValuetoProps.bind(this);
  }

  sampleFunction = index => {
    let { qustion } = this.state;
    this.setState({
      modelOpen: true,
      currentQuestion: index
    });
  };
  onModalValueChange = obj => {
    var set = {
      qus: obj,
      ans: []
    };
    let { qustion } = this.state;
    qustion.push(set);
    this.setState({ qustion });
    console.log(this.state.qustion);
  };

  passingValuetoProps = receivingProps => {
    this.setState({ receivedValue: receivingProps });
  };

  render() {
    return (
      <div>
        {/* NavBar */}
        <div className='container-fluid'>
          <Nav stateHandler={this.onModalValueChange} />
          {this.state.receivedValue}
          <ChildComponent childFunction={this.passingValuetoProps} />
        </div>
        {/* BODY */}
        <Container>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              {this.state.qustion ? (
                <span>
                  {this.state.qustion.map((item, index) => (
                    <div>
                      <ul>
                        <li id='qus_body'>{item.qus}</li>
                        <Button
                          className='btn-danger'
                          onClick={() => {
                            this.sampleFunction(index);
                          }}
                        >
                          Ans
                        </Button>
                      </ul>
                      <br />
                      <br />
                      <Modal
                        show={this.state.modelOpen}
                        onHide={() => {
                          this.setState({ modelOpen: false });
                        }}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Say Your Answer</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form.Control
                            type='text'
                            placeholder='Enter Here'
                            onChange={event => {
                              this.setState({
                                currentAnswer: event.target.value
                              });
                            }}
                          />
                          <br />
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            onClick={() => {
                              this.setState({ modelOpen: false });
                            }}
                          >
                            cancel
                          </Button>
                          <Button
                            onClick={() => {
                              const q = this.state.qustion;
                              q[this.state.currentQuestion].ans.push(
                                this.state.currentAnswer
                              );
                              this.setState({
                                modelOpen: false,
                                qustion: q,
                                currentAnswer: "",
                                currentQuestion: -1
                              });
                            }}
                          >
                            save
                          </Button>
                        </Modal.Footer>
                      </Modal>
                      <br />
                    </div>
                  ))}
                </span>
              ) : null}
            </Col>
            <Col sm={2}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
