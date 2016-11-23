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
        <text x={`${this.props.x}%`} y={this.props.y} fontFamily="Verdana"
          fontSize="14" textAnchor={this.props.anchor}> {this.props.id} </text>
      </g>
    )
  }
}
