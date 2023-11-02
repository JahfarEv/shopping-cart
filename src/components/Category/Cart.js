import React, { useContext } from "react";
import { shopContext } from "../../App";
import Nav from "../Nav";

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
    const byItem = cart.find((item) => item.id == id);
    const remove = cart.filter((item) => item.id !== id);
    setBuy([...buy, byItem]);
    setCart(remove);
  };

  return (
    <div>
      <Nav />
      <div className="continer">
        <h1 className="mt-4">Your Cart</h1>
        <ul className="list-group">
          {cart.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <h5>{item.productName}</h5>
                <p>{item.price}</p>
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
                </div>
                <button
                  onClick={() => buyItem(item.id)}
                  type="button"
                  className="btn btn-outline-secondary"
                >
                  Buy now
                </button>
              </div>
              <div>
                <img
                  src={item.productImage}
                  alt={item.productName}
                  style={{ width: "100px" }}
                />
                <p>Quandity :{item.quandity}</p>
                <p>Total :{item.price * item.quandity}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-3" style={{ fontSize: "25px", fontWeight: 600 }}>
          Total Amount:{totalAmount}
        </p>
      </div>
    </div>
  );
};

export default Cart;
