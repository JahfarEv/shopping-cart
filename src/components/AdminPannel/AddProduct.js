import React, { useContext, useState } from "react";
import Sidebar from "../Sidebar";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { shopContext } from "../../App";

const AddProduct = () => {
  const navigate = useNavigate();
  const { product, setProduct } = useContext(shopContext);
  const [newProduct, setNewProduct] = useState({
    id: product.length + 1,
    productName: "",
    price: "",
    productImage: "",
    category: "",
  });
  const Change = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };
  const Submit = () => {
    if (
      newProduct.productName &&
      newProduct.price &&
      newProduct.productImage &&
      newProduct.category
    ) {
      setProduct([...product, newProduct]);
      setNewProduct({
        id: product.length + 1,
        productName: "",
        price: "",
        productImage: "",
        category: "",
      });
      navigate("/productList");
    } else {
      toast.error("Fill");
    }
  };
  return (
    <div className="d-flex">
      <Sidebar />
      <div
        style={{ flex: "1", textAlign: "center", backgroundColor: "lightgray" }}
      >
        <h1
          style={{
            padding: "10px",
            position: "relative",
            top: "30px",
            color: "#333",
          }}
        >
          Add Product
        </h1>
        <br />
        <hr />
        <Form>
          <label style={{ fontSize: "20px" }}>Product Name</label>
          <br />
          <input
            className="shadow"
            style={{
              height: "45px",
              width: "50%",
              border: "none",
              borderRadius: "3px",
              textAlign: "center",
            }}
            type="text"
            name="productName"
            value={newProduct.productName}
            onChange={Change}
            required
          />{" "}
          <br />
          <br />
          <label style={{ fontSize: "20px" }}>Product Price</label>
          <br />
          <input
            className="shadow"
            style={{
              height: "45px",
              width: "50%",
              border: "none",
              borderRadius: "3px",
              textAlign: "center",
            }}
            type="text"
            name="price"
            value={newProduct.price}
            onChange={Change}
          />
          <br />
          <br />
          <label style={{ fontSize: "20px" }}>Product Image</label>
          <br />
          <input
            className="shadow"
            style={{
              height: "45px",
              width: "50%",
              border: "none",
              borderRadius: "3px",
              textAlign: "center",
            }}
            type="text"
            name="productImage"
            value={newProduct.productImage}
            onChange={Change}
          />
          <br />
          <br />
          <label style={{ fontSize: "20px" }}>Product type</label>
          <br />
          <input
            className="shadow"
            style={{
              height: "45px",
              width: "50%",
              border: "none",
              borderRadius: "3px",
              textAlign: "center",
            }}
            type="text"
            name="category"
            value={newProduct.category}
            onChange={Change}
          />
          <br />
          <br />
          <Button
            style={{
              backgroundColor: "black",
              border: "none",
              height: "40px",
              width: "100px",
            }}
            onClick={Submit}
          >
            Save
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddProduct;
