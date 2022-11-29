import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "../Css/styles.css";

function Navigation() {
  return (
    <Nav
      className="p-5 bg-image"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/premium-vector/new-soft-pastel-blur-gradient-background_92086-57.jpg?w=2000)",
        height: "100px",
      }}
      justify
      variant="tabs"
      defaultActiveKey="/home"
    >
      <Nav.Item>
        <NavLink className="nav-link" to="/home">
          Home Page
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink className="nav-link" to="/formuser">
          Form User
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink className="nav-link" to="/listuser">
          List User
        </NavLink>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
