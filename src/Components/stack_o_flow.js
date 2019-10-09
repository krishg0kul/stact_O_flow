import React, { Component } from "react";

export default class stack_o_flow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qustion: {
        qus: "",
        ans: []
      }
    };
  }
  render() {
    return <div className='container'></div>;
  }
}
