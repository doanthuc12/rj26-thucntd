import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./store";
import Home from "./components/Home";
import Navigation from "./common/Navigation";
import "../ReduxExample/Css/styles.css";
import LoginForm from "./components/LoginForm";

function ReduxWeb() {
  return (
    <Provider store={store} >
      <BrowserRouter >
        {/* NAVIGATION */}
        <Navigation />
        
        <Routes>
          <Route path="/home" element={<Home />} />
          {/* <Route path="/listuser" element={<ReduxUserList />} /> */}
          <Route path="/loginform" element={<LoginForm />} />
          {/* <Route path="/detail/:id" element={<ReduxDetails />} />
          <Route path="/formuser/:id" element={<ReduxUserForm />} /> */}
          <Route
            path="*"
            element={
              // <Home />
              <main style={{ padding: "1rem" }}>
                <p>404 Page not found 😂😂😂</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default ReduxWeb;
