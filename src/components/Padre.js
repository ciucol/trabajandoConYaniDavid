import React, { Component } from "react";
import Hijo from "./Hijo";

export default class Padre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  add = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  res = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  zero = () => {
    this.setState({
      counter: 98,
    });
  };

  render() {
    return (
      <div>
        <h2>Mi nombre es {this.props.name}</h2>
        <Hijo
          contador={this.state.counter}
          add={this.add}
          res={this.res}
          aCero={this.zero}
        />
      </div>
    );
  }
}
