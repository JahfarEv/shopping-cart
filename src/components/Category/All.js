import React, { useContext } from 'react'
import { Items } from '../Items'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import { useNavigate } from 'react-router-dom';
import { shopContext } from '../../App';
import Nav from '../Nav'
import img1 from '../slider/banner.webp'
import 'bootstrap-icons/font/bootstrap-icons.css'




const All = () => {
  const{ product}=useContext(shopContext);
  const navigate=useNavigate();


  return (
    <div>
    <Nav/>
    <img src={img1} style={{ width: "100%" }} />
    <Container >
   
    
   <div className='row justify-content-center'>

{product.map(item=>(
    <Card style={{ width: '20rem',height:'auto' }} key={item.id}
    className={`'bg-light-black text-light':'bg-light text-black'} text-center p-0 overflow-hidden mx-auto mb-4 `} >

     
      <Card.Body>
      <Card.Img variant="top" src={item.productImage} style={{height:'300px'}}/>
        <Card.Title style={{textOverflow: 'ellipsis', overflow:'hidden', whiteSpace:'nowrap'}}>{item.productName}</Card.Title>
        
        <Card.Title>
        <i class="bi bi-currency-rupee"></i><span className='h4'>{item.price}</span>
        </Card.Title>
        <Button onClick={()=>navigate(`/view/${item.id}`)} className={`d-flex align-item-center m-auto border-0`}>
        
        View Item</Button>
      </Card.Body>
    </Card>
    ))
}</div>
    </Container>
    </div>
  )
}

export default All
