import React, { useContext } from "react";
import { shopContext } from "../../App";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Container } from "react-bootstrap";
import { BsCartPlus } from "react-icons/bs";
import { toast } from "react-toastify";
import "bootstrap-icons/font/bootstrap-icons.css";
import Nav from "../Nav";
import Footer from "../Footer";

const ViewProduct = () => {
  const naviagate = useNavigate();
  const { product } = useContext(shopContext);
  const { id } = useParams();
  const products = product.filter((item) => item.id === parseInt(id));

  const { cart, setCart, login } = useContext(shopContext);
  const addToCart = () => {
    if (login) {
      const [newData] = products;
      const duplicate = cart.filter((item) => item.id === newData.id);
      if (duplicate.length > 0) {
        toast.warning(" Product alredy existed");
      } else {
        setCart((prevState) => [...prevState, newData]);
        toast.success("Product added your cart");
      }
    } else {
      toast.warning("pls login");
      naviagate("/signin");
    }
  };
  return (
    <div style={{ backgroundColor: "#3c0747" }}>
      <Nav />
      <div style={{border:"none solid black", width:'100%',height:'20px',backgroundColor:'white'}}></div>
      <Container className="d-flex align-items-center justify-content-center ">
        {products.map((item) => (
          <div className="mt-4">
            <Card
              key={item.id}
              style={{ width: "35%", height: "auto" }}
              className={`'bg-light-black text-light':'bg-light text-black'} text-center p-0 overflow-hidden shadow mx-auto mb-4`}
            >
              <Card.Img
                variant="top"
                src={item.productImage}
                style={{ height: "100%", width: "100%" }}
              />
            </Card>

            <Card
              key={item.id}
              style={{ width: "36%", height: "auto" }}
              className={`'bg-light-black text-light':'bg-light text-black'} text-center p-0 overflow-hidden shadow mx-auto mb-4`}
            >
              <Card.Body>
                <Card.Title
                  style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    fontWeight:'bold'
                  }}
                >
                  {item.productName}
                </Card.Title>
                <Card.Title
                  style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    
                  }}
                >
                  {item.description}
                </Card.Title>
                <Card.Title>
                  <i class="bi bi-currency-rupee"></i>
                  <span className="h4">{item.price}</span>
                </Card.Title>
                <Button
                  onClick={addToCart}
                  className={`d-flex align-item-center m-auto border-0`}
                >
                  <BsCartPlus size="1.8rem" />
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Container>
      <div style={{border:"none solid black", width:'100%',height:'20px',backgroundColor:'white'}}></div>
      <Footer />
    </div>
  );
};

export default ViewProduct;
