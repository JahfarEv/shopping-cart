import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/esm/Container';
import '../App.css'
import { useContext, useRef } from 'react';
import { shopContext } from '../App';
import { Navigate, useNavigate } from 'react-router-dom';

function Registration() {
 const navigate= useNavigate()
  const{user,setUser}=useContext(shopContext)
  const nName=useRef()
  const nPass=useRef()

  const handleClick=()=>{
    const name=nName.current.value;
    const pass=nPass.current.value;
    const value={newName:name,newPass:pass}
    setUser([...user,value]);
    console.log(value);
    if(!name||!pass){
      alert("pls fill your field")
    }
    else{
      navigate("/signin")
    }

  }

  return (
    
    <Container style={{width:'500px',marginTop:'80px'}}>

    <Form >
    <Form.Group className="mb-3" id="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="User Name" ref={nName} />
        <Form.Text className="text-muted">
          We'll never share your name with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" id="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" id="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={nPass}/>
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={handleClick} >
        Submit
      </Button>
    </Form>
    </Container>
   
  );
}

export default Registration;