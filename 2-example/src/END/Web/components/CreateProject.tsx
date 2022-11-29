import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/createProject.css";
import { useNavigate } from "react-router-dom";

interface Iuser {
  userName: string;
}

const defaultValue: Iuser = {
  userName: ""
};
function CreateProject() {
  const [user, setUser] = useState<Iuser>(defaultValue);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  let naviget = useNavigate();
  let params = useParams();
  useEffect(() => {
    getUser(params.id);
    if (params.id) {
      setIsSubmit(true);
    }
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
        setUser({ userName: data?.name });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(user);
    naviget("/list");
    let data = {
      name: user.userName,
    };
    if (params.id) {
      updateUser(data, params.id);
    } else {
      postUser(data);
    }
  };
  const updateUser = (data: any, userId: string) => {
    // call api postUser
    let url =
      "https://634ea35d4af5fdff3a62d2a4.mockapi.io/api/v1/users/" + userId;
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
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="col">
          <label>Name Project</label>
          <input
            type="text"
            name="userName"
            placeholder="text here"
            value={user?.userName ? user.userName : ""}
            onChange={handleChange}
          />
        </div>

        <br />

        <button>{isSubmit ? "Update" : "Create"}</button>
      </form>
    </div>
  );
}

export default CreateProject;
