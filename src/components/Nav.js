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


function NavScroll({size}) {
  const navigate=useNavigate()
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container fluid>
        <Navbar.Brand  className="text-white" onClick={()=>navigate('/')}
        
        
        >PET FOODS</Navbar.Brand>
        <Navbar.Toggle className="bg-white" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="text-white" onClick={()=>navigate('/')}>Home</Nav.Link>
            <Nav.Link className="text-white" onClick={()=>navigate('/all')}>All</Nav.Link>
            <Nav.Link className="text-white" onClick={()=>navigate('/dog')}>Dog</Nav.Link>
            <Nav.Link className="text-white" onClick={()=>navigate('/cat')}>Cat</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"/>
            <Button className="text-white" variant="outline-primary mx-3">Search</Button>
<Dropdown.Toggle onClick={()=>navigate('/cart')}>
<FaShoppingCart color='white' fontSize="25px"/>
<Badge>{}</Badge>
</Dropdown.Toggle>
<Dropdown.Menu style={{minWidth:370}}>
<span style={{padding: 10}}>Cart is Empty!</span>
</Dropdown.Menu>
            <Dropdown.Toggle onClick={()=>navigate('/signin')} className="mx-3"  ><FiLogIn/></Dropdown.Toggle>
            
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
