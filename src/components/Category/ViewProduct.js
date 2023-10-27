import React, { useContext } from 'react'
import { shopContext } from '../../App'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Card, Container } from 'react-bootstrap'
import { Items } from '../Items'
import {BsCartPlus} from 'react-icons/bs'
import { toast } from 'react-toastify'

const ViewProduct = () => {
  const naviagate=useNavigate()
    const {product}=useContext(shopContext)
    const{id}=useParams()
    const products = product.filter((item)=>item.id===parseInt(id))

    const{cart,setCart,login}=useContext(shopContext)
    const addToCart=()=>{
      if(login){
        const[newData]=products;
        const duplicate=cart.filter((item)=>item.id===id);
        if (duplicate.length > 0 ) {
         toast.warning(' Product alredy existed')
    }
    else{
      setCart(prevState=>[...prevState,newData])
      toast.success("Product added your cart")
    }
  }
  else{
    toast.warning('pls login')
    naviagate('/signin')
    
  }
}
  return (
    <div>
        <Container>
   <div className='row justify-content-center'>

{products.map(item=>(
    <Card key={item.id} style={{ width: '18rem',height:'auto' }}
    className={`'bg-light-black text-light':'bg-light text-black'} text-center p-0 overflow-hidden shadow mx-auto mb-4`}>

      <Card.Img variant="top" src={item.productImage} style={{height:'300px'}}/>
      <Card.Body>
        <Card.Title style={{textOverflow: 'ellipsis', overflow:'hidden', whiteSpace:'nowrap'}}>{item.productName}</Card.Title>
        
        <Card.Title>
          Rs.<span className='h3'>{item.price}</span>
        </Card.Title>
        <Button onClick={addToCart} className={`d-flex align-item-center m-auto border-0`}>
        <BsCartPlus size='1.8rem' />
        Add to cart</Button>
      </Card.Body>
    </Card>
    ))
}</div>
    </Container>
    </div>
  )
}

export default ViewProduct






