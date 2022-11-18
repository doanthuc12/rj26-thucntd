import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "./Css/formUser.css";

interface Iuser {
  userName: string;
  userAvatar: string;
}

const defaultValue: Iuser = {
  userName: "",
  userAvatar: "",
};
function FormUser() {
  //user {name, avatar,}
  const [user, setUser] = useState<Iuser>(defaultValue);
  let params = useParams();
  useEffect(() => {
    getUser(params.id);
  }, []);

  const getUser = (userId: string | undefined) => {
    let url =
      "https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/users/" + userId;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser({userName : data?.name , userAvatar:data?.avatar})
        // setUserName(data?.name)
        // setUserAvatar(data?.avatar)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(user);
    let data = {
      name: user.userName,
      avatar: user.userAvatar,
    };
    if(params.id){
      updateUser(data, params.id)
    }else{
      postUser(data)
    }
  };
  const updateUser = (data : any, userId : string) => {
    // call api postUser
    let url = "https://634ea35d4af5fdff3a62d2a4.mockapi.io/api/v1/users/" + userId;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };
  const postUser = (data: any) => {
    let url = "https://634ea35d4af5fdff3a62d2a4.mockapi.io/api/v1/users";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === ("checkbox" || "radio")) {
      setUser({ ...user, [e.target.name]: e.target.checked });
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
    // console.log(e.target.value);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="col">
          <label>Name</label>
          <input
            type="text"
            name="userName"
            placeholder="text here"
            value={user?.userName ? user.userName : ""}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label>Avatar</label>
          <input
            type="text"
            name="userAvatar"
            value={user?.userAvatar ? user.userAvatar : ""}
            onChange={handleChange}
          />
        </div>
        <br />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default FormUser;
