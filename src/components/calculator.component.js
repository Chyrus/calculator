import React, { Component } from 'react';
import CalcButton from "./calcbutton.component"
import CalcScreen from "./calcscreen.component"

export default class Calculator extends Component {

  render() {
    return (
      <div className="calculator">
          <CalcScreen />
          <tr>
          <td><CalcButton /></td>
          <td><CalcButton /></td>
          <td><CalcButton /></td>
          <td><CalcButton /></td>
        </tr>
        <tr>
          <td><CalcButton /></td>
          <td><CalcButton /></td>
          <td><CalcButton /></td>
          <td><CalcButton /></td>
        </tr>
        <tr>
          <td><CalcButton /></td>
          <td><CalcButton /></td>
          <td><CalcButton /></td>
          <td><CalcButton /></td>
        </tr>
        <tr>
          <td><CalcButton /></td>
          <td><CalcButton /></td>
          <td><CalcButton /></td>
          <td><CalcButton /></td>
        </tr>
      </div>
    );
  }
}