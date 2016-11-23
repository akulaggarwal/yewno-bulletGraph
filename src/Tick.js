import React, {Component} from "react";

export default class Tick extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return(
      <g>
        <line x1={`${this.props.x1}%`} y1={this.props.y1}
          x2={`${this.props.id}%`} y2={this.props.y2} strokeWidth="2" stroke="black" />
        <text x={`${this.props.id - 3}%`} y={this.props.y} fontFamily="Verdana"
          fontSize="14"> {this.props.id} </text>
      </g>
    )
  }
}


{/* <Tick id={tickVal} x1={tickVal} y1={this.state.y1}
 x2={tickVal} y2={this.state.y2} x={`${tickVal - 10}`} y={this.state.yText} /> */}


 {/* <line x1="20" y1={this.state.y1} x2="20" y2={this.state.y2} strokeWidth="2" stroke="black" />
 <text x={`${20 - 10}`} y={this.state.yText} fontFamily="Verdana" fontSize="14"> 20 </text> */}
