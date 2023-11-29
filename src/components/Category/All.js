import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";
import { shopContext } from "../../App";
import Nav from "../Nav";
import img1 from "../slider/nw3.gif";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "../Footer";

const All = () => {
  const { product } = useContext(shopContext);
  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState("");
  const search = product.filter((val) => {
    if (searchItem === "") {
      return val;
    } else if (
      val.productName.toLowerCase().includes(searchItem.toLowerCase())
    ) {
      return val;
    } else {
      return "";
    }
  });

  return (
    <div style={{ backgroundColor: "#3c0747" }}>
      <Nav />
      <div style={{border:"none solid black", width:'100%',height:'20px',backgroundColor:'white'}}></div>

      <img src={img1} alt="banner" style={{ width: "100%" }} />
      <div style={{border:"none solid black", width:'100%',height:'20px',backgroundColor:'white'}}></div>
      <div
        className="templateContainer "
        style={{ display: "flex", justifyContent: "center", margin: "10px" }}
      >
        <div className="searchInput_Container">
          <input
            style={{ width: "250px" }}
            id="searchInput"
            type="text"
            placeholder="Search here..."
            onChange={(event) => {
              setSearchItem(event.target.value);
            }}
          />
        </div>
      </div>

      <Container>
        <div className="row justify-content-center">
          {search.map((item) => (
            <Card
              style={{ width: "15rem", height: "auto" }}
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

export default All;
