import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface Iuser {
  avatar: string;
  code: string;
  email: string;
  id: string;
  name: string;
}

function DetailUser() {
  let params = useParams();
  const [user, setUser] = useState<Iuser>();

  useEffect(() => {
    getUser(params.id);
  }, []);

  const getUser = (userId: string | undefined) => {
    let url =
      "https://634ea35d4af5fdff3a62d2a4.mockapi.io/api/v1/users/" + userId;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <title>Detail User</title>
      <div className="card" style={{ width: "18rem" }}>
        <img src={user?.avatar} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{user?.name}</h5>
          <p className="card-text">{user?.email}</p>
          <Link to={"/formuser/" + user?.id} className="btn btn-primary">
            Update
          </Link>
        </div>
      </div>
    </>
  );
}

export default DetailUser;
