import React, { useState } from "react";

interface Iuser {
  userName: string;
  useAvatar: string;
  userAddress: string;
}

const defaultValue: Iuser = {
  userName: "",
  useAvatar: "",
  userAddress: "",
};
function FormExF() {
  //user {name, avatar, address}
  const [user, setUser] = useState<Iuser>(defaultValue);

  //   const [userName, setUserName] = useState<string>();
  //   const [useAvatar, setUserAvatar] = useState<string>();
  //   const [userAddress, setUserAddress] = useState<string>();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(user);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.name);
    // switch (e.target.name) {
    //   case "userName":
    //     setUserName(e.target.value);
    //     break;
    //   case "useAvatar":
    //     setUserAvatar(e.target.value);
    //     break;
    //   case "userAddress":
    //     setUserAddress(e.target.value);
    //     break;

    //   default:
    //     break;
    // }
    // let tempUser = { ...user, [e.target.name]: e.target.value };
    // console.log(tempUser);
    if (e.target.type === "checkbox" || "radio") {
      setUser({ ...user, [e.target.name]: e.target.checked });
    } else setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
          type="text"
          name="userName"
          placeholder="text here"
          value={userName ? userName : ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="useAvatar"
          value={useAvatar ? useAvatar : ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="userAddress"
          placeholder="text here"
          value={userAddress ? userAddress : ""}
          onChange={handleChange}
        /> */}

        <input
          type="text"
          name="userName"
          placeholder="text here"
          value={user?.userName ? user.userName : ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="useAvatar"
          value={user?.useAvatar ? user.useAvatar : ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="userAddress"
          placeholder="text here"
          value={user?.userAddress ? user.userAddress : ""}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default FormExF;
