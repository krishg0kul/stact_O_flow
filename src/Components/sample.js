import React, { Component } from "react";

export default class sample extends Component {
  passingValuetoProps = receivingProps => {
    this.setState({ receivedValue: receivingProps });
  };
  render() {
    return (
      <div>
        <p>hi</p>
        <ChildComponent childFunction={this.passingValuetoProps} />
      </div>
    );
  }
}
