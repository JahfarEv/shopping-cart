import React, { useContext } from 'react'
import { shopContext } from '../../App'
import Sidebar from '../Sidebar'
import { Table } from 'react-bootstrap'


const Users = () => {
  const {user}=useContext(shopContext)
  return (
    <div style={{display:'flex'}} >
   
    <Sidebar/>
    <div style={{flex:'1',textalign:'center'}}>
    <Table striped bordered hover size="sm" style={{margin:'0 auto'}}>
    <thead>
    <tr>
      <th >Name</th>
      <th>Email</th>
      </tr>
      </thead>
      {user.map((item)=>(
        <tbody>
          <tr>
            <td>{item.newName}</td>
            <td>{item.newEmail}</td>
          </tr>
        </tbody>
      ))}
    </Table>
    </div>
      
    </div>
  )
}

export default Users
