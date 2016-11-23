import React, {Component} from 'react';
import Tick from './Tick';

export default class BulletAxis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      y1: "25",
      y2: "35",
      yText: "50"
    };
  }

  componentWillMount() {
    const divsArr = [];
    for(let i = this.state.divisions; i >= 0; i--) {
      const division = this.state.max / this.state.divisions * i;
      divsArr.push(division);
    }

    const ticks = divsArr.map( (tickVal)=> {
      let anchor = "middle";
      if (this.state.max === tickVal) {
        anchor = "end";
      }
      if (tickVal === 0) {
        anchor = "start";
      }

      return <Tick id={tickVal} key={tickVal} x1={tickVal} y1={this.state.y1}
       x2={tickVal} y2={this.state.y2} x={tickVal} y={this.state.yText} anchor={anchor}/>
    });

    this.setState({ticks})
  }

  render() {
    return(
      <g>{this.state.ticks}</g>
    )
  }
}
