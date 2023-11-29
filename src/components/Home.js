import React from "react";
import "../components/Home.css";
import { Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-awesome-slider/dist/styles.css";
import img1 from "../components/slider/nw3.gif";
import img2 from "../components/slider/puppy (1).png";
import img3 from "../components/slider/puppy (2).png";
import Footer from "./Footer";
import Nav from "./Nav";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#3c0747" }}>
      <Nav />
      <div style={{border:"none solid black", width:'100%',height:'20px',backgroundColor:'white'}}></div>
      <img
          src={img1}
          alt="bannerhome"
          style={{ width: "100%",cursor:'pointer' }}
          onClick={() => navigate("/all")} 
        />
      <Container >
      

        <div className="d-flex justify-content-center">
          <Card
            onClick={() => navigate("/dog")}
            style={{marginRight: "10px", border:'none',marginTop:'25px',backgroundColor:'#3c0747',width:'50%',height:"80%"}}
          >
            
            <Card.Img variant="top" src={img2} style={{ height: "80%", cursor:'pointer' }} />
          </Card>
          <Card onClick={() => navigate("/cat")} style={{border:'none',marginTop:'25px',backgroundColor:'#3c0747',width:'50%',height:'80%'}}>
           
            <Card.Img variant="top" src={img3} style={{ height: "80%", cursor:'pointer' }} />
          </Card>
        </div>
        
      </Container>
      <div style={{border:"none solid black", width:'100%',height:'20px',backgroundColor:'white'}}></div>
      <Footer />
    </div>
  );
};

export default Home;
