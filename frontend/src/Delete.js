import axios from "axios";
import React, { useState } from "react";
import "./index.css";
function Delete() {
  const [username,setUsername] = useState("");

  

  // const changeHandler = (e) => {
  //   setData({ ...data, [e.target.name]: [e.target.value] });
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/Delete", {
      Email:username,
      
        
      })
      .then(function(response) {
    
        alert("Deleted successfully");
      });

    
  };
  return (
    <div>
      <center>
        <form onSubmit={submitHandler} className="modal">
          <h1>Delete</h1>
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
          
        
          
          <button type="submit" className="submit-btn">
            DELETE
          </button>
          <br />
          <br />
          <br />
        </form>
      </center>
    </div>
  );
}

export default Delete;