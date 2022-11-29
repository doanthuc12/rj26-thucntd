import React, { useEffect, useState } from "react";
import "../css/listUser.css";
import { useNavigate } from "react-router-dom";


function ListProject() {
  const [listUser, setListUser] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getListUser();
  }, []);

  const getListUser = () => {
    let url = "https://634ea35d4af5fdff3a62d2a4.mockapi.io/api/v1users";

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
  const handleCreate = () => {
    console.log();
    navigate("/create" );
  };
  return (
    <>
      <button className="btn-create" onClick={handleCreate}>
        Create
      </button>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col w-50">ID</th>
            <th scope="col w-50">Name Project</th>

            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {listUser.map((user: any) => {
            return (
              <tr key={`user-${user.id}`}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>

                <td>
                  {/* <button
                    className="btn-detail"
                    onClick={() => handleDetail(user.id)}
                  >
                    Detail
                  </button> */}
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

export default ListProject;
