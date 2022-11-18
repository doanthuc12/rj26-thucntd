import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import FormUser from "./FormUser";
import ListUser from "./ListUser";
import "./Css/styles.css";
import DetailUser from "./DetailUser";

function RoutesEx() {
  return (
    <BrowserRouter>
      {/* NAVIGATION */}
      <ul className={"navigation"}>
        <li className={"link"}>
          <Link to="/formuser">Form User</Link>
        </li>
        <li className={"link"}>
          <Link to="/listuser">List User</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/formuser" element={<FormUser />} />
        <Route path="/listuser" element={<ListUser />} />
        <Route path="/detail/:id" element={<DetailUser/>}/>
        <Route path="/formuser/:id" element={<FormUser />} />
        {/* NO MATCH ROUTE */}
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>404 Page not found 😂😂😂</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesEx;
