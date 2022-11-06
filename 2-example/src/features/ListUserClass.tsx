import React, { Component } from 'react'

interface Iuser {
    name: string;
    age: number;
    address: string;
  }
  
type IProps = {
    userProps: Iuser;
}

class ListUserClass extends Component<IProps> {
  render() {
    return (
        <div key={this.props.userProps.name}>
        <div className="dbox">
          <h4>{this.props.userProps.name}</h4>
  
          <div className="num c1">
            <h4>FULL NAME</h4>
          </div>
        </div>
  
        <div className="dbox">
          <h4>{this.props.userProps.age} years old</h4>
  
          <div className="num c2">
            <h4>AGE</h4>
          </div>
        </div>
  
        <div className="dbox">
          <h4>{this.props.userProps.address}</h4>
  
          <div className="num c3">
            <h4>PLACE</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default ListUserClass