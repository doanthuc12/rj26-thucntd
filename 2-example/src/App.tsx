import React from "react";
// import ClassComponent from "./features/ClassComponent";
// import logo from "./image/thuc.jpg";
// import "./App.css";
// import ListUser from "./features/ListUser"
// import ListUserClass from "./features/ListUserClass"
// import Basic1 from "./homework/Session02/Basic1ss02/Basic1";
// import Basic2 from "./homework/Session02/Basic2ss02/Basic2";
// import Blockui1 from "./homework/Session02/Blockui1/Blockui1"
// import Blockui2 from "./homework/Session02/Blockui2/Blockui2";
// import Blockui3 from "./homework/Session02/Blockui3/Blockui3";

// import IconComponent from "./homework/Session03/IconComponent"

// import TabsContent from "./homework/Session03/TabsComponent/TabsContent"
import Accor from "./homework/Session03/Accordion/Accor"
// import ListSong from "./homework/Session03/MusicPlayer/ListSong";

// interface Iuser {
//   name: string;
//   age: number;
//   address: string;
// }

// interface Iprops{
//   userProps: Iuser
// }

function App() {
  // const listUser: Array<Iuser> = [
  //   {
  //     name: "Doan Thuc",
  //     age: 21,
  //     address: "Tp.BMT",
  //   },
  //   {
  //     name: "Huy Vu",
  //     age: 18,
  //     address: "Tp.BMT",
  //   },
  //   {
  //     name: "Tue Tam",
  //     age: 21,
  //     address: "Quang Tri",
  //   },
  // ];
  return (
    // <div>
    //   {/* <div className="box">
    //     <div className="up">
    //       <div className="info ">
    //         <img src={logo} alt="anh dai dien" className="rounded-circle" />

    //         <div className="name">
    //           <h1 className="bg-secondary text-white">PROFILE</h1>
    //           <h4 className="bg-secondary text-white">
    //             Foreign Language Student
    //           </h4>
    //         </div>
    //       </div>
    //     </div> */}

    //     {/* <div className="user">
    //       {listUser?.map((user, index) => {
    //         return (
    //           // <ListUser key={index} userProps={user}/>
    //           <ListUserClass key={index} userProps={user}/>

    //         );
    //       })}
    //     </div> */}

    //   </div>
    <div>
      {/* <Basic1 /> */}

      {/* <Blockui1 text1={"BANDWIDTH"} percent1={"20%"} 
      text2={"STORAGE"} percent2={"50%"} 
      text3={"USERS"} percent3={"70%"}
      text4={"VISITORS"} percent4={"30%"}
      text5={"EMAILS"} percent5={"45%"}
      text6={"BASIC"} percent6={"80%"}
      text7={"OTHERS"} percent7={"37%"} */}
      {/* /> */}

      {/* <Blockui2 text1={"HTML"}
        text2={"CSS"}
        text3={"PHP"}
        text4={"Java"}
        text5={".Net"}
      /> */}

      {/* <Blockui3
        text1={"Facebook"}
        num1={"5,00,00 Likes"}
        text2={"Twitter"}
        num2={"40,000 Tweets"}
        text3={"Google +"}
        num3={"4,60,000 Plus"}
        text4={"Pinterest"}
        num4={"34,000 Pins"}
      /> */}
      {/* <Basic2/> */}
      {/* <ClassComponent/> */}
      {/* <IconComponent/> */}
      {/* <TabsContent/> */}
      <Accor/>
      {/* <ListSong/> */}
    </div>
  );
}

export default App;
