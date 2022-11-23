import { Dispatch } from "react";

interface IAction {
  type: string;
  payload?: any;
}

//Func Call API
export const getUsersAsync = (): any => {
  return (dispatch: Dispatch<any>) => {
    dispatch(getUsers_Pendding());
    const URL_USER = "https://634ea35d4af5fdff3a62d2a4.mockapi.io/api/v1/users";

    fetch(URL_USER, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(getUsers_Success(data));
      })
      .catch((error) => {
        dispatch(getUsers_Error(error));
      });
  };
};

const getUsers_Pendding = (data?: object): IAction => ({
  type: "GET_PENDDING", // ACTION TYPE
  payload: data, // PARAMETER
});

const getUsers_Success = (data?: object): IAction => ({
  type: "GET_SUCCESS", // ACTION TYPE
  payload: data, // PARAMETER
});

const getUsers_Error = (data?: object): IAction => ({
  type: "GET_ERROR", // ACTION TYPE
  payload: data, // PARAMETER
});
