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
      console.log(i);
      const division = this.state.max / this.state.divisions * i;
      divsArr.push(division);
    }
    console.log(divsArr);

    const ticks = divsArr.map( (tickVal)=> {
      return <Tick id={tickVal} key={tickVal} x1={tickVal} y1={this.state.y1}
       x2={tickVal} y2={this.state.y2} x={`${tickVal - 10}`} y={this.state.yText} />
    });

    this.setState({ticks})
  }

  render() {
    console.log(this.state);
    return(
      <g>
        {/* <line x1="20" y1={this.state.y1} x2="20" y2={this.state.y2} strokeWidth="2" stroke="black" />
        <text x={`${20 - 10}`} y={this.state.yText} fontFamily="Verdana" fontSize="14"> 20 </text> */}
        {this.state.ticks}
      </g>
    )
  }
}
