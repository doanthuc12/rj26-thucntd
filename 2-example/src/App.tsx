import React from "react";
import logo from "./image/thuc.jpg";
import "./App.css";

interface Iuser {
  name: string;
  age: number;
  address: string;
}

function App() {
  // const num : number = 1
  // const arr : Array<number> = [1,2,3];
  const listUser: Array<Iuser> = [
    {
      name: "Doan Thuc",
      age: 21,
      address: "Tp.BMT",
    },
    {
      name: "Huy Vu",
      age: 18,
      address: "Tp.BMT",
    },
    {
      name: "Tue Tam",
      age: 21,
      address: "Quang Tri",
    },
  ];
  // const renderArr = null

  return (
    <div>
      <div className="box">
        <div className="up">
          <div className="info ">
            <img src={logo} alt="anh dai dien" className="rounded-circle" />

            <div className="name">
              <h1 className="bg-secondary text-white">PROFILE</h1>
              <h4 className="bg-secondary text-white">
                Foreign Language Student
              </h4>
            </div>
          </div>
        </div>

        <div className="user">
          {listUser?.map((user: Iuser) => {
            return (
              <div key={user.name}>
                <div className="dbox">
                  <h4>{user.name}</h4>

                  <div className="num c1">
                    <h4>FULL NAME</h4>
                  </div>
                </div>

                <div className="dbox">
                  <h4>{user.age} years old</h4>

                  <div className="num c2">
                    <h4>AGE</h4>
                  </div>
                </div>

                <div className="dbox">
                  <h4>{user.address}</h4>

                  <div className="num c3">
                    <h4>PLACE</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
