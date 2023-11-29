import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import "../components/Nav.css";
import brand from "./Category/img/White logo - no background.png";
import { useContext } from "react";
import { shopContext } from "../App";

function NavScroll() {
  const { login } = useContext(shopContext);

  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className=" hvr" >
      <Container fluid>
        <Navbar.Brand
          className="a"
          onClick={() => navigate("/")}
          style={{ color: "#F3DA99" }}
        >
          <img src={brand} alt="brandlogo" width="100px" height="30px" style={{cursor:'pointer'}} />
        </Navbar.Brand>
        <Navbar.Toggle className="bg-white" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              className=" a"
              style={{ color: "white" }}
              onClick={() => navigate("/")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className=" a"
              style={{ color: "white" }}
              onClick={() => navigate("/all")}
            >
              All
            </Nav.Link>
            
            <Nav.Link
              className="a"
              style={{ color: "white" }}
              onClick={() => navigate("/dog")}
            >
              Dog
            </Nav.Link>
            <Nav.Link
              className="a"
              style={{ color: "white" }}
              onClick={() => navigate("/cat")}
            >
              Cat
            </Nav.Link>
          </Nav>
          <Nav className="d-flex">
            <Nav.Link onClick={() => navigate("/cart")} title="cart">
              <FaShoppingCart color="white" fontSize="25px" />
            </Nav.Link>
            <Dropdown.Menu style={{ minWidth: 370 }}>
              <span style={{ padding: 10 }}>Cart is Empty!</span>
            </Dropdown.Menu>
            {login ? (
              <Nav.Link
                onClick={() => navigate("/signin")}
                className="mx-3"
                title="Logout"
              >
                <IoMdLogOut color="white" fontSize="25px" />
              </Nav.Link>
            ) : (
              <Nav.Link
                onClick={() => navigate("/signin")}
                className="mx-0"
                title="Login"
              >
                <FiLogIn color="white" fontSize="25px" />
              </Nav.Link>
            )}
            <Nav.Link
              onClick={() => navigate("/adminLogin")}
              className="mx-0"
              title="admin"
            >
              <RiAdminFill color="white" fontSize="25px" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
