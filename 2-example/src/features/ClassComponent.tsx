import * as React from "react";

export interface IAppProps {}

export interface IAppState {
  number: number;
  color: string;
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      number: 1,
      color: "red",
    };
  }

  setColorArrowFunc = () => {
    this.setState((prevState: IAppState) => ({
      color: "red",
    }));
  };
  setColor = () => {
    this.setState((prevState: IAppState) => ({
      color: "blue",
    }));
  };

  // handleClick = () => {
  //     this.setState((prevState: IAppState) => ({
  //     //   number: this.state.number + 1,
  //     }));
  //   };
  public render() {
    return (
      <div className="w-50 m-auto text-center">
        {/* <h1>{this.state.number}</h1>
        {this.state.number === 0 && "Default value"}
        <button disabled={this.state.number>=10} onClick={this.handleClick}>Plus</button> */}
        <h1 style={{color:this.state.color}}>{this.state.color}</h1>
        <button disabled={this.state.color ==="red"} onClick={this.setColorArrowFunc}>Red</button>
        <button disabled={this.state.color ==="blue"} onClick={this.setColor}>Blue</button>
      </div>
    );
  }
}
