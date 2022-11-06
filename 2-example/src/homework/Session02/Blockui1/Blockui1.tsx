import React, { Component } from "react";
import "./Blockui1.css";

interface Props {
  text1: string;
  percent1: string;
  text2: string;
  percent2: string;
  text3: string;
  percent3: string;
  text4: string;
  percent4: string;
  text5: string;
  percent5: string;
  text6: string;
  percent6: string;
  text7: string;
  percent7: string;
}

class Blockui1 extends Component<Props> {
  render() {
    return (
      <div key={this.props.text1}>
        <div className="row">
          <div className="left l1">
            <h6 className="text">{this.props.text1}</h6>
          </div>
          <div className="right">
            <div className="percent p1">
              <h6 className="text">{this.props.percent1}</h6>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="left l2">
            <h6 className="text">{this.props.text2}</h6>
          </div>
          <div className="right">
            <div className="percent p2">
              <h6 className="text">{this.props.percent2}</h6>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="left l3">
            <h6 className="text">{this.props.text3}</h6>
          </div>
          <div className="right">
            <div className="percent p3">
              <h6 className="text">{this.props.percent3}</h6>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="left l4">
            <h6 className="text">{this.props.text4}</h6>
          </div>
          <div className="right">
            <div className="percent p4">
              <h6 className="text">{this.props.percent4}</h6>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="left l5">
            <h6 className="text">{this.props.text5}</h6>
          </div>
          <div className="right">
            <div className="percent p5">
              <h6 className="text">{this.props.percent5}</h6>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="left l6">
            <h6 className="text">{this.props.text6}</h6>
          </div>
          <div className="right">
            <div className="percent p6">
              <h6 className="text">{this.props.percent6}</h6>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="left l7">
            <h6 className="text">{this.props.text7}</h6>
          </div>
          <div className="right">
            <div className="percent p7">
              <h6 className="text">{this.props.percent7}</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blockui1;
