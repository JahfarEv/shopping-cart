import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { shopContext } from '../../App'
import Sidebar from '../Sidebar'

const BuyProduct = () => {
    const {buy}=useContext(shopContext)
  return (
    <div style={{display:'flex'}}>
    <Sidebar/>
    <div style={{flex:'1',textAlign:'center'}}>
     <Table striped bordered hover size="sm" style={{margin:'0 auto'}}>
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Price</th>
        <th>Image</th>
        
      </tr>
    </thead>
    {
        buy.map((item)=>(
          <tbody>
            <tr>
              <td>{item.productName}</td>
              <td>{item.price}</td>
              <td><img style={{height:'3rem'}} src={item.productImage} /></td>
            </tr>
          </tbody>
        ))
}
      </Table>
</div>
</div>
  )
}

export default BuyProduct
