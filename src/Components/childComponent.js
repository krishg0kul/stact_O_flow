import React from "react";

export default class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.props.childFunction(this.state.inputValue);
    });
  };
  render() {
    return (
      <div>
        <input
          name='inputValue'
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
