import React from "react";

interface Iuser {
  name: string;
  age: number;
  address: string;
}

interface Iprops {
  userProps: Iuser;
}

function ListUser(props: Iprops) {
  const { userProps } = props;
  return (
    <div key={userProps.name}>
      <div className="dbox">
        <h4>{userProps.name}</h4>

        <div className="num c1">
          <h4>FULL NAME</h4>
        </div>
      </div>

      <div className="dbox">
        <h4>{userProps.age} years old</h4>

        <div className="num c2">
          <h4>AGE</h4>
        </div>
      </div>

      <div className="dbox">
        <h4>{userProps.address}</h4>

        <div className="num c3">
          <h4>PLACE</h4>
        </div>
      </div>
    </div>
  );
}

export default ListUser;
