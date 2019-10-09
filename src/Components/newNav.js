import React, { Component } from "react";
import Logo from "../images/logo.png";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default class newNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: [],
      isModelOpen: false
    };
  }

  render() {
    return (
      <div className='jumbotron' id='Nav'>
        <div className='row'>
          <div className='col-sm-3 col-md-3'>
            <img src={Logo} id='logo' alt='logo' />
          </div>
          <div className='col-sm-7 col-md-7' id='N_title'></div>
          <div className='col-sm-2 col-md-2' id='N_q_but'>
            <button id='q_but'>
              <button
                className='btn btn-primary'
                onClick={() => {
                  this.setState({ isModelOpen: true });
                }}
              >
                Askme
              </button>
              <Modal
                show={this.state.isModelOpen}
                onHide={() => {
                  this.setState({ isModelOpen: false });
                }}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Ask Your Qustion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Control
                    type='text'
                    placeholder='Enter Here'
                    onChange={event => {
                      this.setState({ msg: event.target.value });
                    }}
                  />
                  <br />
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    onClick={() => {
                      this.setState({ isModelOpen: false });
                    }}
                  >
                    cancel
                  </Button>
                  <Button
                    onClick={() => {
                      this.setState({ isModelOpen: false });
                      this.props.stateHandler(this.state.msg);
                    }}
                  >
                    save
                  </Button>
                </Modal.Footer>
              </Modal>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
