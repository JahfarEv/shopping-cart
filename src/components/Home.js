import React, { useContext } from "react";
import "../components/Home.css";
import { Card, Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "./Category/img/home.webp";
import { shopContext } from "../App";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import img1 from '../components/slider/banner.webp'
import img2 from '../components/slider/catt.jpeg'
import img3 from '../components/slider/dogg new.jpg'
import Footer from "./Footer";
import  Nav  from "./Nav";


const Home = () => {

  const { product } = useContext(shopContext);
  const navigate = useNavigate();


  return (
    <div>
<Nav/>
    <Container fluid >
      
     <img src={img1} style={{ width: "100%" }} />
     
   
     
        <div className="d-flex">
      
        <Card onClick={()=>navigate('/cat')} style={{ width: '50%',marginRight:'10px'}}>
      <Card.Img variant="top" src={img2}  style={{height:'auto'}}/>
      <h1 >Cat</h1>
      </Card>
      <Card onClick={()=>navigate('/dog')} style={{ width: '50%' }}>
      <Card.Img variant="top" src={img3} style={{height:'auto'}} />
      <h1>Dog</h1>
      </Card>
        
        </div>
        <Footer/>
    </Container>
    </div>
  );
};

export default Home;
