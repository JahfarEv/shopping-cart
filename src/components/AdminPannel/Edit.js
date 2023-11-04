import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { shopContext } from "../../App";
import { useContext } from "react";

const Edit = () => {
  const nvgt = useNavigate();
  const { id } = useParams();
  const { product, setProduct } = useContext(shopContext);
  const editProduct = product.find((item) => item.id === parseInt(id));
  console.log(editProduct);
  const [name, setName] = useState(editProduct.productName);
  const [price, setPrice] = useState(editProduct.price);
  const [image, setImage] = useState(editProduct.productImage);
  const [categorye, setCategory] = useState(editProduct.category);
  const handleSave = (e) => {
    e.preventDefault();
    const updates = {
      ...editProduct,
      productName: name,
      price: price,
      productImage: image,
      category: categorye,
    };
    const updatedProduct = product.map((item) =>
      item.id === parseInt(id) ? updates : item
    );
    console.log(updatedProduct);
    setProduct(updatedProduct);
    nvgt("/productList");
  };
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: "1", textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "sans-serif",
            padding: "10px",
            position: "relative",
            top: "30px",
            color: "#333",
          }}
        >
          Edit Product
        </h1>
        <br />
        <hr />
        <Form>
          <label style={{ fontSize: "20px" }}> Product Name </label>
          <br />
          <input
            className="shadow"
            style={{
              height: "45px",
              width: "500px",
              border: "none",
              borderRadius: "3px",
              textAlign: "center",
            }}
            type="text"
            name="productName"
            defaultValue={editProduct.productName}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <label style={{ fontSize: "20px" }}> Product Price </label>
          <br />
          <input
            className="shadow"
            style={{
              height: "45px",
              width: "500px",
              border: "none",
              borderRadius: "3px",
              textAlign: "center",
            }}
            type="text"
            name="price"
            defaultValue={editProduct.price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <br />

          <label style={{ fontSize: "20px" }}> Product Image </label>
          <br />
          <input
            className="shadow"
            style={{
              height: "45px",
              width: "500px",
              border: "none",
              borderRadius: "3px",
              textAlign: "center",
            }}
            type="text"
            name="productImage"
            defaultValue={editProduct.productImage}
            onChange={(e) => setImage(e.target.value)}
          />
          <br />
          <br />

          <label style={{ fontSize: "20px" }}> Product Type </label>
          <br />
          <select
            className="shadow"
            style={{
              height: "40px",
              width: "300px",
              border: "none",
              borderRadius: "3px",
              textAlign: "center",
              fontSize: "20px",
            }}
            name="category"
            defaultValue={editProduct.category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Dog</option>
            <option>Cat</option>
          </select>
          <br />
          <br />
          <Button
            onClick={handleSave}
            style={{
              backgroundColor: "black",
              border: "none",
              height: "40px",
              width: "100px",
            }}
          >
            Save
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Edit;
