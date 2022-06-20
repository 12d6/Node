import React from "react";
import { NavLink } from "react-router-dom";
import './index.css';
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
        <li >
              <NavLink to="SignUp"  className="text">
                SignUp
              </NavLink>
            </li>  
            <li >
              <NavLink to="Delete"  className="text">
                Delete
              </NavLink>
            </li>   
            <li >
              <NavLink to="Display"  className="text">
                Display
              </NavLink>
            </li> 
            <li >
              <NavLink to="ImageUpload"  className="text">
                ImageUpload
              </NavLink>
            </li>  
              
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
