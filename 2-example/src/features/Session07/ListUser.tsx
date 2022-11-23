import React, { useEffect, useState } from "react";
import "./Css/listUser.css";
import { useNavigate } from 'react-router-dom';

// const listUser = [
//   {
//     name: "Eric Strosin",
//     avatar: "avatar 13",
//     id: "13",
//   },
//   {
//     name: "Wade Macejkovic",
//     avatar: "avatar 14",
//     id: "14",
//   },
// ];

function ListUser() {
  const [listUser, setListUser] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getListUser();
  }, []);

  const getListUser = () => {
    let url =
      "https://634ea35d4af5fdff3a62d2a4.mockapi.io/api/v1users?page=1&limit=10";

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setListUser(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleDelete = (userId: number) => {
    console.log("delete", userId);
    let url =
      "https://634ea35d4af5fdff3a62d2a4.mockapi.io/api/v1/users/" + userId;

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        getListUser();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleDetail = (userId: number) => {
    console.log(userId);
    navigate('/detail/' + userId)
  };
  return (
    <>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col w-25">Name</th>
            <th scope="col w-25">Avatar</th>
            <th scope="col w-25">Email</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {listUser.map((user: any) => {
            return (
              <tr key={`user-${user.id}`}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.avatar}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="btn-detail"
                    onClick={() => handleDetail(user.id)}
                  >
                    Detail
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ListUser;
