import React from "react";
import "../components/Home.css";
import { Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-awesome-slider/dist/styles.css";
import img1 from "../components/slider/banner.webp";
import img2 from "../components/slider/catt.jpeg";
import img3 from "../components/slider/dogg new.jpg";
import Footer from "./Footer";
import Nav from "./Nav";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Nav />
      <Container fluid>
        <img
          src={img1}
          alt="bannerhome"
          style={{ width: "100%",cursor:'pointer' }}
          onClick={() => navigate("/all")} 
        />

        <div className="d-flex">
          <Card
            onClick={() => navigate("/cat")}
            style={{ width: "50%", marginRight: "10px" }}
          >
            <h1
              style={{
                textAlign: "center",
                backgroundColor: "#AA1616",
                color: "#F3DA99",
                fontWeight: "bold",
                cursor:'pointer'
              }}
            >
              Cat Special Items
            </h1>
            <Card.Img variant="top" src={img2} style={{ height: "auto",marginBottom:'10px',cursor:'pointer' }} />
          </Card>
          <Card onClick={() => navigate("/dog")} style={{ width: "50%" }}>
            <h1
              style={{
                textAlign: "center",
                backgroundColor: "#AA1616",
                color: "#F3DA99",
                fontWeight: "bold",
                cursor:'pointer'
              }}
            >
              Dog Special Items
            </h1>
            <Card.Img variant="top" src={img3} style={{ height: "auto", marginBottom:'10px',cursor:'pointer' }} />
          </Card>
        </div>
        <Footer />
      </Container>
    </div>
  );
};

export default Home;
