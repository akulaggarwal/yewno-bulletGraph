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

    const primaryPercent = `${100 * this.state.primaryMeasure / this.state.max}%`;
    const poorPercent = `${100 * this.state.poor / this.state.max}%`;
    const goodPercent = `${100* this.state.good / this.state.max}%`;
    const targetPlacePercentage = `${100* this.state.target / this.state.max}%`;
    // console.log(this.state);

    return(
    <div>
      <h5 id="title">BulletChart</h5>
      <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="200">
        <g>
          <rect width="100%" height="24px" fill="#e6e6e6" />
          <rect width={goodPercent} height="24px" fill="#bfbfbf" />
          <rect width={poorPercent} height="24px" fill="#999999" />
          <rect fill="black" height="8px" width={primaryPercent} y="8px" />
          <rect fill="black" height="16px" width="2px" y="4px" x={targetPlacePercentage} />
        </g>
      </svg>
    </div>)
  }
}
