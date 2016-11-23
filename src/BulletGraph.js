import React, { Component } from 'react';
import BulletAxis from './BulletAxis';

export default class BulletGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {...this.props.data}
  }

  render() {
    const actualPercent = `${100 * this.state.actualPerformance / this.state.max}%`;
    const poorPercent = `${100 * this.state.poor / this.state.max}%`;
    const goodPercent = `${100 * this.state.good / this.state.max}%`;
    const targetPlacePercentage = `${100 * this.state.target / this.state.max - .25}%`;
    // console.log(this.state);

    return(
      <div>
        <h2 id="title">{this.state.title}
        <br />
          <h5 id="textLabel">{this.state.axisLabel}</h5>
        </h2>
        <svg xmlns="http://www.w3.org/2000/svg" width={this.state.graphWidth} height="60">
          <g>
            <rect width="100%" height="24px" fill="#e6e6e6" />
            <rect width={goodPercent} height="24px" fill="#bfbfbf" />
            <rect width={poorPercent} height="24px" fill="#999999" />
            <rect fill="black" height="8px" width={actualPercent} y="8px" />
            <rect fill="black" height="16px" width="2px" y="4px" x={targetPlacePercentage} />
            <BulletAxis max={this.state.max} divisions={this.state.divisions} />
          </g>
        </svg>
      </div>
    )
  }
}
