import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown'
import '../components/Sidebar.css'

const Sidebar = () => {
  return (
    <div className='container-fluid'>
    <div className='row'>
        <div className="bg-dark col auto col-md-3 min-vh-100 d-flex justify-content-between flex-column">
        <div>
            <a className='text-decoration-none text-white d-none d-sm-inline d-flex align-itemcenter ms-3 mt-2'>
                <small className='ms-1 fs-4 d-none d-sm-inline'>Brand</small>
            </a>
            <hr className='text-secondary d-none d-sm-block'/>
            <ul className='nav nav-pills flex-column mt-3 mt-sm-0'>
                <li className='nav-item text-white fs-4 my-1 py-2 py-sm-0'>
                    <a href="" className="nav-link text-white fs-5" aria-current='page'>
                        <i className='bi bi-speedometer2'></i>
                        <small className='ms-3 d-none d-sm-inline'>Dashbord</small>
                    </a>
                </li>
                <li className='nav-item text-white fs-4 my-1 py-2 py-sm-0'>
                    <a href="" className='nav-link text-white fs-5' aria-current='page'>
                        <i className='bi bi-house'></i>
                        <small className='ms-3 d-none d-sm-inline'>Home</small>
                    </a>
                </li>
                <li className='nav-item text-white fs-4 my-1 py-2 py-sm-0'>
                    <a href="" className='nav-link text-white fs-5' aria-current='page'>
                        <i className='bi bi-table'></i>
                        <small className='ms-3 d-none d-sm-inline'>Orders</small>
                    </a>
                </li>
                <li className='nav-item text-white fs-4 my-1 py-2 py-sm-0' >
                    <a href="" className='nav-link text-white fs-5' aria-current='page'>
                        <i className='bi bi-grid'></i>
                        <small className='ms-3 d-none d-sm-inline'>Product List</small>
                    </a>
                </li>
                <li className='nav-item text-white fs-4 my-1 py-2 py-sm-0' >
                    <a href="" className='nav-link text-white fs-5' aria-current='page'>
                        <i className='bi bi-people'></i>
                        <small className='ms-3 d-none d-sm-inline'>Users</small>
                    </a>
                </li>
            </ul>
            </div>
            <div class="dropdown">
  <a class="text-decoration-none text-white dropdown-toggle p-3" type="button" id='triggerId' data-bs-toggle="dropdown" aria-expanded="false">
    <i className='bi bi-person-circle fs-5'><small className='ms-3'>Admin</small></i>
  </a>
  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item active" href="#">Profile</a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
   
  </ul>
</div>
        </div>
    </div>
      
    </div>
  )
}

export default Sidebar
