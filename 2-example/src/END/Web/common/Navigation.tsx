import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "../css/styles.css";

function Navigation() {
  return (
    <Nav
      className="p-5 bg-image h-75"
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
        <NavLink className="nav-link" to="/list">
          List Project
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink className="nav-link" to="/formlogin">
          Login
        </NavLink>
      </Nav.Item>
      <Nav.Item>
      
      </Nav.Item>
      
    </Nav>
    
  );
}

export default Navigation;
