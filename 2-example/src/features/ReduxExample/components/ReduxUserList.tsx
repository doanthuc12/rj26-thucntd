import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsersAsync,getUsersAsync } from "../action/userAction";
import { useNavigate } from 'react-router-dom';

import '../Css/listUser.css'

interface IState {
  userReducers: IUserReducer;
}

interface IUserReducer {
  users: Array<IUser>;
  loading: boolean;
  error: null;
}
interface IUser {
  name: string;
  avatar: string;
  email: string;
  id: number;
}

function ReduxUserList() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state: IState) => state.userReducers);
  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(getUsersAsync());
  }, []);
  const handleDelete = (userId: string | number) => {
    console.log(userId);
    dispatch(deleteUsersAsync(userId));
  }
  const handleDetail = (userId: string | number) => {
    console.log(userId);
    navigate('/detail/' + userId);
  }
  return (
    <>
      {/* {loading && <p>Loading...</p>} */}
      {/* {users?.map((user) => (
        <p key={user.id}>user.name</p>
      ))} */}
      
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
          {users.map((user: any) => {
            return (
              <tr key={`user-${user.id}`}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td className="text-break">{user.avatar}</td>
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

export default ReduxUserList;
