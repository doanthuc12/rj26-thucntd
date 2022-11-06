import React, { Component } from "react";
import "./Blockui2.css";
import android from "../picture/android.png";
import apple from "../picture/apple.png";
import dropbox from "../picture/dropbox.png";
import telegram from "../picture/telegram.png";
import instagram from "../picture/instagram.png";

interface Props {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
}

class Blockui2 extends Component<Props> {
  render() {
    return (
      <div key={this.props.text1}>
        <div className="theme">
          <div className="container" m-50>
            <div className="col">
              <div className="left">
                <img src={android} alt="android" />
                <div className="text">{this.props.text1}</div>
              </div>
              <div className="right">
                <div className="progress">
                  <div className="color c1"></div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="left">
                <img src={apple} alt="apple" />
                <div className="text">{this.props.text2}</div>
              </div>
              <div className="right">
                <div className="progress">
                  <div className="color c2"></div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="left">
                <img src={dropbox} alt="dropbox" />
                <div className="text">{this.props.text3}</div>
              </div>
              <div className="right">
                <div className="progress">
                  <div className="color c3"></div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="left">
                <img src={telegram} alt="telegram" />
                <div className="text">{this.props.text4}</div>
              </div>
              <div className="right">
                <div className="progress">
                  <div className="color c4"></div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="left">
                <img src={instagram} alt="instagram" />
                <div className="text">{this.props.text5}</div>
              </div>
              <div className="right">
                <div className="progress">
                  <div className="color c5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blockui2;
