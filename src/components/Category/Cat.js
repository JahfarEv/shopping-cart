import React, { useContext } from "react";
import { Items } from "../Items";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";
import { shopContext } from "../../App";

const Cat = () => {
  const {product}=useContext(shopContext)
  const navigate=useNavigate()
  const pet = product.filter((dg) => dg.category === "Cat");
  return (
    <div>
      <Container>
        <div className="row justify-content-center">
          {pet.map((item) => (
            <Card style={{ width: '18rem',height:'auto' }} key={item.id}
    className={`'bg-light-black text-light':'bg-light text-black'} text-center p-0 overflow-hidden shadow mx-auto mb-4`} >

      <Card.Img variant="top" src={item.productImage} style={{height:'300px'}}/>
      <Card.Body>
        <Card.Title style={{textOverflow: 'ellipsis', overflow:'hidden', whiteSpace:'nowrap'}}>{item.productName}</Card.Title>
        
        <Card.Title>
          Rs.<span className='h3'>{item.price}</span>
        </Card.Title>
        <Button onClick={()=>navigate(`/view/${item.id}`)} className={`d-flex align-item-center m-auto border-0`}>
        
        View Item</Button>
      </Card.Body>
    </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Cat;
