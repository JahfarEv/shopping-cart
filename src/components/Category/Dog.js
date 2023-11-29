import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";
import { shopContext } from "../../App";
import Nav from "../Nav";
import img1 from "../slider/new2.jpg";
import Footer from "../Footer";

const Dog = () => {
  const { product } = useContext(shopContext);
  const navigate = useNavigate();
  const pet = product.filter((dg) => dg.category === "Dog");
  return (
    <div style={{ backgroundColor: "#3c0747" }}>
      <Nav />
      <div style={{border:"none solid black", width:'100%',height:'20px',backgroundColor:'white'}}></div>
      <img src={img1} alt="imagedog" style={{ width: "100%" }} />
      <div style={{border:"none solid black", width:'100%',height:'20px',backgroundColor:'white'}}></div>
      <Container>
       
        <div className="row justify-content-center">
          {pet.map((item) => (
            <Card
              style={{ width: "15rem", height: "auto",marginTop:'10px' }}
              key={item.id}
              className={`'bg-light-black text-light':'bg-light text-black'} text-center p-0 overflow-hidden shadow mx-auto mb-4`}
            >
              <Card.Body>
                <Card.Title
                  style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.productName}
                </Card.Title>
                <Card.Img
                  variant="top"
                  src={item.productImage}
                  style={{ height: "300px" }}
                />
                <Card.Title>
                  <i class="bi bi-currency-rupee"></i>
                  <span className="h4">{item.price}</span>
                </Card.Title>
                <Button
                  onClick={() => navigate(`/view/${item.id}`)}
                  className={`d-flex align-item-center m-auto border-0`}
                >
                  View Item
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
      <div style={{border:"none solid black", width:'100%',height:'20px',backgroundColor:'white'}}></div>
      <Footer />
    </div>
  );
};

export default Dog;
