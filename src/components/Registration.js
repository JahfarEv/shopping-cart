import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container";
import "../components/Category/Registration.css";
import { useContext, useRef, useState } from "react";
import { shopContext } from "../App";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";
import Brand from "./Category/img/Color logo - no background.png";

function Registration() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(shopContext);
  const nName = useRef();
  const nPass = useRef();
  const nEmail = useRef();
  const [focus, setFocus] = useState({
    errName: false,
    errEmail: false,
    errPassword: false,
  });
 

  const handleClick = () => {
    const name = nName.current.value;
    const pass = nPass.current.value;
    const email = nEmail.current.value;
   
    
    const value = { newName: name, newPass: pass, newEmail: email };
    setUser([...user, value]);
    console.log(value);
    if (!name || !pass) {
      toast.warning("pls fill out this field");
    }else if(user.find((usr)=>usr.newName===name)){
      toast.warning("User name allready exists..")
    
    } else {
      navigate("/signin");
    }
  }
;

  return (
    <div>
      <Container fluid style={{ backgroundColor: "#3c0747" }}>
        <h1 className="d-flex align-items-center justify-content-center font-weight-bold">
          <img src={Brand} style={{ width: "200px" }} alt="logo" onClick={()=>navigate('/')}/>
        </h1>
        <div className="d-flex align-items-center justify-content-center">
          <span
            class="border border-gray m-3 "
            style={{ borderRadius: "10px" }}
          >
            <form
              className="align-items-center mt-5 p-3 mb-5"
              style={{ color: "white" }}
            >
              <h2>Sign Up</h2>
              <div class="form-group" style={{ marginBottom: "20px" }}>
                <label for="exampleInputEmail1">Username</label>
                <input
                  type="text"
                  pattern="^[A-Za-z0-9].{2,10}"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter name"
                  ref={nName}
                  onBlur={() => setFocus({ ...focus, errName: true })}
                  focus={focus.errName.toString()}
                  required
                />
                <span className="spn">
                  Username should have 3-10 characters..
                </span>
              </div>
              <div class="form-group" style={{ marginBottom: "20px" }}>
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  
                  ref={nEmail}
                  onBlur={() => setFocus({ ...focus, errEmail: true })}
                  focus={focus.errEmail.toString()}
                  required
                />
                <span className="spn">Enter a valid Email Id</span>
              </div>
              <span>We'll never share your email with anyone else.</span>
              <div class="form-group" style={{ marginBottom: "20px" }}>
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="text"
                  pattern="(?=^.{6,16}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  ref={nPass}
                  onBlur={() => setFocus({ ...focus, errPassword: true })}
                  focus={focus.errPassword.toString()}
                  required
                />
                <span className="spn">
                  Password must have a minimum 6 characters and include atleast 1 uppercase 1 digit and 1 special characters
                </span>
              </div>

              <button
                type="submit"
                class="btn btn-primary"
                
                onClick={handleClick}
              >
                Submit
              </button>

            </form>
          </span>
        </div>
      </Container>
      <MDBFooter
        className="text-center text-white mt-2"
        style={{ backgroundColor: "#3c0747" }}
      >
        <MDBContainer className="p-4"></MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <span className="text-white" href="https://mdbootstrap.com/">
            PetFoods
          </span>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Registration;
