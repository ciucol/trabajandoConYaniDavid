import React, { Component } from "react";

export default class Hijo extends Component {
  render() {
    return (
      <div>
        <hr />
        <h2>Esta parte le pertenece al hijo</h2>
        <h3>El gran contador</h3>
        <button onClick={this.props.add}>+</button>
        <p>{this.props.contador}</p>
        <button onClick={this.props.res}>-</button>

        <p>
          <button onClick={this.props.aCero}>Reset</button>
        </p>
        <hr />
      </div>
    );
  }
}
