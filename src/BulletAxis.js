import React, {Component} from 'react';

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
    this.setState({poop: 'p'})
  }

  render() {
    console.log(this.state);
    return(
      <g>
        <line x1="20" y1={this.state.y1} x2="20" y2={this.state.y2} strokeWidth="2" stroke="black" />
        <text x={`${20 - 10}`} y={this.state.yText} fontFamily="Verdana" fontSize="14"> 20 </text>
      </g>
    )
  }
}
