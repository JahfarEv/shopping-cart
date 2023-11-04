import React, { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import Sidebar from "../Sidebar";
import { useNavigate } from "react-router-dom";
import { shopContext } from "../../App";

const ProductList = () => {
  const navigate = useNavigate();
  const { product, setProduct } = useContext(shopContext);
  const removeItem = (id) => {
    const removeData = product.filter((item) => item.id !== id);
    setProduct(removeData);
  };
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: "1", textAlign: "center", margin: "auto" }}>
        <Table striped bordered hover size="sm" style={{ margin: "0 auto" }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          {product.map((item) => (
            <tbody>
              <tr>
                <td>{item.id}</td>
                <td>{item.productName}</td>
                <td>{item.price}</td>
                <td>
                  <img
                    style={{ height: "3rem" }}
                    src={item.productImage}
                    alt="productlist"
                  />
                </td>
                <td>
                  <Button
                    style={{ backgroundColor: "black", border: "none" }}
                    className="m-2"
                    onClick={() => navigate(`/edit/${item.id}`)}
                  >
                    Edit
                  </Button>
                  <Button
                    style={{ backgroundColor: "black", border: "none" }}
                    onClick={() => removeItem(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ProductList;
