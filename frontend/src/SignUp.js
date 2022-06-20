import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
function SignUp() {
  const [username,setUsername] = useState("");
const [password,setPassword]=useState("");
  

  // const changeHandler = (e) => {
  //   setData({ ...data, [e.target.name]: [e.target.value] });
  // };

  const submitHandler = (e) => {
    axios.post("http://localhost:8000/SignUp", {
      Email:username,
      Password:password,
        
      })
      .then(function(response) {
        console.log(response);
        toast.success("Data Inserted Successfully",{
          className:"custom-toast",
          draggable:true,
          position:toast.POSITION.BOTTOM_CENTER
        })
       
        

        

      });

    
  };
  const Signuptoast=()=>{
    toast("Data Inserted Successfully",
     )
  }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler} className="modal" >
          <h1>Sign Up</h1>
          Email:
          <input
            type="email"
            name="username"
            placeholder="Enter your email"
            value={username}
            onChange={(e)=>{
              setUsername(e.target.value);
            }}
          />
          <br />
          <br />
          Password:
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          
           <button   type="submit"  onClick={Signuptoast} className="submit-btn"> 
            Submit
          </button>
          <ToastContainer />
          
          <br />
          <br />
          <br />
        </form>
      </center>
    </div>
  );
}

export default SignUp;

  
  