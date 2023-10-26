import React from 'react'
import '../components/Home.css'
import { Items } from './Items'
import All from './Category/All'
import { Card, Container } from 'react-bootstrap'
import Cards from './Category/Cards'
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {

  return (
    <Container>
   <div className='flex flex-col '>
    {Items.map((item, i)=>
      <Cards key={i}
      item={item} />
    )}
      
    </div>
    </Container>
 
  )
}

export default Home
