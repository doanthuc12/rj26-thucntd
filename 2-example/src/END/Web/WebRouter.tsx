import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/styles.css";
import Navigation from "./common/Navigation";
import Home from "./components/Home";
import FormLogin from "./components/FormLogin";
import ListProject from "./components/ListProject";
import CreateProject from "./components/CreateProject";

function RoutesEx() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<FormLogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/formlogin" element={<FormLogin />} />
        <Route path="/list" element={<ListProject />} />
        <Route path="/create" element={<CreateProject />} />

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
