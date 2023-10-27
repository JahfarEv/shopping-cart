import React, { useContext } from "react";
import "../components/Home.css";
import { Card, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "./Category/img/home.webp";
import { shopContext } from "../App";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';  

const Home = () => {
  const { product } = useContext(shopContext);
  const navigate = useNavigate();

  return (
    <div>
      <img src={image} style={{ width: "100%" }} />
      <div style={{backgroundColor:'lightblack'}}>
        <div className="row justify-content-center">
          {product.map((item) => (
            <Card
              style={{ width: "18rem", height: "auto",marginTop:'30px',backgroundColor:'lightyellow'}}
              key={item.id}
              className={`'bg-light-black text-light':'bg-light text-black'} text-center p-0 overflow-hidden shadow mx-auto mb-4`}
            >
              <Card.Img
                variant="top"
                src={item.productImage}
                style={{ height: "300px" }}
              />
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

                <Card.Title>
                  Rs.<span className="h3">{item.price}</span>
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
      </div>
    </div>
  );
};

export default Home;
