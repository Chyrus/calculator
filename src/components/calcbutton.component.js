import React, { Component } from 'react';

export default class CalcButton extends Component {

  

  render() {
    return (
      <button className="calcButton">
          { this.props.name }
      </button>
    );
  }
}