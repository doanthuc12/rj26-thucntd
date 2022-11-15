// tsrcfull

import * as React from "react";
import { AiFillLike } from "react-icons/ai";
// import { AiFillDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
// import { AiOutlineDislike } from "react-icons/ai";
// import { AiFillStar } from 'react-icons/ai';
// import { AiOutlineStar } from "react-icons/ai";
import Rating from "./Rating";
import Carousel from "./Carousel";

export interface IAppProps {}

export interface IAppState {
  color: string;
  like: boolean;
  dislike: boolean;
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      color: "none",
      like: false,
      dislike: false,
    };
  }
  // setlikeaction = () => {
  //   this.setState((prevState: IAppState) => ({
  //     color: "blue",
  //   }));
  // };

  // setdislikeaction = () => {
  //   this.setState((prevState: IAppState) => ({
  //     color: "red",
  //   }));
  // };
  setLike = () => {
    this.setState({
      like: !this.state.like,
      color: "blue",
    });
  };
  
  public render() {
    return (
      <div className="card w-50 m-auto text-center bg-light">
        <Carousel />
        <div className="card-body">
          <h3 className="card-title">Ratting</h3>
          <button
            type="button"
            className="btn btn-muted bg-light"
            style={{ color: this.state.color }}
            onClick={this.setLike}
          >
            {this.state.like ? <AiFillLike /> : <AiOutlineLike />}
            {this.state.like ? "Like" : "Vote"}
          </button>

          <Rating />
        </div>
      </div>
    );
  }
}
