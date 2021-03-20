import React, { Component } from 'react';

export default class CalcScreen extends Component {

  render() {
    let {result} = this.props;
    return (
        <div className="calcScreen">
            <p>{result}</p>
        </div>
)
    ;
}
}