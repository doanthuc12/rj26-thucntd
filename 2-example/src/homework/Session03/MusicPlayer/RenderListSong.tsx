// tsrcfull
import React, { Component } from "react";
import "./Musicplayer.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface IUser {
  picture: string;
  name: string;
  singer: string;
  time: string;
}

interface IProps {
  userProps: IUser;
}

class RenderListSong extends Component<IProps> {
  render() {
    return (
      <div className="container w-50">
        <div className="listsong">
          {/* <h1>Most Popular</h1> */}
          <div className="list-item ">
            <div className="media">
              <div className="media-left">
                <div className="song-prefix ">01</div>
                <div className="song-picture" >
                    <img src={this.props.userProps.picture} alt="" />
                </div>
                <div className="song-info">{this.props.userProps.name}</div>
              </div>
              <div className="media-content">{this.props.userProps.singer}</div>
              <div className="media-right">{this.props.userProps.time}</div>
            </div>
          </div>

          <div className="player">
            {/* <h1>Now Playing</h1> */}
          </div>

          {/* <div className="picture">
            <img className="img" src={this.props.userProps.picture} alt="" />
          </div>
          <div className="name">{this.props.userProps.name}</div>
          <div className="singer">{this.props.userProps.name}</div>
          <div className="time">{this.props.userProps.name}</div> */}
        </div>
      </div>
    );
  }
}
export default RenderListSong;
