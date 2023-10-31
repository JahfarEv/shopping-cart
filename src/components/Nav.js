import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import {Badge} from "react-bootstrap"
import {FaShoppingCart} from 'react-icons/fa'
import {FiLogIn} from 'react-icons/fi'
import {RiAdminFill} from 'react-icons/ri'
import { useState } from "react";
import { hover } from "@testing-library/user-event/dist/hover";
import '../components/Nav.css'


function NavScroll({size}) {
  const[searchItem,setSearchItem]=useState("")
  const navigate=useNavigate()
  return (
    <Navbar expand="lg" className="bg-dark hvr">
      <Container fluid>
        <Navbar.Brand  className=" a" onClick={()=>navigate('/')} style={{color:'#F3DA99'}}
        
        
        >PET FOODS</Navbar.Brand>
        <Navbar.Toggle className="bg-white" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px"}}
            navbarScroll
          >
            <Nav.Link className=" a" style={{color:'#F3DA99'}} onClick={()=>navigate('/')}>Home</Nav.Link>
            <Nav.Link className=" a" style={{color:'#F3DA99'}} onClick={()=>navigate('/all')}>All</Nav.Link>
            <Nav.Link className="a" style={{color:'#F3DA99'}} onClick={()=>navigate('/dog')}>Dog</Nav.Link>
            <Nav.Link className="a" style={{color:'#F3DA99'}} onClick={()=>navigate('/cat')}>Cat</Nav.Link>
          </Nav>
          <Form className="d-flex">
         
           
<Nav.Link onClick={()=>navigate('/cart')}>
<FaShoppingCart color='#F3DA99' fontSize="25px"/>
<Badge>{}</Badge>
</Nav.Link>
<Dropdown.Menu style={{minWidth:370}}>
<span style={{padding: 10}}>Cart is Empty!</span>
</Dropdown.Menu>
            <Nav.Link onClick={()=>navigate('/signin')} className="mx-3"  ><FiLogIn color="#F3DA99" fontSize="25px"/></Nav.Link>
            <Nav.Link onClick={()=>navigate('/adminLogin')} className="mx-3"><RiAdminFill color="#F3DA99" fontSize="25px"/></Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
