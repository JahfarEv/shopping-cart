import React, { useContext, useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import { shopContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {user,setLogin}=useContext(shopContext)
    const navigate=useNavigate()
    const loginName=useRef()
    const loginPass=useRef()
    const handleClick=()=>{
      const newLoginName=loginName.current.value
      const newLoginPass=loginPass.current.value
      const findName=user.find((usr)=>usr.newName===newLoginName)
      const findPass=user.find((usr)=>usr.newPass===newLoginPass)
      if(findName && findPass){
        setLogin(true)
         alert('login success')
        navigate('/')
        
      }
      else{
        alert ('pls login')
      }
    }
  return (
    <div>
       <Container style={{width:'500px',marginTop:'80px'}}>

<Form >

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>User name</Form.Label>
    <Form.Control type="text" placeholder="Enter user name" ref={loginName} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" ref={loginPass} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={handleClick}>
    Submit
  </Button>
</Form>
</Container>
    </div>
  )
}

export default Login



