import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import { shopContext } from "../../App";
import Nav from "../Nav";
import img1 from "../slider/banner.webp";
import Footer from "../Footer";

const Cat = () => {
  const { product } = useContext(shopContext);
  const navigate = useNavigate();
  const pet = product.filter((dg) => dg.category === "Cat");
  return (
    <div style={{ backgroundColor: "#C32B2B" }}>
      <Nav />
      <img src={img1} style={{ width: "100%" }} />
      <Container>
        <h1
          style={{
            textAlign: "center",
            backgroundColor: "white",
            color: "#F3DA99",
            fontWeight: "bold",
          }}
        >
          Cat Special Items
        </h1>
        <div className="row justify-content-center">
          {pet.map((item) => (
            <Card
              style={{ width: "18rem", height: "auto" }}
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
      <Footer />
    </div>
  );
};

export default Cat;
