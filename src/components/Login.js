import React, { useContext, useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import { shopContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import Brand from '../components/Category/img/Color logo - no background.png'
import { hover } from '@testing-library/user-event/dist/hover';


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
        toast.success('login success')
        navigate('/')
        
      }
      else{
        toast.error('Pls fill  !')
        navigate('/signin')
      }
    }
  return (
    <div >
       <Container fluid style={{backgroundColor:'black'}}>
       <h1 className='d-flex align-items-center justify-content-center font-weight-bold'><img src={Brand} style={{width:'200px'}}/></h1>
       <div className='d-flex align-items-center justify-content-center'>
      
       <span class="border border-gray " style={{marginBottom:'5px',borderRadius:'10px'}}>
<Form className='align-items-center mt-5 p-3' style={{color:'white'}} >
<h3>Log in</h3>

  <Form.Group className="mb-3" controlId="formBasicEmail" style={{marginBottom:"20px"}}>
    <Form.Label>User name</Form.Label>
    <Form.Control type="text" placeholder="Enter user name" ref={loginName} />
    <Form.Text className="text-light">
                  We'll never share your email with anyone else.
                </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword" style={{marginBottom:"20px"}}>
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" ref={loginPass} />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={handleClick}>
    Submit
  </Button>
  
  
  <Button onClick={()=>navigate('/signup')} variant="outline-white bg-primary ms-2" type="submit" style={{background:'black',border:'none'}}>
   Create account
  </Button>
</Form>
</span>
</div>
</Container>

<MDBFooter className='text-center text-white mt-2' style={{ backgroundColor: 'gray' }}>
      <MDBContainer className='p-4'></MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          PetFoods
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Login



