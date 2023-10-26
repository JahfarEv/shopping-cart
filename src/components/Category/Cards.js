import { Card, Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";



const Cards = ({item}) => {
  return (
    
    <Container>
   <div >


    <Card style={{ width: '18rem',height:'auto' }}
    className={`'bg-light-black text-light':'bg-light text-black'} text-center p-0 overflow-hidden shadow mx-auto mb-4`}>

      <Card.Img variant="top" src={item.productImage} style={{height:'300px'}}/>
      <Card.Body>
        <Card.Title style={{textOverflow: 'ellipsis', overflow:'hidden', whiteSpace:'nowrap'}}>{item.productName}</Card.Title>
        
        <Card.Title>
          Rs.<span className='h3'>{item.price}</span>
        </Card.Title>
       
      </Card.Body>
    </Card>
    
</div>
    </Container>
   
  )
}

export default Cards

