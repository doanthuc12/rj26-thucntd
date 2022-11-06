import React, { Component } from "react";
import "./Blockui3.css";
import facebook from "../picture/facebook.png";
import twitter from "../picture/twitter.png";
import googleplus from "../picture/google-plus.png";
import pinterest from "../picture/pinterest.png";


interface Props {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  num1:string;
  num2:string;
  num3:string;
  num4:string;
}

class Blockui3 extends Component<Props> {
  render() {
    return (
      <div key={this.props.text1}>
        <div className="main">
        <div className="row r1">
            <div className="img">
             <img src={facebook} alt="facebook icon"/>
            </div>
             <div className="text">
                 <h2>{this.props.text1}</h2>
                 <h4>{this.props.num1}</h4>
             </div>
         </div>
     
         <div className="row r2">
             <div className="img">
              <img src={twitter} alt="twitter icon"/>
             </div>
              <div className="text">
                  <h2>{this.props.text2}</h2>
                  <h4>{this.props.num2}</h4>
              </div>
          </div>

          <div className="row r3">
            <div className="img">
             <img src={googleplus} alt="google-plus icon"/>
            </div>
             <div className="text">
                 <h2>{this.props.text3}</h2>
                 <h4>{this.props.num3}</h4>
             </div>
         </div>

         <div className="row r4">
            <div className="img">
             <img src={pinterest} alt="pinterest icon"/>
            </div>
             <div className="text">
                 <h2>{this.props.text4}</h2>
                 <h4>{this.props.num4}</h4>
             </div>
         </div>
    </div>
      </div>
    );
  }
}

export default Blockui3;
