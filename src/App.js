import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Dog from "./components/Category/Dog";
import Cat from "./components/Category/Cat";
import All from "./components/Category/All";
import { createContext,useState } from "react";
import Home from "./components/Home";
import Cards from "./components/Category/Cards";
import ViewProduct from "./components/Category/ViewProduct";
import { Items } from "./components/Items";
import Cart from "./components/Category/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const shopContext= createContext();



function App() {
  const[cart, setCart]= useState([])
 const [product]=useState(Items);
  const[user,setUser]= useState([]);
  const[login,setLogin]= useState(false)


  return (
    <div className="App">
    <shopContext.Provider value={{user, setUser,setLogin,login,product,cart,setCart}}>
      <BrowserRouter>
        <Nav />
        <Routes>
        <Route path="/" element ={<Home />}/>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/all" element={<All />} />
          <Route path="/dog" element={<Dog />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/cart" element={<Cart />}/>
          <Route path="/view/:id" element={<ViewProduct />}/>
        </Routes>
      </BrowserRouter>
      </shopContext.Provider>
      <ToastContainer/>
      
    </div>
  );
}

export default App;
