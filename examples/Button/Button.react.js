// Button.react.js
import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button className="btn test" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}
export default Button;
