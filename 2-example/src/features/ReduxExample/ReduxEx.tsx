import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReduxUserForm from "./components/ReduxUserForm";
import ReduxUserList from "./components/ReduxUserList";
import store from "./store";
import Home from "./components/Home";
import Navigation from "./common/Navigation";
import ReduxDetails from "./components/ReduxDetails";
import "../ReduxExample/Css/styles.css";

function ReduxEx() {
  return (
    <Provider store={store} >
      <BrowserRouter >
        {/* NAVIGATION */}
        <Navigation />
        {/* <ul className={"navigation"}>
        <li className={"link"}>
          <Link to="/home">Home Page</Link>
        </li>
          <li className={"link"}>
            <Link to="/formuser">Form User</Link>
          </li>
          <li className={"link"}>
            <Link to="/listuser">List User</Link>
          </li>
        </ul> */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/listuser" element={<ReduxUserList />} />
          <Route path="/formuser" element={<ReduxUserForm />} />
          <Route path="/detail/:id" element={<ReduxDetails />} />
          <Route path="/formuser/:id" element={<ReduxUserForm />} />
          <Route
            path="*"
            element={
              <Home />
              // <main style={{ padding: "1rem" }}>
              //   <p>404 Page not found 😂😂😂</p>
              // </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default ReduxEx;
