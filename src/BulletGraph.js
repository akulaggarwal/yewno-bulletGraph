import React, { Component } from 'react';
import data from './data';

export default class BulletGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...data
    }
  }

  render() {

    const goodPercent = `${100* this.state.good / this.state.max}%`;
    // console.log(this.state);

    return(
    <div>
      <h5 id="title">BulletChart</h5>
      <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="200">
        <g>
          <rect width="100%" height="24px" fill="#e6e6e6" />
          <rect width={goodPercent} height="24px" fill="#bfbfbf" />
        </g>
      </svg>
    </div>)
  }
}
