import React, { useContext } from "react";
import { shopContext } from "../../App";
import Nav from "../Nav";
import Footer from '../Footer'

const Cart = () => {
  const { cart, setCart, buy, setBuy } = useContext(shopContext);
  const cartIncrement = (item) => {
    const updateCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quandity: cartItem.quandity + 1 };
      }
      return cartItem;
    });
    setCart(updateCart);
  };
  const cartDegrement = (item) => {
    const updateCart = cart.map((cartItem) => {
      if (cartItem.id === item.id && cartItem.quandity > 1) {
        return { ...cartItem, quandity: cartItem.quandity - 1 };
      }
      return cartItem;
    });
    setCart(updateCart);
  };
  const cartRemove = (item) => {
    const updateCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updateCart);
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quandity,
    0
  );

  const buyItem = (id) => {
    const byItem = cart.find((item) => item.id === id);
    const remove = cart.filter((item) => item.id !== id);
    setBuy([...buy, byItem]);
    setCart(remove);
  };

  return (
    <div style={{ backgroundColor: "#3c0747" }}>
      <Nav />
      <div style={{border:"none solid black", width:'100%',height:'20px',backgroundColor:'white'}}></div>
      <div className="continer" style={{color:'white'}}>
        <h1 className="mt-4">Your Cart</h1>
        <ul className="list-group">
          {cart.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center" style={{backgroundColor:""}}
            >
              <div>
                <h5>{item.productName}</h5>
                <p> <i class="bi bi-currency-rupee"></i>{item.price}</p>
                <div className="input-group">
                  <button
                    onClick={() => cartDegrement(item)}
                    type="button"
                    className="btn btn-outline-secondary"
                  >
                    -
                  </button>
                  <button
                    onClick={() => cartIncrement(item)}
                    type="button"
                    className="btn btn-outline-secondary"
                  >
                    +
                  </button>
                  <button
                    onClick={() => cartRemove(item)}
                    type="button"
                    className="btn btn-outline-danger"
                  >
                    Remove
                  </button>
                  <button
                  onClick={() => buyItem(item.id)}
                  type="button"
                  className="btn btn-outline-success "
                >
                  Buy now
                </button>
                </div>
             
              </div>
              <div>
                <img
                  src={item.productImage}
                  alt={item.productName}
                  style={{ width: "100px" }}
                />
                <p>Quandity :{item.quandity}</p>
                <p>Total : <i class="bi bi-currency-rupee"></i>{item.price * item.quandity}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="d-flex justify-content-between align-items-center" >
        
    
        <p className="mt-3" style={{ fontSize: "25px", fontWeight: 600 }}>
         Your Total Amount :
        </p>
        <p className="mt-3" style={{ fontSize: "25px", fontWeight: 600 }}>
         <i class="bi bi-currency-rupee"></i>{totalAmount}
        </p>
        </div>
      </div>
      <div style={{border:"none solid black", width:'100%',height:'20px',backgroundColor:'white'}}></div>

      <Footer />
      
    </div>
  );
};

export default Cart;
