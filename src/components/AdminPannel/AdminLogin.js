
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';


const AdminLogin = () => {
  return (
    <div>
       <Container style={{width:'50%',marginTop:'80px'}}>
       <h1>Login</h1>

<Form >

  <Form.Group className="mb-3" controlId="formBasicEmail" style={{marginBottom:"20px"}}>
    <Form.Label>User name</Form.Label>
    <Form.Control type="text" placeholder="Enter user name" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword" style={{marginBottom:"20px"}}>
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  
</Form>
</Container>
    </div>
  )
}

export default AdminLogin
